import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProjectsGrid from './components/ProjectsGrid';
import DeepDiveModal from './components/DeepDiveModal';
import SkillsMatrix from './components/SkillsMatrix';
import ConquerRoadmap from './components/ConquerRoadmap';
import ContactFooter from './components/ContactFooter';
import CVModal from './components/CVModal';

export default function App() {
  const [selectedDeepDiveProject, setSelectedDeepDiveProject] = useState(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const bgVideoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    const ensurePlayback = () => {
      video.playbackRate = 0.65;
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    ensurePlayback();


    const handleEnded = () => {
      video.currentTime = 0;
      ensurePlayback();
    };

    video.addEventListener('pause', ensurePlayback);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('pause', ensurePlayback);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', background: '#070a12' }}>
      
      {/* 🎬 Global Fullscreen Ambient Background Video */}
      <div className="bg-video-container" style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none', background: '#070a12' }}>
        <video
          ref={bgVideoRef}
          src="/hero-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={(e) => { e.target.playbackRate = 0.65; }}
          onPlay={(e) => { e.target.playbackRate = 0.65; }}
          preload="auto"
          className="bg-video-element"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: 0.61,
            pointerEvents: 'none'
          }}
        />
        {/* Ambient Mask for text legibility */}
        <div className="bg-video-mask" style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none'
        }} />
      </div>

      {/* Sticky Glass Navigation Bar */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content Sections (Floating Glass Cards over Background Video) */}
      <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <Philosophy />
        <ProjectsGrid onSelectDeepDive={(project) => setSelectedDeepDiveProject(project)} />
        <SkillsMatrix />
        <ConquerRoadmap />
      </main>

      {/* Direct Contact & Printable Footer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ContactFooter onOpenCV={() => setIsCVOpen(true)} />
      </div>

      {/* Deep Dive Interactive Modal */}
      {selectedDeepDiveProject && (
        <DeepDiveModal 
          project={selectedDeepDiveProject} 
          onClose={() => setSelectedDeepDiveProject(null)} 
        />
      )}

      {/* Interactive CV Modal */}
      {isCVOpen && (
        <CVModal onClose={() => setIsCVOpen(false)} />
      )}

      {/* Top 2.5px Neon Reading Progress Bar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '2.5px',
          background: 'linear-gradient(90deg, #4ade80, #38bdf8)',
          boxShadow: '0 0 10px rgba(74, 222, 128, 0.7)',
          zIndex: 9999,
          pointerEvents: 'none',
          transition: 'width 0.1s linear'
        }}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(74, 222, 128, 0.45)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(74, 222, 128, 0.25)',
            color: '#4ade80',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 800,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'fadeIn 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(74, 222, 128, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(74, 222, 128, 0.25)';
          }}
          title="Volver al inicio"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

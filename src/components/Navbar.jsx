import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, FileText, Menu, X, Sparkles, Download } from 'lucide-react';
import CVDownloadDropdown from './CVDownloadDropdown';

export default function Navbar({ onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'philosophy', 'projects', 'skills', 'roadmap', 'contact'];
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // ScrollSpy logic: detect which section is currently centered/visible
      const scrollPosition = window.scrollY + 240;
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Filosofía', href: '#philosophy' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 10, 18, 0.92)' : 'rgba(7, 10, 18, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
        padding: scrolled ? '0.75rem 0' : '1.1rem 0'
      }}
    >
      <div 
        className="navbar-container" 
        style={{ 
          width: '100%', 
          maxWidth: '1440px', 
          margin: '0 auto', 
          padding: '0 2rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        
        {/* Brand Logo (Left) */}
        <a 
          href="#hero" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.65rem', 
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'rgba(11, 15, 25, 0.8)',
            border: '1px solid rgba(74, 222, 128, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.15)'
          }}>
            <img src="/favicon.png" alt="Logo" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
          </div>
          <span style={{ fontFamily: 'var(--font-code)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
            Pere<span style={{ color: '#4ade80' }}>.Sancho</span><span style={{ color: '#38bdf8' }}>()</span>
          </span>
        </a>

        {/* Desktop Nav Links (Centered with balanced breathing room & ScrollSpy highlight) */}
        <nav 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.5rem',
            margin: '0 auto'
          }} 
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#4ade80' : 'var(--text-muted)',
                  background: isActive ? 'rgba(74, 222, 128, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(74, 222, 128, 0.35)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 15px rgba(74, 222, 128, 0.15)' : 'none',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.color = '#f8fafc';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = 'var(--text-muted)';
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Status Badge & Actions (Right) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
          {/* Availability Status */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(74, 222, 128, 0.1)',
              border: '1px solid rgba(74, 222, 128, 0.25)',
              fontSize: '0.78rem',
              fontWeight: 600,
              fontFamily: 'var(--font-code)',
              color: '#4ade80',
              whiteSpace: 'nowrap'
            }} 
            className="status-pill"
            title="Disponible Remoto / Híbrido (Mallorca, España)"
          >
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 10px #4ade80',
              animation: 'blink 1.5s infinite',
              flexShrink: 0
            }} />
            <span>Remoto / Híbrido</span>
          </div>

          {/* CV Action Group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <button
              onClick={onOpenCV}
              className="btn btn-outline btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap', padding: '0.45rem 0.85rem' }}
              title="Previsualizar Curriculum Vitae en pantalla"
            >
              <FileText size={15} />
              <span>Ver CV</span>
            </button>
            <CVDownloadDropdown 
              buttonClassName="btn btn-primary btn-sm cv-quick-download"
              buttonStyle={{ padding: '0.45rem 0.85rem', whiteSpace: 'nowrap' }}
              label="PDF"
              size="small"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--text-main)', display: 'none', padding: '0.4rem' }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(11, 15, 25, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                padding: '0.5rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => { setMobileMenuOpen(false); onOpenCV(); }} className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                <FileText size={16} /> Ver CV
              </button>
              <CVDownloadDropdown 
                buttonClassName="btn btn-primary btn-sm"
                buttonStyle={{ flex: 1, justifyContent: 'center' }}
                label="Descargar PDF"
                size="small"
              />
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://github.com/PereJSS" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1160px) {
          .status-pill { display: none !important; }
        }
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}

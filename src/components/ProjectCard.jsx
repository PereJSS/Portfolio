import React, { useState, useRef } from 'react';
import { Github, ExternalLink, ShieldCheck, Star, Layers, Code, ArrowUpRight, Info, Play, Pause } from 'lucide-react';
import ProjectPreviewCanvas from './ProjectPreviewCanvas';

function ProjectCard({ project, onSelectDeepDive }) {
  const isStar = project.category === 'star';
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className={`glass-card project-card-item ${isStar ? 'project-card-star' : ''}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: isStar ? '2.25rem' : '1.75rem',
        border: isStar ? '1px solid rgba(74, 222, 128, 0.45)' : '1px solid var(--border-subtle)',
        background: isStar ? 'rgba(15, 23, 42, 0.65)' : 'var(--bg-card)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: isStar ? '0 10px 30px -10px rgba(74, 222, 128, 0.2)' : 'none',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease'
      }}
    >
      {/* Top Badge & Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span className={`badge badge-${project.badgeType || 'green'}`}>
          {isStar && <Star size={12} fill="#fbbf24" color="#fbbf24" />}
          {project.badge}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-code)' }}>
          {project.subtitle}
        </span>
      </div>

      {/* Interactive Canvas / Video Preview Frame (Hover to Play) */}
      <div 
        className="project-preview-frame"
        style={{
          width: '100%',
          height: isStar ? '190px' : '165px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '1.25rem',
          background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)',
          border: isHovered ? '1px solid rgba(74, 222, 128, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(74, 222, 128, 0.2)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Dynamic Project Workflow Canvas Simulation */}
        <ProjectPreviewCanvas projectId={project.id} isHovered={isHovered} />

        {/* Overlay Dark Gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 50%, rgba(7, 10, 18, 0.6) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Live Play Status Pill */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '12px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.3rem 0.65rem',
          borderRadius: '9999px',
          background: isHovered ? 'rgba(74, 222, 128, 0.25)' : 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(10px)',
          border: isHovered ? '1px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.15)',
          fontSize: '0.72rem',
          fontWeight: 600,
          color: isHovered ? '#4ade80' : 'var(--text-muted)',
          fontFamily: 'var(--font-code)',
          transition: 'all 0.3s ease'
        }}>
          {isHovered ? (
            <>
              <Pause size={11} color="#4ade80" />
              <span>Simulación Activa</span>
            </>
          ) : (
            <>
              <Play size={11} color="var(--text-muted)" />
              <span>Pasa el ratón para ver en acción</span>
            </>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: isStar ? '1.4rem' : '1.2rem',
        fontWeight: 700,
        marginBottom: '0.75rem',
        color: isStar ? '#f8fafc' : 'var(--text-main)',
        lineHeight: 1.3
      }}>
        {project.title}
      </h3>

      {/* Short Description */}
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        lineHeight: 1.6,
        marginBottom: '1.25rem',
        flexGrow: 1
      }}>
        {project.shortDescription}
      </p>

      {/* Stack Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {project.stack.map((tech, idx) => (
          <span 
            key={idx}
            style={{
              padding: '0.2rem 0.55rem',
              borderRadius: '4px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-code)',
              color: 'var(--text-main)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Card Actions */}
      <div 
        className="project-card-actions"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
          marginTop: 'auto',
          width: '100%'
        }}
      >
        {/* Deep Dive Action */}
        <button
          onClick={() => onSelectDeepDive(project)}
          className={`btn ${isStar ? 'btn-primary' : 'btn-outline'} btn-sm card-action-btn`}
          style={{ flex: '1 1 auto', minWidth: 0 }}
        >
          <Info size={15} style={{ flexShrink: 0 }} />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>📌 ¿Qué es? & Contexto</span>
        </button>

        {/* GitHub Direct Link */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm card-github-btn"
            title="Ver Repositorio en GitHub"
            style={{ padding: '0.5rem 0.75rem', flexShrink: 0, width: 'auto' }}
          >
            <Github size={16} style={{ flexShrink: 0 }} />
          </a>
        )}
      </div>

    </div>
  );
}

export default React.memo(ProjectCard);

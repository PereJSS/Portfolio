import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, Cpu, FileCode2, ArrowRight, Star, HelpCircle } from 'lucide-react';
import ProjectPreviewCanvas from './ProjectPreviewCanvas';

export default function DeepDiveModal({ project, onClose }) {
  if (!project) return null;
  const [activeSection, setActiveSection] = useState('what');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ border: '1px solid var(--border-glow)' }}
      >
        
        {/* Modal Header */}
        <div style={{
          padding: '1.5rem 2rem',
          background: 'linear-gradient(135deg, #0d1322, #111827)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
              <span className={`badge badge-${project.badgeType || 'green'}`}>
                {project.badge}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-code)' }}>
                Especificación Técnica del Proyecto
              </span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc' }}>
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-muted)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.target.style.background = 'rgba(239, 68, 68, 0.2)'; e.target.style.color = '#ef4444'; }}
            onMouseLeave={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.05)'; e.target.style.color = 'var(--text-muted)'; }}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs (De forma inicial abre en '¿Qué es?') */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          background: '#090d16',
          padding: '0 1rem',
          gap: '0.5rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}>
          <button
            onClick={() => setActiveSection('what')}
            style={{
              padding: '0.85rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-code)',
              borderBottom: activeSection === 'what' ? '2px solid #38bdf8' : '2px solid transparent',
              color: activeSection === 'what' ? '#38bdf8' : 'var(--text-muted)',
              background: 'none',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            📌 ¿Qué es? & Contexto
          </button>
          <button
            onClick={() => setActiveSection('how')}
            style={{
              padding: '0.85rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-code)',
              borderBottom: activeSection === 'how' ? '2px solid #4ade80' : '2px solid transparent',
              color: activeSection === 'how' ? '#4ade80' : 'var(--text-muted)',
              background: 'none',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            ⚙️ ¿Cómo Funciona? (Flujo)
          </button>
          <button
            onClick={() => setActiveSection('features')}
            style={{
              padding: '0.85rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-code)',
              borderBottom: activeSection === 'features' ? '2px solid #c084fc' : '2px solid transparent',
              color: activeSection === 'features' ? '#c084fc' : 'var(--text-muted)',
              background: 'none',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            ⚡ Características & Stack
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem', flexGrow: 1, overflowY: 'auto' }}>

          {/* Section: What it is */}
          {activeSection === 'what' && (
            <div>
              {project.isCaseStudy && project.caseStudy && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    padding: '1.1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.25)'
                  }}>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-code)', fontWeight: 700, color: '#f87171', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      ⚠️ Problema Inicial de Negocio
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      {project.caseStudy.problem}
                    </p>
                  </div>

                  <div style={{
                    padding: '1.1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(74, 222, 128, 0.08)',
                    border: '1px solid rgba(74, 222, 128, 0.25)'
                  }}>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-code)', fontWeight: 700, color: '#4ade80', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                      💡 Solución de Ingeniería Desarrollada
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      {project.caseStudy.solution}
                    </p>
                  </div>
                </div>
              )}

              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#38bdf8' }}>
                Visión General & Arquitectura
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                {project.whatIs}
              </p>

              {/* Modal Dynamic Preview Canvas Frame */}
              <div style={{
                width: '100%',
                height: '240px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1.5rem',
                border: '1px solid rgba(74, 222, 128, 0.35)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(74, 222, 128, 0.15)'
              }}>
                <ProjectPreviewCanvas projectId={project.id} isHovered={true} />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(11, 15, 25, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(74, 222, 128, 0.4)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-code)',
                  color: '#4ade80'
                }}>
                  🎬 Simulación de Flujo en Vivo
                </div>
              </div>

              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-code)', marginBottom: '0.75rem' }}>
                Tecnologías Involucradas:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.stack.map((t, i) => (
                  <span key={i} className="badge badge-cyan">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Section: How it works */}
          {activeSection === 'how' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={18} /> Arquitectura & Flujo de Ejecución Paso a Paso
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.howItWorks.map((step, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(74, 222, 128, 0.15)',
                      color: '#4ade80',
                      fontWeight: 700,
                      fontFamily: 'var(--font-code)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {step.step}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                        {step.title}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Features */}
          {activeSection === 'features' && (
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: '#c084fc' }}>
                Decisiones de Diseño & Robustez Técnica
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.features.map((feat, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.92rem',
                      color: 'var(--text-main)',
                      lineHeight: 1.5
                    }}
                  >
                    <CheckCircle2 size={18} color="#c084fc" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer / Direct Repositories */}
        <div style={{
          padding: '1.25rem 2rem',
          background: '#070a12',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          {project.githubLinks ? (
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {project.githubLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ fontSize: '0.78rem' }}
                >
                  <Github size={14} /> {link.title}
                </a>
              ))}
            </div>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Github size={16} />
              <span>Ver Código Completo en GitHub</span>
              <ExternalLink size={14} />
            </a>
          )}

          <button onClick={onClose} className="btn btn-outline btn-sm">
            Cerrar Ventana
          </button>
        </div>

      </div>
    </div>
  );
}

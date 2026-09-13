import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUp, Terminal, Phone, MapPin, Sparkles, Send, Copy, Check, Download } from 'lucide-react';
import CVDownloadDropdown from './CVDownloadDropdown';

export default function ContactFooter({ onOpenCV }) {
  const [copyToast, setCopyToast] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopyToast(`¡${label} copiado!`);
    setTimeout(() => setCopyToast(null), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{ background: 'transparent', borderTop: '1px solid var(--border-subtle)', paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        {/* Main CTA Vessel: Hero Curved Glass Container with Ambient Neon Glow */}
        <div className="cta-hero-vessel" style={{
          padding: '4rem 2.5rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(9, 13, 22, 0.92) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '32px',
          border: '1px solid rgba(74, 222, 128, 0.45)',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(74, 222, 128, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
          marginBottom: '4rem',
          position: 'relative'
        }}>
          
          {/* Accent Dual Ambient Lights (Clipped internally to preserve 32px curvature) */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: '32px', overflow: 'hidden', pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute',
              top: '-40%',
              right: '-10%',
              width: '450px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(74, 222, 128, 0.22) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-40%',
              left: '-10%',
              width: '450px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />
          </div>

          {/* Status Badge Pill */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="badge badge-green cta-status-badge" style={{
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              background: 'rgba(74, 222, 128, 0.15)',
              border: '1px solid rgba(74, 222, 128, 0.4)',
              boxShadow: '0 0 15px rgba(74, 222, 128, 0.2)'
            }}>
              🟢 Disponible para nuevos proyectos & oportunidades
            </span>
          </div>

          {/* Title with Custom Neon Gradient */}
          <h2 className="cta-title" style={{
            fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
            fontWeight: 800,
            color: '#f8fafc',
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.15
          }}>
            ¿Hablamos sobre tu próximo{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #4ade80 50%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Proyecto Web
            </span>?
          </h2>

          {/* Subtitle */}
          <p className="cta-subtitle" style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            maxWidth: '660px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.65,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)'
          }}>
            Especializado en <strong style={{ color: '#f8fafc' }}>React 19</strong>, <strong style={{ color: '#38bdf8' }}>Python/Django 4.2</strong>, testing automatizado y arquitectura de seguridad. Preparado para aportar valor en entornos ágiles desde el primer día.
          </p>

          {/* Interactive Contact Chips Bar with 1-Click Copy */}
          <div className="cta-chips-container" style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            marginBottom: '2.5rem',
            fontSize: '0.9rem',
            color: '#f8fafc',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
            position: 'relative'
          }}>
            <span className="contact-chip" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <MapPin size={16} color="#f43f5e" /> Mallorca, España
            </span>

            <div className="contact-chip" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Phone size={16} color="#4ade80" />
              <a href="tel:+34633593107" style={{ color: 'inherit', textDecoration: 'none' }} title="Llamar">
                +34 633 593 107
              </a>
              <button
                type="button"
                onClick={() => handleCopy('+34633593107', 'Teléfono')}
                title="Copiar teléfono"
                aria-label="Copiar teléfono"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '0.2rem 0.35rem', color: 'var(--text-muted)', cursor: 'pointer', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }}
              >
                <Copy size={12} />
              </button>
            </div>

            <div className="contact-chip" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Mail size={16} color="#38bdf8" />
              <a href="mailto:pere.joan.sancho14@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} title="Enviar email">
                pere.joan.sancho14@gmail.com
              </a>
              <button
                type="button"
                onClick={() => handleCopy('pere.joan.sancho14@gmail.com', 'Email')}
                title="Copiar email"
                aria-label="Copiar email"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '0.2rem 0.35rem', color: 'var(--text-muted)', cursor: 'pointer', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }}
              >
                <Copy size={12} />
              </button>
            </div>

            {/* Toast Feedback Notification */}
            {copyToast && (
              <div style={{
                position: 'absolute',
                top: '-36px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#4ade80',
                color: '#020617',
                padding: '0.25rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                fontFamily: 'var(--font-code)',
                boxShadow: '0 4px 15px rgba(74, 222, 128, 0.45)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                whiteSpace: 'nowrap',
                zIndex: 20
              }}>
                <Check size={13} strokeWidth={3} />
                <span>{copyToast}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="cta-actions-bar" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
            <a href="mailto:pere.joan.sancho14@gmail.com" className="btn btn-primary" style={{ padding: '0.95rem 2rem', fontSize: '1rem', boxShadow: '0 0 30px rgba(74, 222, 128, 0.4)' }}>
              <Send size={18} />
              <span>Contactar por Email</span>
            </a>

            <CVDownloadDropdown 
              buttonClassName="btn btn-outline"
              label="Descargar CV (.PDF)"
              direction="up"
            />

            <button onClick={onOpenCV} className="btn btn-outline" title="Previsualizar CV en pantalla">
              <FileText size={18} />
              <span>Ver CV Interactivo</span>
            </button>

            <a href="https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/" target="_blank" rel="noreferrer" className="btn btn-outline">
              <Linkedin size={18} />
              <span>Conectar en LinkedIn</span>
            </a>

            <a href="https://github.com/PereJSS" target="_blank" rel="noreferrer" className="btn btn-outline">
              <Github size={18} />
              <span>Ver GitHub</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.88rem',
          color: 'var(--text-subtle)'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-code)' }}>
            <Terminal size={16} color="#4ade80" />
            <span style={{ color: '#cbd5e1' }}>Pere Joan Sancho Suñer © {new Date().getFullYear()}</span>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: '#f8fafc',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-code)',
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35)',
              cursor: 'pointer'
            }}
          >
            <span>Volver arriba</span>
            <ArrowUp size={14} color="#4ade80" />
          </button>
        </div>

      </div>
    </footer>
  );
}

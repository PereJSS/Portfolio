import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Terminal, CheckCircle2, FileText, Sparkles, ShieldCheck, Cpu, Code2, MapPin, Phone, Mail, Copy, Check, Download } from 'lucide-react';
import CVDownloadDropdown from './CVDownloadDropdown';

export default function Hero({ onOpenCV }) {
  const [typedText, setTypedText] = useState('');
  const fullText = '< Full Stack Developer />';
  const [isDeleting, setIsDeleting] = useState(false);
  const [copyToast, setCopyToast] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopyToast(`¡${label} copiado!`);
    setTimeout(() => setCopyToast(null), 2200);
  };

  useEffect(() => {
    let timer;
    const currentLength = typedText.length;

    if (!isDeleting && currentLength < fullText.length) {
      timer = setTimeout(() => {
        setTypedText(fullText.substring(0, currentLength + 1));
      }, 100);
    } else if (!isDeleting && currentLength === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentLength > 0) {
      timer = setTimeout(() => {
        setTypedText(fullText.substring(0, currentLength - 1));
      }, 50);
    } else if (isDeleting && currentLength === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  return (
    <section id="hero" className="section" style={{ paddingTop: '8.5rem', paddingBottom: '6rem', minHeight: '94vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Core Value Proposition */}
          <div>
            {/* Profile Avatar & Console Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', width: '76px', height: '76px', flexShrink: 0 }}>
                <img 
                  src="/pere-joan-photo.png" 
                  alt="Pere Joan Sancho Suñer"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2.5px solid #4ade80',
                    boxShadow: '0 0 25px rgba(74, 222, 128, 0.4)'
                  }} 
                />
                <span 
                  title="Disponible para contratación" 
                  style={{
                    position: 'absolute',
                    bottom: '2px',
                    right: '2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    border: '2.5px solid #070a12',
                    boxShadow: '0 0 10px #22c55e'
                  }} 
                />
              </div>

              {/* Console Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(74, 222, 128, 0.4)',
                boxShadow: '0 0 20px rgba(74, 222, 128, 0.15)'
              }}>
                <Terminal size={16} color="#4ade80" />
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.9rem', color: '#4ade80', fontWeight: 600 }}>
                  {typedText}
                  <span className="animate-blink" style={{ color: '#4ade80' }}>|</span>
                </span>
              </div>
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(2.7rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              lineHeight: 1.1
            }}>
              Pere Joan <br />
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 20%, #4ade80 60%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Sancho Suñer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle" style={{
              color: '#cbd5e1',
              marginBottom: '1.75rem',
              maxWidth: '620px',
              lineHeight: 1.6,
              textShadow: '0 2px 12px rgba(0,0,0,0.85)'
            }}>
              <span className="hero-desc-full">
                Full-Stack Software Engineer especializado en <strong style={{ color: '#f8fafc' }}>React 19 + Django 4.2</strong> con sólida trayectoria previa en <strong style={{ color: '#38bdf8' }}>liderazgo de operaciones y gestión de equipos</strong>. Formado en el <strong style={{ color: '#4ade80' }}>Máster Conquer Blocks</strong>, enfocado en arquitecturas robustas, seguridad criptográfica y código de producción.
              </span>
              <span className="hero-desc-mobile">
                Ingeniero Full-Stack (<strong style={{ color: '#4ade80' }}>React 19 & Django 4.2</strong>) con sólida experiencia en <strong style={{ color: '#38bdf8' }}>liderazgo de equipos</strong> y formado en Conquer Blocks.
              </span>
            </p>

            {/* Stack & Modality Badges */}
            <div className="hero-badges-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2.25rem' }}>
              <span className="badge badge-green">🟢 Disponible Remoto / Híbrido</span>
              <span className="badge badge-green">React 19</span>
              <span className="badge badge-green">Django 4.2</span>
              <span className="badge badge-cyan hero-badge-extra">TypeScript</span>
              <span className="badge badge-cyan hero-badge-extra">Java & Spring Boot</span>
              <span className="badge badge-purple hero-badge-extra">JWT & X.509</span>
              <span className="badge badge-purple hero-badge-extra">32+ Tests Suite</span>
              <span className="badge badge-amber">Liderazgo & Operaciones</span>
            </div>

            {/* Dual CTAs (All aligned on 1 line on desktop) */}
            <div className="hero-actions-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', alignItems: 'center' }}>
              <a 
                href="#projects" 
                className="btn btn-primary" 
                style={{ 
                  padding: '0.75rem 1.25rem', 
                  whiteSpace: 'nowrap',
                  boxShadow: '0 0 25px rgba(74, 222, 128, 0.35)' 
                }}
              >
                <span>Explorar Proyectos</span>
                <ArrowRight size={17} />
              </a>
              <CVDownloadDropdown 
                buttonClassName="btn btn-outline"
                buttonStyle={{ 
                  padding: '0.75rem 1.05rem', 
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(12px)', 
                  background: 'rgba(15, 23, 42, 0.6)' 
                }}
                label="Descargar CV"
              />
              <button 
                onClick={onOpenCV} 
                className="btn btn-outline" 
                style={{ 
                  padding: '0.75rem 1.05rem', 
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(12px)', 
                  background: 'rgba(15, 23, 42, 0.6)' 
                }} 
                title="Previsualizar CV en pantalla"
              >
                <FileText size={16} />
                <span>Ver CV</span>
              </button>
              <a 
                href="https://github.com/PereJSS" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline hero-social-btn" 
                style={{ 
                  width: '42px',
                  height: '42px',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  backdropFilter: 'blur(12px)', 
                  background: 'rgba(15, 23, 42, 0.6)' 
                }} 
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline hero-social-btn" 
                style={{ 
                  width: '42px',
                  height: '42px',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  backdropFilter: 'blur(12px)', 
                  background: 'rgba(15, 23, 42, 0.6)' 
                }} 
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Quick Direct Contact Bar (Frosted Glass Mini Vessel with 1-Click Copy) */}
            <div 
              className="hero-contact-bar"
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.55rem 1.15rem',
                borderRadius: '9999px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(74, 222, 128, 0.35)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(74, 222, 128, 0.15)',
                marginTop: '1.5rem',
                fontSize: '0.85rem',
                color: '#f8fafc',
                position: 'relative'
              }}
            >
              <span className="hero-contact-chip" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={14} color="#f43f5e" />
                <span>Mallorca, España</span>
              </span>

              <span className="hero-contact-dot" style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <a href="tel:+34633593107" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'inherit', textDecoration: 'none' }} title="Llamar a Pere Joan">
                  <Phone size={14} color="#4ade80" />
                  <span>+34 633 593 107</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('+34633593107', 'Teléfono')}
                  title="Copiar teléfono"
                  aria-label="Copiar teléfono al portapapeles"
                  style={{ display: 'inline-flex', alignItems: 'center', padding: '0.15rem 0.3rem', color: 'var(--text-muted)', cursor: 'pointer', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }}
                >
                  <Copy size={12} />
                </button>
              </div>

              <span className="hero-contact-dot" style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <a href="mailto:pere.joan.sancho14@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'inherit', textDecoration: 'none' }} title="Enviar email">
                  <Mail size={14} color="#38bdf8" />
                  <span>pere.joan.sancho14@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('pere.joan.sancho14@gmail.com', 'Email')}
                  title="Copiar email"
                  aria-label="Copiar email al portapapeles"
                  style={{ display: 'inline-flex', alignItems: 'center', padding: '0.15rem 0.3rem', color: 'var(--text-muted)', cursor: 'pointer', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }}
                >
                  <Copy size={12} />
                </button>
              </div>

              {/* Toast Feedback Notification */}
              {copyToast && (
                <div style={{
                  position: 'absolute',
                  top: '-34px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#4ade80',
                  color: '#020617',
                  padding: '0.2rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-code)',
                  boxShadow: '0 4px 15px rgba(74, 222, 128, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  whiteSpace: 'nowrap',
                  zIndex: 20
                }}>
                  <Check size={12} strokeWidth={3} />
                  <span>{copyToast}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Dynamic Floating Status Glass Cards with Keyframe Micro-animations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start' }}>
            
            {/* Floating Glass Card 1 */}
            <div 
              className="hero-float-card hero-float-card-1"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1rem 1.4rem',
                borderRadius: '16px',
                background: 'rgba(11, 15, 25, 0.55)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(74, 222, 128, 0.35)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(74, 222, 128, 0.1)',
                maxWidth: '380px'
              }}
            >
              <div 
                className="card-icon"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(74, 222, 128, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4ade80'
                }}
              >
                <Sparkles size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                  Full Stack Architecture
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  React 19 SPA + Backend Python Django & Java
                </div>
              </div>
            </div>

            {/* Floating Glass Card 2 */}
            <div 
              className="hero-float-card hero-float-card-2"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1rem 1.4rem',
                borderRadius: '16px',
                background: 'rgba(11, 15, 25, 0.55)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.1)',
                maxWidth: '380px',
                marginLeft: '2rem'
              }}
            >
              <div 
                className="card-icon"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                  Seguridad Criptográfica
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Certificación X.509, RFC3161 & SimpleJWT
                </div>
              </div>
            </div>

            {/* Floating Glass Card 3 */}
            <div 
              className="hero-float-card hero-float-card-3"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1rem 1.4rem',
                borderRadius: '16px',
                background: 'rgba(11, 15, 25, 0.55)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(192, 132, 252, 0.35)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(192, 132, 252, 0.1)',
                maxWidth: '380px'
              }}
            >
              <div 
                className="card-icon"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(192, 132, 252, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c084fc'
                }}
              >
                <Cpu size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                  Calidad & Robustez
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  32 TestCase Suite • SOLID & PEP 8
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-float-card-2 {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, 
  CheckCircle2, FileText, Globe, Shield, Code, Server, Award, 
  Building2, Sparkles, ChevronDown, ExternalLink, Briefcase, 
  GraduationCap, Terminal, Check, Layers, Cpu
} from 'lucide-react';
import CVDownloadDropdown from './CVDownloadDropdown';

export default function CVModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('formal'); // 'formal' | 'tech'

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '980px', 
          background: 'radial-gradient(120% 100% at 50% 0%, #0d1527 0%, #060911 100%)', 
          border: '1px solid rgba(56, 189, 248, 0.25)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.12)',
          borderRadius: '18px',
          overflow: 'hidden'
        }}
      >
        
        {/* ================= MODAL HEADER BAR ================= */}
        <div className="cv-modal-header no-print" style={{
          padding: '1.2rem 2.2rem',
          background: 'rgba(7, 10, 18, 0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          
          {/* Format Switcher Tabs */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.4rem', 
            background: '#090d16', 
            padding: '0.35rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255, 255, 255, 0.08)' 
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('formal')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.15rem',
                borderRadius: '9px',
                fontSize: '0.85rem',
                fontWeight: 700,
                fontFamily: 'var(--font-code)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                background: activeTab === 'formal' 
                  ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' 
                  : 'transparent',
                color: activeTab === 'formal' ? '#ffffff' : 'var(--text-muted)',
                boxShadow: activeTab === 'formal' ? '0 4px 15px rgba(2, 132, 199, 0.35)' : 'none',
                border: activeTab === 'formal' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent'
              }}
            >
              <Building2 size={15} />
              <span>1. CV Formal / Estándar (ATS)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('tech')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.15rem',
                borderRadius: '9px',
                fontSize: '0.85rem',
                fontWeight: 700,
                fontFamily: 'var(--font-code)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                background: activeTab === 'tech' 
                  ? 'linear-gradient(135deg, #059669 0%, #047857 100%)' 
                  : 'transparent',
                color: activeTab === 'tech' ? '#ffffff' : 'var(--text-muted)',
                boxShadow: activeTab === 'tech' ? '0 4px 15px rgba(5, 150, 105, 0.35)' : 'none',
                border: activeTab === 'tech' ? '1px solid rgba(74, 222, 128, 0.4)' : '1px solid transparent'
              }}
            >
              <Sparkles size={15} />
              <span>2. CV Tech / Developer Edition</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <CVDownloadDropdown 
              buttonClassName="btn btn-primary btn-sm"
              label="Descargar PDF"
              size="small"
            />
            <button 
              onClick={handlePrint} 
              className="btn btn-outline btn-sm" 
              title="Imprimir versión actual"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <Printer size={15} />
              <span>Imprimir</span>
            </button>
            <button 
              onClick={onClose} 
              className="btn btn-outline btn-sm" 
              title="Cerrar modal"
              style={{ padding: '0.45rem', minWidth: 'auto', borderRadius: '8px' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ================= SCROLLABLE CV MODAL BODY ================= */}
        <div 
          className="cv-modal-scrollable-body" 
          style={{ 
            overflowY: 'auto', 
            maxHeight: 'calc(88vh - 130px)', 
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {/* ================= VIEW 1: CV FORMAL ESTÁNDAR (SWISS EXECUTIVE SPACIOUS ATS) ================= */}
          {activeTab === 'formal' && (
            <div 
              className="cv-printable-content" 
              style={{ 
                padding: '3.2rem 3.5rem', 
                background: '#ffffff', 
                color: '#1e293b', 
                lineHeight: 1.65,
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }} 
              id="printable-cv"
            >
              
              <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: '3.2rem' }}>
                
                {/* Left Column (Sidebar) */}
                <div style={{ 
                  borderRight: '1px solid #e2e8f0', 
                  paddingRight: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.6rem'
                }}>
                
                {/* Photo & Double Ring Border */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    display: 'inline-block', 
                    padding: '4px', 
                    borderRadius: '50%', 
                    border: '2px solid #bae6fd', 
                    background: '#f0f9ff' 
                  }}>
                    <img 
                      src={`${import.meta.env.BASE_URL}pere-joan-photo.png`} 
                      alt="Pere Joan Sancho"
                      style={{
                        width: '124px',
                        height: '124px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #0284c7',
                        display: 'block'
                      }} 
                    />
                  </div>
                  
                  {/* Name & Title */}
                  <div style={{ marginTop: '1.2rem', borderBottom: '2px solid #0f172a', paddingBottom: '1.1rem' }}>
                    <h1 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '0.45rem', letterSpacing: '-0.02em' }}>
                      Pere Joan Sancho
                    </h1>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0369a1', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Full Stack Developer
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, marginTop: '0.2rem' }}>
                      Python & Backend Specialist
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.4rem', marginBottom: '0.85rem' }}>
                    <div style={{ width: '4px', height: '14px', background: '#0284c7', borderRadius: '2px' }} />
                    <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                      CONTACTO
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.8rem', color: '#334155' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <div style={{ padding: '5px', background: 'rgba(2, 132, 199, 0.08)', borderRadius: '6px', color: '#0369a1', flexShrink: 0 }}>
                        <MapPin size={13} />
                      </div>
                      <span>Mallorca, España <strong style={{ color: '#0369a1' }}>(Remoto / Híbrido)</strong></span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <div style={{ padding: '5px', background: 'rgba(2, 132, 199, 0.08)', borderRadius: '6px', color: '#0369a1', flexShrink: 0 }}>
                        <Phone size={13} />
                      </div>
                      <a href="tel:+34633593107" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>+34 633 593 107</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <div style={{ padding: '5px', background: 'rgba(2, 132, 199, 0.08)', borderRadius: '6px', color: '#0369a1', flexShrink: 0 }}>
                        <Mail size={13} />
                      </div>
                      <a href="mailto:pere.joan.sancho14@gmail.com" style={{ color: '#0369a1', textDecoration: 'none', wordBreak: 'break-all' }}>pere.joan.sancho14@gmail.com</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <div style={{ padding: '5px', background: '#0284c7', borderRadius: '6px', color: '#ffffff', flexShrink: 0 }}>
                        <Globe size={13} />
                      </div>
                      <a 
                        href="https://perejss.github.io/Portfolio/" 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ 
                          color: '#0369a1', 
                          textDecoration: 'none', 
                          fontWeight: 700,
                          background: '#f0f9ff',
                          padding: '0.25rem 0.55rem',
                          borderRadius: '6px',
                          border: '1px solid #bae6fd'
                        }}
                      >
                        perejss.github.io/Portfolio
                      </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <div style={{ padding: '5px', background: 'rgba(2, 132, 199, 0.08)', borderRadius: '6px', color: '#0369a1', flexShrink: 0 }}>
                        <Github size={13} />
                      </div>
                      <a href="https://github.com/PereJSS" target="_blank" rel="noreferrer" style={{ color: '#0369a1', textDecoration: 'none' }}>github.com/PereJSS</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <div style={{ padding: '5px', background: 'rgba(2, 132, 199, 0.08)', borderRadius: '6px', color: '#0369a1', flexShrink: 0 }}>
                        <Linkedin size={13} />
                      </div>
                      <a href="https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/" target="_blank" rel="noreferrer" style={{ color: '#0369a1', textDecoration: 'none' }}>linkedin.com/in/pere-joan</a>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.4rem', marginBottom: '0.85rem' }}>
                    <div style={{ width: '4px', height: '14px', background: '#0284c7', borderRadius: '2px' }} />
                    <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                      EDUCACIÓN
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.8rem' }}>
                    <div style={{ paddingLeft: '0.75rem', borderLeft: '2px solid #0284c7' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Septiembre 2024 – Septiembre 2026</span>
                        <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#0369a1', background: '#f0f9ff', border: '1px solid #bae6fd', padding: '0.1rem 0.45rem', borderRadius: '4px', textTransform: 'uppercase' }}>Finalizado</span>
                      </div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.85rem', marginTop: '0.15rem' }}>Máster Full Stack Developer</div>
                      <div style={{ color: '#0369a1', fontWeight: 600, fontSize: '0.78rem' }}>Conquer Blocks</div>
                      <div style={{ fontSize: '0.74rem', color: '#475569', marginTop: '0.25rem', lineHeight: 1.45 }}>
                        Backend Python/Django & Java/Spring, React 19, SQL, Scrum, criptografía y CI/CD.
                      </div>
                    </div>

                    <div style={{ paddingLeft: '0.75rem', borderLeft: '2px solid #cbd5e1' }}>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>2019 – 2020</div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.85rem', marginTop: '0.1rem' }}>FP Adm. Empresas (1.er año)</div>
                      <div style={{ color: '#0369a1', fontWeight: 600, fontSize: '0.78rem' }}>IES Llorenç Garcias i Font</div>
                      <div style={{ fontSize: '0.74rem', color: '#475569', marginTop: '0.25rem', lineHeight: 1.45 }}>
                        Contabilidad analítica, balance y gestión de operaciones.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages Section with Blue Gradient Progress Bars */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.4rem', marginBottom: '0.85rem' }}>
                    <div style={{ width: '4px', height: '14px', background: '#0284c7', borderRadius: '2px' }} />
                    <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                      IDIOMAS
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.78rem' }}>
                    {[
                      { name: 'Español', level: 'Nativo', pct: 100 },
                      { name: 'Catalán', level: 'Nativo', pct: 100 },
                      { name: 'Inglés', level: 'B2 (Profesional)', pct: 75 },
                      { name: 'Alemán', level: 'A1 (Básico)', pct: 25 }
                    ].map((lang, idx) => (
                      <div key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                          <span style={{ fontWeight: 700, color: '#0f172a' }}>{lang.name}</span>
                          <span style={{ color: '#0369a1', fontWeight: 600, fontSize: '0.74rem' }}>{lang.level}</span>
                        </div>
                        <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                          <div style={{ width: `${lang.pct}%`, height: '100%', background: 'linear-gradient(90deg, #0284c7 0%, #38bdf8 100%)', borderRadius: '9999px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (Main Content) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.6rem' }}>
                
                {/* Perfil Profesional */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid #0f172a', paddingBottom: '0.4rem', marginBottom: '0.85rem' }}>
                    <div style={{ width: '4px', height: '15px', background: '#0f172a', borderRadius: '2px' }} />
                    <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '0.02em' }}>
                      Perfil Profesional
                    </h2>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#334155', lineHeight: 1.65, margin: 0 }}>
                    Desarrollador Full Stack especializado en el <strong>backend con Python y Django 4.2+</strong>, con sólida base en arquitectura de software, patrones de diseño y desarrollo de APIs RESTful robustas y desacopladas. Comprometido con las buenas prácticas de ingeniería (<strong>SOLID, PEP 8</strong>), la <strong>seguridad criptográfica</strong> (certificados notariales X.509 y sellado temporal RFC3161) y la <strong>automatización de pruebas</strong> (suite de 32 tests unitarios e integración CI/CD). Mi trayectoria previa liderando equipos en <strong>hostelería</strong> aporta un valor diferencial contrastado en <strong>resolución ágil de problemas bajo presión, comunicación asertiva y gestión orientada a objetivos</strong> de negocio.
                  </p>
                </div>

                {/* Proyecto Destacado (CheckIt - Elevated Card) */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '0.4rem', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '4px', height: '15px', background: '#0284c7', borderRadius: '2px' }} />
                      <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        Proyecto Destacado
                      </h2>
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0284c7', background: '#f0f9ff', border: '1px solid #bae6fd', padding: '0.15rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      EXPERIENCIA TÉCNICA
                    </span>
                  </div>

                  <div style={{ 
                    background: '#f8fafc', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '12px', 
                    padding: '1.4rem 1.6rem',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.45rem' }}>
                      <div>
                        <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a' }}>
                          CheckIt – Plataforma de Auditoría e Inspección Técnica
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0284c7', marginTop: '0.15rem' }}>
                          Desarrollador Backend Principal & Arquitecto
                        </div>
                      </div>
                      <a 
                        href="https://github.com/PereJSS/Checkit-Backend" 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          color: '#0369a1',
                          background: '#ffffff',
                          border: '1px solid #cbd5e1',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '6px',
                          textDecoration: 'none'
                        }}
                      >
                        <Github size={13} />
                        <span>Ver en GitHub</span>
                      </a>
                    </div>

                    <p style={{ fontSize: '0.83rem', color: '#64748b', marginBottom: '0.85rem', fontStyle: 'italic' }}>
                      Plataforma web avanzada de auditoría pericial con validez legal probatoria e inmutabilidad criptográfica.
                    </p>

                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.83rem', color: '#334155' }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#0284c7', fontWeight: 'bold' }}>•</span>
                        <span><strong>Arquitectura de API y Seguridad RBAC:</strong> Diseñé e implementé una API REST modular (<code>/api/v1</code>) con Django 4.2 y DRF. Implementé autenticación stateless JWT (SimpleJWT) y un sistema RBAC con autorización granular por roles protegiendo endpoints críticos.</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#0284c7', fontWeight: 'bold' }}>•</span>
                        <span><strong>Criptografía y Firma Notarial:</strong> Desarrollé el motor de auditoría pericial con pyHanko integrando certificados digitales X.509 y sellado de tiempo oficial RFC3161 (TSA); aseguré la inmutabilidad de evidencias fotográficas mediante hash SHA-256.</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#0284c7', fontWeight: 'bold' }}>•</span>
                        <span><strong>Frontend React 19 y Calidad CI/CD:</strong> Construí SPA reactiva con React 19 y Tailwind CSS v4 con polling adaptativo (-40% tráfico de red innecesario). Suite de 32 tests automatizados, persistencia desacoplada y despliegue continuo con GitHub Actions.</span>
                      </li>
                    </ul>

                    {/* Tech Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.95rem' }}>
                      {['Python 3.8+', 'Django 4.2', 'DRF', 'React 19', 'Tailwind CSS v4', 'PostgreSQL', 'pyHanko', 'ReportLab', 'Certificados X.509', 'RFC3161 TSA'].map((t, idx) => (
                        <span key={idx} style={{ 
                          background: '#f0f9ff', 
                          border: '1px solid #bae6fd', 
                          color: '#0369a1', 
                          padding: '0.22rem 0.55rem', 
                          borderRadius: '6px', 
                          fontSize: '0.73rem', 
                          fontWeight: 600 
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experiencia Laboral */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '0.4rem', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '4px', height: '15px', background: '#0f172a', borderRadius: '2px' }} />
                      <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        Experiencia Laboral
                      </h2>
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0284c7', background: '#f0f9ff', border: '1px solid #bae6fd', padding: '0.15rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      GESTIÓN Y LIDERAZGO
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem' }}>
                        <div>
                          <strong style={{ fontSize: '0.89rem', color: '#0f172a' }}>2023 – 2025 Jefe de Bar / Responsable de Operaciones</strong>
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0284c7', background: '#f1f5f9', padding: '0.15rem 0.55rem', borderRadius: '4px' }}>
                          Hotel Millor Sol (Mallorca)
                        </div>
                      </div>
                      <ul style={{ listStyle: 'none', paddingLeft: '0.5rem', fontSize: '0.82rem', color: '#475569', marginTop: '0.35rem' }}>
                        <li style={{ marginBottom: '0.2rem' }}>• Lideré y coordiné equipos de 8+ personas en entornos de alta exigencia y presión continua, garantizando eficiencia operativa y excelencia de servicio.</li>
                        <li>• Gestión analítica de inventarios y aprovisionamiento, optimizando recursos y reduciendo un 15% las mermas operativas mediante control riguroso de datos.</li>
                      </ul>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem' }}>
                        <div>
                          <strong style={{ fontSize: '0.89rem', color: '#0f172a' }}>2017 – 2023 Personal de Hostelería y Atención al Cliente</strong>
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0284c7', background: '#f1f5f9', padding: '0.15rem 0.55rem', borderRadius: '4px' }}>
                          Hoteles Millor Sol & Laurel
                        </div>
                      </div>
                      <ul style={{ listStyle: 'none', paddingLeft: '0.5rem', fontSize: '0.82rem', color: '#475569', marginTop: '0.35rem' }}>
                        <li>• Comunicación asertiva y resolución ágil de incidencias en entorno dinámico e internacional en 4 idiomas (español, catalán, inglés, alemán), demostrando alta adaptabilidad y orientación al cliente.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Habilidades Técnicas */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '0.4rem', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '4px', height: '15px', background: '#0284c7', borderRadius: '2px' }} />
                      <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        Habilidades Técnicas
                      </h2>
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0284c7', background: '#f0f9ff', border: '1px solid #bae6fd', padding: '0.15rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      STACK TECNOLÓGICO
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {[
                      'Python 3.8+', 'Django 4.2', 'DRF (API REST)', 'Java', 'Spring Boot', 'React 19', 
                      'TypeScript', 'JavaScript ES6+', 'PostgreSQL', 'SQLite', 'pyHanko (X.509)', 
                      'RFC3161 TSA', 'SimpleJWT (RBAC)', 'Tailwind CSS v4', 'Git / GitHub', 
                      'GitHub Actions (CI/CD)', 'Testing (32 Tests)', 'SOLID & PEP 8', 'Metodología Scrum'
                    ].map((skill, idx) => (
                      <span key={idx} style={{ 
                        background: '#f8fafc', 
                        border: '1px solid #cbd5e1', 
                        color: '#1e293b', 
                        padding: '0.24rem 0.6rem', 
                        borderRadius: '6px', 
                        fontSize: '0.74rem', 
                        fontWeight: 600 
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ================= VIEW 2: CV TECH / DEVELOPER EDITION (DARK GLASSMORPHIC SPACIOUS) ================= */}
        {activeTab === 'tech' && (
          <div 
            className="cv-printable-content" 
            style={{ 
              padding: '3rem 3.5rem', 
              background: '#070b14', 
              color: '#f8fafc', 
              lineHeight: 1.65,
              fontFamily: 'var(--font-sans)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }} 
            id="printable-cv"
          >
            
            {/* Header CV with Glowing Avatar */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.04) 100%)',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              borderRadius: '16px',
              padding: '1.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ position: 'relative', width: '120px', height: '120px', flexShrink: 0 }}>
                <img 
                  src={`${import.meta.env.BASE_URL}pere-joan-photo.png`} 
                  alt="Pere Joan Sancho Suñer"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #10b981',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.45)'
                  }} 
                />
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '3px',
                    right: '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    border: '3px solid #070b14',
                    boxShadow: '0 0 10px #22c55e'
                  }} 
                  title="Disponible para contratación"
                />
              </div>

              <div style={{ flexGrow: 1 }}>
                <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
                  Pere Joan Sancho Suñer
                </h1>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontSize: '0.95rem', 
                  color: '#10b981', 
                  fontWeight: 700, 
                  fontFamily: 'var(--font-code)', 
                  marginBottom: '1rem' 
                }}>
                  <Terminal size={16} />
                  <span>FULL STACK DEVELOPER | PYTHON & BACKEND SPECIALIST (DJANGO & REACT 19)</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', fontSize: '0.84rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.7rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <MapPin size={13} color="#f43f5e" /> Mallorca, España (Remoto / Híbrido)
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.7rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Phone size={13} color="#10b981" /> 
                    <a href="tel:+34633593107" style={{ color: '#f8fafc', textDecoration: 'none' }}>+34 633 593 107</a>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.7rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Mail size={13} color="#38bdf8" />
                    <a href="mailto:pere.joan.sancho14@gmail.com" style={{ color: '#38bdf8' }}>pere.joan.sancho14@gmail.com</a>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(16, 185, 129, 0.12)', padding: '0.3rem 0.7rem', borderRadius: '6px', border: '1px solid rgba(74, 222, 128, 0.3)' }}>
                    <Globe size={13} color="#4ade80" />
                    <a href="https://perejss.github.io/Portfolio/" target="_blank" rel="noreferrer" style={{ color: '#4ade80', textDecoration: 'none', fontWeight: 700 }}>
                      perejss.github.io/Portfolio
                    </a>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.7rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Github size={13} color="#38bdf8" />
                    <a href="https://github.com/PereJSS" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>github.com/PereJSS</a>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.7rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Linkedin size={13} color="#38bdf8" />
                    <a href="https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>linkedin.com/in/pere-joan</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Perfil Profesional */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <div style={{ width: '4px', height: '16px', background: '#10b981', borderRadius: '2px' }} />
                <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#10b981', fontFamily: 'var(--font-code)', margin: 0 }}>
                  Perfil Profesional
                </h3>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.5)', padding: '1.4rem 1.6rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
                  Desarrollador Full Stack especializado en el <strong style={{ color: '#f8fafc' }}>backend con Python y Django 4.2+</strong>, con sólida base en arquitectura de software, patrones de diseño y desarrollo de APIs RESTful robustas y desacopladas. Comprometido con las buenas prácticas (<strong style={{ color: '#f8fafc' }}>SOLID, PEP 8</strong>), la <strong style={{ color: '#38bdf8' }}>seguridad criptográfica</strong> (certificados notariales X.509 y sellado de tiempo RFC3161) y la <strong style={{ color: '#10b981' }}>automatización de pruebas</strong> (suite de 32 tests) para garantizar sistemas escalables y estables en producción. Mi trayectoria previa liderando equipos en <strong style={{ color: '#f8fafc' }}>hostelería</strong> aporta un valor diferencial contrastado en <strong style={{ color: '#10b981' }}>resolución ágil de problemas bajo presión, comunicación asertiva y gestión orientada a objetivos</strong> de negocio.
                </p>
              </div>
            </div>

            {/* Section: Proyecto Destacado CheckIt */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '4px', height: '16px', background: '#38bdf8', borderRadius: '2px' }} />
                  <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', fontFamily: 'var(--font-code)', margin: 0 }}>
                    Proyecto Destacado — Ingeniería de Software
                  </h3>
                </div>
                <span className="badge badge-green" style={{ fontSize: '0.75rem', padding: '0.2rem 0.65rem' }}>Producción Activa</span>
              </div>

              <div style={{ 
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(16, 185, 129, 0.04) 100%)', 
                padding: '1.6rem', 
                borderRadius: '14px', 
                border: '1px solid rgba(56, 189, 248, 0.25)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.22rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
                      CheckIt — Plataforma de Auditoría e Inspección Técnica
                    </h4>
                    <span style={{ fontSize: '0.88rem', color: '#38bdf8', fontFamily: 'var(--font-code)', fontWeight: 600 }}>
                      Desarrollador Backend Principal & Arquitecto
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a 
                      href="https://github.com/PereJSS/Checkit-Backend" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-outline btn-sm"
                      style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <Github size={13} />
                      <span>Repositorio GitHub</span>
                    </a>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '0.95rem', fontStyle: 'italic' }}>
                  Plataforma web avanzada para auditorías técnicas e inspecciones periciales con certificación legal e inmutabilidad criptográfica.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1', paddingLeft: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>•</span>
                    <span><strong>Arquitectura de API y Seguridad RBAC:</strong> Diseñé e implementé una API REST modular (<code>/api/v1</code>) utilizando Django 4.2 y Django REST Framework. Desarrollé autenticación stateless JWT (SimpleJWT) y un sistema RBAC con autorización granular por roles protegiendo operaciones sensibles y endpoints críticos.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>•</span>
                    <span><strong>Criptografía y Firma Notarial:</strong> Programé un generador de informes periciales PDF con ReportLab, integrando firmas digitales notariales mediante certificados X.509 utilizando pyHanko. Aseguré inmutabilidad de imágenes mediante SHA-256 y sellado de tiempo oficial RFC3161 (TSA).</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>•</span>
                    <span><strong>Frontend SPA React 19 y Calidad CI/CD:</strong> Desarrollé una SPA reactiva con React 19 y Tailwind CSS v4, optimizando el consumo de red hasta un 40% mediante polling adaptativo y Page Visibility API. Configuré suite de 32 tests automatizados y pipeline CI/CD en GitHub Actions.</span>
                  </li>
                </ul>

                <div style={{ marginTop: '1.1rem', display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {['Python 3.8+', 'Django 4.2', 'DRF', 'React 19', 'Tailwind CSS v4', 'PostgreSQL', 'pyHanko', 'ReportLab', 'X.509', 'RFC3161 TSA'].map((tech, idx) => (
                    <span key={idx} className="badge badge-cyan" style={{ fontSize: '0.74rem', padding: '0.22rem 0.6rem' }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section: Experiencia Laboral */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.95rem' }}>
                <div style={{ width: '4px', height: '16px', background: '#a855f7', borderRadius: '2px' }} />
                <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c084fc', fontFamily: 'var(--font-code)', margin: 0 }}>
                  Experiencia Laboral — Gestión, Operaciones y Liderazgo
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ 
                  background: 'rgba(15, 23, 42, 0.45)', 
                  borderLeft: '3px solid #10b981', 
                  borderRadius: '0 12px 12px 0', 
                  padding: '1.2rem 1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderLeftColor: '#10b981'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <strong style={{ fontSize: '1.02rem', color: '#f8fafc' }}>Jefe de Bar / Responsable de Operaciones</strong>
                    <span style={{ fontSize: '0.82rem', color: '#10b981', fontFamily: 'var(--font-code)', fontWeight: 600 }}>2023 – 2025 • Hotel Millor Sol (Mallorca)</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.86rem', color: '#cbd5e1', paddingLeft: 0 }}>
                    <li style={{ display: 'flex', gap: '0.55rem' }}>
                      <span style={{ color: '#10b981' }}>•</span>
                      <span>Lideré y coordiné equipos de 8+ personas en entornos de alta exigencia y presión operativa continua, asegurando estricto cumplimiento de estándares de calidad y servicio.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '0.55rem' }}>
                      <span style={{ color: '#10b981' }}>•</span>
                      <span>Supervisión integral de aprovisionamiento e inventarios, reduciendo un 15% las mermas operativas mediante optimización analítica basada en datos históricos de consumo.</span>
                    </li>
                  </ul>
                </div>

                <div style={{ 
                  background: 'rgba(15, 23, 42, 0.45)', 
                  borderLeft: '3px solid #38bdf8', 
                  borderRadius: '0 12px 12px 0', 
                  padding: '1.2rem 1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderLeftColor: '#38bdf8'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <strong style={{ fontSize: '1.02rem', color: '#f8fafc' }}>Personal de Hostelería y Atención al Cliente</strong>
                    <span style={{ fontSize: '0.82rem', color: '#38bdf8', fontFamily: 'var(--font-code)', fontWeight: 600 }}>2017 – 2023 • Hoteles Millor Sol & Laurel</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.86rem', color: '#cbd5e1', paddingLeft: 0 }}>
                    <li style={{ display: 'flex', gap: '0.55rem' }}>
                      <span style={{ color: '#38bdf8' }}>•</span>
                      <span>Comunicación asertiva y resolución ágil de incidencias en entorno dinámico e internacional en 4 idiomas (español, catalán, inglés, alemán), demostrando alta adaptabilidad y orientación al cliente.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Bottom Grid - Habilidades & Idiomas */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.6rem', flexWrap: 'wrap' }}>
              
              {/* Left: Habilidades Técnicas Categorizadas */}
              <div style={{ 
                background: 'rgba(15, 23, 42, 0.45)', 
                padding: '1.35rem 1.5rem', 
                borderRadius: '12px', 
                border: '1px solid rgba(255, 255, 255, 0.07)' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <Cpu size={15} color="#38bdf8" />
                  <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', fontFamily: 'var(--font-code)', margin: 0 }}>
                    Stack Técnico Clasificado
                  </h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.84rem' }}>
                  <div>
                    <span style={{ color: '#10b981', fontWeight: 700 }}>Backend & APIs:</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
                      {['Python 3.8+', 'Django 4.2', 'DRF', 'Java', 'Spring Boot', 'APIs RESTful'].map((t, idx) => (
                        <span key={idx} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#6ee7b7', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.73rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>Frontend:</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
                      {['React 19', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS v4', 'Vite'].map((t, idx) => (
                        <span key={idx} style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#7dd3fc', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.73rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ color: '#c084fc', fontWeight: 700 }}>Seguridad & Criptografía:</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
                      {['Firmas X.509', 'pyHanko', 'RFC3161 TSA', 'SimpleJWT', 'PostgreSQL', 'SQLite'].map((t, idx) => (
                        <span key={idx} style={{ background: 'rgba(192, 132, 252, 0.1)', color: '#d8b4fe', border: '1px solid rgba(192, 132, 252, 0.25)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.73rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ color: '#fbbf24', fontWeight: 700 }}>DevOps & Calidad:</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
                      {['SOLID', 'PEP 8', '32 Tests Automatizados', 'CI/CD GitHub Actions', 'Git', 'Scrum'].map((t, idx) => (
                        <span key={idx} style={{ background: 'rgba(251, 191, 36, 0.1)', color: '#fde047', border: '1px solid rgba(251, 191, 36, 0.25)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.73rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Idiomas & Formación Clave */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                {/* Idiomas */}
                <div style={{ 
                  background: 'rgba(15, 23, 42, 0.45)', 
                  padding: '1.35rem 1.5rem', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(255, 255, 255, 0.07)' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <Globe size={15} color="#10b981" />
                    <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#10b981', fontFamily: 'var(--font-code)', margin: 0 }}>
                      Idiomas
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.84rem' }}>
                    {[
                      { name: 'Español', level: 'Nativo', pct: 100 },
                      { name: 'Catalán', level: 'Nativo', pct: 100 },
                      { name: 'Inglés', level: 'B2 (Profesional)', pct: 75 },
                      { name: 'Alemán', level: 'A1 (Básico)', pct: 25 }
                    ].map((lang, idx) => (
                      <div key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                          <span style={{ fontWeight: 600, color: '#f8fafc' }}>{lang.name}</span>
                          <span style={{ color: '#10b981', fontSize: '0.78rem', fontFamily: 'var(--font-code)' }}>{lang.level}</span>
                        </div>
                        <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                          <div style={{ width: `${lang.pct}%`, height: '100%', background: 'linear-gradient(90deg, #10b981 0%, #38bdf8 100%)', borderRadius: '9999px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Educación Clave */}
                <div style={{ 
                  background: 'rgba(15, 23, 42, 0.45)', 
                  padding: '1.35rem 1.5rem', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(255, 255, 255, 0.07)' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <GraduationCap size={15} color="#38bdf8" />
                    <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', fontFamily: 'var(--font-code)', margin: 0 }}>
                      Educación Clave
                    </h3>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.88rem' }}>Máster Full Stack Developer</div>
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#10b981', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(74, 222, 128, 0.3)', padding: '0.1rem 0.45rem', borderRadius: '4px', textTransform: 'uppercase' }}>Finalizado</span>
                    </div>
                    <div style={{ color: '#10b981', fontSize: '0.8rem', fontFamily: 'var(--font-code)', marginTop: '0.15rem' }}>Conquer Blocks • Septiembre 2024 – Septiembre 2026</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}
        </div>

        {/* ================= MODAL BOTTOM FOOTER ================= */}
        <div className="no-print" style={{
          padding: '1.2rem 2.2rem',
          background: 'rgba(7, 10, 18, 0.95)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '0.84rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-code)' }}>
            {activeTab === 'formal' 
              ? "📄 Formato corporativo formal ATS estándar para selección ejecutiva"
              : "🚀 Formato tecnológico interactivo con métricas y arquitectura"}
          </span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a 
              href={activeTab === 'formal' ? `${import.meta.env.BASE_URL}cv-pere-joan-formal.pdf` : `${import.meta.env.BASE_URL}cv-pere-joan.pdf`}
              download={activeTab === 'formal' ? "CV_Pere_Joan_Sancho_Formal.pdf" : "CV_Pere_Joan_Sancho_Tech.pdf"}
              className="btn btn-sm"
              style={{
                background: activeTab === 'formal' 
                  ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' 
                  : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                boxShadow: activeTab === 'formal' 
                  ? '0 4px 15px rgba(2, 132, 199, 0.35)' 
                  : '0 4px 15px rgba(16, 185, 129, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontWeight: 600
              }}
            >
              <Download size={15} />
              <span>Descargar {activeTab === 'formal' ? 'CV Formal (.PDF)' : 'CV Tech (.PDF)'}</span>
            </a>
            <button onClick={onClose} className="btn btn-outline btn-sm">
              Cerrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

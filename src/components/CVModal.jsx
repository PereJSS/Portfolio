import React, { useState, useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, FileText, Globe, Shield, Code, Server, Award, Building2, Sparkles, ChevronDown } from 'lucide-react';
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
        style={{ maxWidth: '900px', background: '#0b0f19', border: '1px solid var(--border-glow)' }}
      >
        
        {/* Modal Header Actions */}
        <div className="cv-modal-header no-print" style={{
          padding: '1.25rem 2rem',
          background: '#070a12',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          
          {/* Format Switcher Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#0f172a', padding: '0.3rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('formal')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600,
                fontFamily: 'var(--font-code)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'formal' ? '#38bdf8' : 'transparent',
                color: activeTab === 'formal' ? '#020617' : 'var(--text-muted)'
              }}
            >
              <Building2 size={15} />
              <span>1. CV Formal / Estándar</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('tech')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600,
                fontFamily: 'var(--font-code)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'tech' ? '#4ade80' : 'transparent',
                color: activeTab === 'tech' ? '#020617' : 'var(--text-muted)'
              }}
            >
              <Sparkles size={15} />
              <span>2. CV Tech / Portfolio</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <CVDownloadDropdown 
              buttonClassName="btn btn-primary btn-sm"
              label="Descargar PDF"
              size="small"
            />
            <button onClick={handlePrint} className="btn btn-outline btn-sm" title="Imprimir versión actual">
              <Printer size={15} />
              <span>Imprimir</span>
            </button>
            <button onClick={onClose} className="btn btn-outline btn-sm" title="Cerrar modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ----------------- VIEW 1: CV FORMAL ESTÁNDAR (Fiel al archivo original cv python.pdf) ----------------- */}
        {activeTab === 'formal' && (
          <div className="cv-printable-content" style={{ padding: '2.5rem', background: '#ffffff', color: '#1e293b', lineHeight: 1.55 }} id="printable-cv">
            
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.25rem' }}>
              
              {/* Left Column (Sidebar) */}
              <div style={{ borderRight: '1px solid #e2e8f0', paddingRight: '1.75rem' }}>
                
                {/* Photo */}
                <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                  <img 
                    src={`${import.meta.env.BASE_URL}pere-joan-photo.png`} 
                    alt="Pere Joan Sancho"
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #0284c7',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.12)'
                    }} 
                  />
                </div>

                {/* Name & Title */}
                <div style={{ textAlign: 'center', marginBottom: '1.5rem', borderBottom: '2px solid #0f172a', paddingBottom: '1rem' }}>
                  <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '0.35rem' }}>
                    Pere Joan Sancho
                  </h1>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0369a1', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Full Stack Developer
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 500 }}>
                    Python & Backend Specialist
                  </div>
                </div>

                {/* Contact Section */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.3rem', marginBottom: '0.65rem' }}>
                    CONTACTO
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8rem', color: '#334155' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <MapPin size={13} color="#0369a1" />
                      <span>Mallorca, España</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Phone size={13} color="#0369a1" />
                      <a href="tel:+34633593107" style={{ color: 'inherit', textDecoration: 'none' }}>+34 633 593 107</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Mail size={13} color="#0369a1" />
                      <a href="mailto:pere.joan.sancho14@gmail.com" style={{ color: '#0369a1', textDecoration: 'none', wordBreak: 'break-all' }}>pere.joan.sancho14@gmail.com</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Github size={13} color="#0369a1" />
                      <a href="https://github.com/PereJSS" target="_blank" rel="noreferrer" style={{ color: '#0369a1', textDecoration: 'none' }}>GitHub: PereJSS</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Linkedin size={13} color="#0369a1" />
                      <a href="https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/" target="_blank" rel="noreferrer" style={{ color: '#0369a1', textDecoration: 'none' }}>LinkedIn: Pere Joan</a>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.3rem', marginBottom: '0.65rem' }}>
                    EDUCACIÓN
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.8rem' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>• 2024 – Presente</div>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>Máster en Desarrollo Full Stack</div>
                      <div style={{ color: '#0369a1', fontWeight: 600 }}>Conquer Blocks</div>
                      <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '0.15rem' }}>
                        Backend Python/Django & Java/Spring, SQL, Scrum y criptografía aplicada.
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>• 2019 – 2020</div>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>FP Administración de Empresas (1.er año)</div>
                      <div style={{ color: '#0369a1', fontWeight: 600 }}>IES Llorenç Garcias i Font</div>
                      <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '0.15rem' }}>
                        Contabilidad, recursos y operaciones comerciales.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages Section with Blue Progress Bars */}
                <div>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.3rem', marginBottom: '0.65rem' }}>
                    IDIOMAS
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.78rem' }}>
                    {[
                      { name: 'Español', level: 'Nativo', pct: 100 },
                      { name: 'Catalán', level: 'Nativo', pct: 100 },
                      { name: 'Inglés', level: 'B2', pct: 75 },
                      { name: 'Alemán', level: 'A1', pct: 25 }
                    ].map((lang, idx) => (
                      <div key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                          <span style={{ fontWeight: 600, color: '#1e293b' }}>{lang.name}</span>
                          <span style={{ color: '#64748b', fontSize: '0.75rem' }}>{lang.level}</span>
                        </div>
                        <div style={{ width: '100%', height: '4px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                          <div style={{ width: `${lang.pct}%`, height: '100%', background: '#0284c7', borderRadius: '9999px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (Main Content) */}
              <div>
                
                {/* Perfil Profesional */}
                <div style={{ marginBottom: '1.6rem' }}>
                  <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', borderBottom: '2px solid #0f172a', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                    Perfil Profesional
                  </h2>
                  <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.6, marginBottom: '0.45rem' }}>
                    Desarrollador Full Stack enfocado en el <strong>backend con Python y Django</strong>, con sólida formación en arquitectura de software, patrones de diseño y desarrollo de APIs robustas.
                  </p>
                  <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.6, marginBottom: '0.45rem' }}>
                    Mi experiencia previa liderando equipos en el <strong>sector de la hostelería</strong> me ha dotado de una alta capacidad para la <strong>resolución de problemas bajo presión, comunicación efectiva y gestión orientada a objetivos</strong> de negocio.
                  </p>
                  <p style={{ fontSize: '0.84rem', color: '#334155', lineHeight: 1.6 }}>
                    Comprometido con las buenas prácticas de código (<strong>SOLID, PEP 8</strong>), el <strong>control de integridad criptográfica</strong> y la <strong>automatización de pruebas</strong> para garantizar sistemas escalables y altamente seguros.
                  </p>
                </div>

                {/* Proyecto Destacado */}
                <div style={{ marginBottom: '1.6rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                      Proyecto Destacado
                    </h2>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0284c7', border: '1px solid #38bdf8', padding: '0.15rem 0.55rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      EXPERIENCIA TÉCNICA
                    </span>
                  </div>

                  <div style={{ marginBottom: '0.4rem' }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                      CheckIt – Plataforma de Auditoría e Inspección
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0369a1' }}>
                      Desarrollador Backend Principal
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.15rem', fontStyle: 'italic' }}>
                      Plataforma web avanzada de auditoría e inspecciones técnicas con certificación legal de reportes e inmutabilidad criptográfica.
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: '#334155' }}>
                    <li>
                      • <strong>Arquitectura de API y Seguridad:</strong> Diseñé e implementé una API REST estructurada (<code>/api/v1</code>) utilizando Django 4.2 y Django REST Framework. Desarrollé autenticación basada en JWT (SimpleJWT) y un sistema RBAC con autorización a nivel de endpoint.
                    </li>
                    <li>
                      • <strong>Criptografía y Firma Digital:</strong> Programé un generador de informes periciales PDF con ReportLab, integrando firmas digitales notariales mediante certificados X.509 utilizando pyHanko. Aseguré inmutabilidad de imágenes mediante SHA-256 y sellado de tiempo RFC3161 (TSA).
                    </li>
                    <li>
                      • <strong>Estrategia de Datos y Despliegue:</strong> Desacoplé la configuración con python-decouple para persistencia híbrida (SQLite local / PostgreSQL en producción). Automaticé el ciclo de vida del backend en producción.
                    </li>
                    <li>
                      • <strong>Frontend y Sincronización:</strong> Desarrollé una SPA reactiva con React 19 y Tailwind CSS v4. Diseñé un flujo de sincronización de datos con el backend mediante técnicas de polling adaptativo y Page Visibility API.
                    </li>
                  </ul>

                  {/* Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '0.6rem' }}>
                    {['Python', 'Django 4.2', 'Django REST Framework', 'React 19', 'Tailwind CSS v4', 'pyHanko', 'ReportLab', 'Certificados X.509', 'Time-Stamping RFC3161', 'PostgreSQL'].map((t, idx) => (
                      <span key={idx} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#334155', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experiencia Laboral */}
                <div style={{ marginBottom: '1.6rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                      Experiencia Laboral
                    </h2>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0284c7', border: '1px solid #38bdf8', padding: '0.15rem 0.55rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      GESTIÓN Y LIDERAZGO
                    </span>
                  </div>

                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div>
                        <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>2023 – 2025 Jefe de Bar / Responsable de Operaciones</strong>
                      </div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0369a1' }}>Hotel Millor Sol</div>
                    </div>
                    <ul style={{ listStyle: 'none', paddingLeft: '0.5rem', fontSize: '0.8rem', color: '#475569', marginTop: '0.2rem' }}>
                      <li>• Lideré y coordiné equipos de trabajo en entornos de alta presión, garantizando la eficiencia operativa y estándares de calidad.</li>
                      <li>• Gestioné el control de inventarios, optimizando los recursos del sector y reduciendo mermas mediante la toma de decisiones basada en datos.</li>
                    </ul>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div>
                        <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>2017 – 2023 Personal de Hostelería y Atención al Cliente</strong>
                      </div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0369a1' }}>Varios Hoteles</div>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', paddingLeft: '0.5rem' }}>
                      Compañías: Hotel Millor Sol, Apartahotel Ciudad Laurel
                    </div>
                    <ul style={{ listStyle: 'none', paddingLeft: '0.5rem', fontSize: '0.8rem', color: '#475569', marginTop: '0.2rem' }}>
                      <li>• Desarrollo de habilidades clave: comunicación asertiva, resolución rápida de incidencias en entornos dinámicos y adaptabilidad al cambio.</li>
                    </ul>
                  </div>
                </div>

                {/* Habilidades Técnicas */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                      Habilidades Técnicas
                    </h2>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0284c7', border: '1px solid #38bdf8', padding: '0.15rem 0.55rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      STACK TECNOLÓGICO
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {[
                      'Python (Backend)', 'SQL (Datos)', 'Java (Backend)', 'TypeScript (Frontend)',
                      'JavaScript (ES6+) (Lenguaje)', 'Django (Framework)', 'Django REST Framework (API REST)',
                      'Spring Boot (Framework Java)', 'React (Interfaz SPA)', 'pyHanko (Firmas X.509) (Criptografía)',
                      'SimpleJWT (Auth) (Seguridad)', 'Protocolo RFC3161 (TSA) (Sellado de Tiempo)',
                      'PostgreSQL (Base de Datos)', 'SQLite (Base de Datos)', 'Principios SOLID (Arquitectura)',
                      'Guía PEP 8 (Código Limpio)', 'Testing (Pruebas Unitarias) (Calidad)',
                      'Git / GitHub (Control de Versiones)', 'Marcos Ágiles (Scrum) (Gestión)'
                    ].map((skill, idx) => (
                      <span key={idx} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#1e293b', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 500 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ----------------- VIEW 2: CV TECH / PORTFOLIO (Diseño moderno dark con React 19) ----------------- */}
        {activeTab === 'tech' && (
          <div className="cv-printable-content" style={{ padding: '2.5rem', background: '#090d16', color: '#f8fafc', lineHeight: 1.6 }} id="printable-cv">
            
            {/* Header CV with Photo */}
            <div style={{
              borderBottom: '2px solid rgba(74, 222, 128, 0.4)',
              paddingBottom: '1.5rem',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ position: 'relative', width: '112px', height: '112px', flexShrink: 0 }}>
                <img 
                  src={`${import.meta.env.BASE_URL}pere-joan-photo.png`} 
                  alt="Pere Joan Sancho Suñer"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #4ade80',
                    boxShadow: '0 0 25px rgba(74, 222, 128, 0.4)'
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
                    border: '2.5px solid #090d16'
                  }} 
                  title="Activo y disponible"
                />
              </div>

              <div style={{ flexGrow: 1 }}>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                  Pere Joan Sancho Suñer
                </h1>
                <h2 style={{ fontSize: '1.1rem', color: '#4ade80', fontWeight: 600, fontFamily: 'var(--font-code)', marginBottom: '0.85rem' }}>
                  FULL STACK DEVELOPER | PYTHON & BACKEND SPECIALIST (REACT 19 & DJANGO 4.2)
                </h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={15} color="#f43f5e" /> Mallorca, España (Remoto / Híbrido)
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Phone size={15} color="#4ade80" /> 
                    <a href="tel:+34633593107" style={{ color: '#f8fafc', textDecoration: 'none' }}>+34 633 593 107</a>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Mail size={15} color="#38bdf8" />
                    <a href="mailto:pere.joan.sancho14@gmail.com" style={{ color: '#38bdf8' }}>pere.joan.sancho14@gmail.com</a>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Github size={15} color="#38bdf8" />
                    <a href="https://github.com/PereJSS" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>github.com/PereJSS</a>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Linkedin size={15} color="#38bdf8" />
                    <a href="https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>linkedin.com/in/pere-joan</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Section: Perfil Profesional */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4ade80', fontFamily: 'var(--font-code)', marginBottom: '0.6rem' }}>
                Perfil Profesional
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '0.5rem' }}>
                Desarrollador Full Stack enfocado en el <strong>backend con Python y Django 4.2</strong>, con sólida formación en arquitectura de software, patrones de diseño y desarrollo de APIs robustas desacopladas. Mi experiencia previa liderando equipos en el <strong>sector de la hostelería</strong> me ha dotado de una alta capacidad para la <strong>resolución ágil de problemas bajo presión, comunicación asertiva y gestión orientada a resultados</strong> de negocio.
              </p>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                Comprometido con las buenas prácticas de ingeniería de software (<strong>SOLID, PEP 8</strong>), el <strong>control de integridad criptográfica</strong> (certificados notariales X.509 y sellado de tiempo RFC3161) y la <strong>automatización de pruebas</strong> para garantizar sistemas escalables, estables y altamente seguros en producción.
              </p>
            </div>

            {/* Section: Proyecto Destacado */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', fontFamily: 'var(--font-code)' }}>
                  Proyecto Destacado — Ingeniería de Software
                </h3>
                <span className="badge badge-green">En Producción</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}>
                      CheckIt — Plataforma de Auditoría e Inspección Técnica
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: '#38bdf8', fontFamily: 'var(--font-code)' }}>
                      Desarrollador Backend Principal & Arquitecto
                    </span>
                  </div>
                  <a 
                    href="https://github.com/PereJSS/Checkit-Backend" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
                  >
                    <Github size={13} />
                    <span>Ver Código en GitHub</span>
                  </a>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontStyle: 'italic' }}>
                  Plataforma web avanzada para auditorías técnicas e inspecciones periciales con certificación legal e inmutabilidad criptográfica.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: '#cbd5e1', paddingLeft: '0.25rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#4ade80' }}>•</span>
                    <span><strong>Arquitectura de API y Seguridad:</strong> Diseñé e implementé una API REST estructurada (<code>/api/v1</code>) utilizando Django 4.2 y Django REST Framework. Desarrollé autenticación basada en JWT (SimpleJWT) y un sistema RBAC con autorización granular a nivel de endpoint.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#4ade80' }}>•</span>
                    <span><strong>Criptografía y Firma Digital:</strong> Programé un generador de informes periciales PDF con ReportLab, integrando firmas digitales notariales mediante certificados X.509 utilizando pyHanko. Aseguré inmutabilidad de imágenes mediante SHA-256 y sellado de tiempo RFC3161 (TSA).</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#4ade80' }}>•</span>
                    <span><strong>Estrategia de Datos y Despliegue:</strong> Desacoplé la configuración con python-decouple para persistencia híbrida (SQLite local / PostgreSQL en producción). Configuré suite de 32 pruebas automatizadas y CI/CD con GitHub Actions.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: '#4ade80' }}>•</span>
                    <span><strong>Frontend y Sincronización:</strong> Desarrollé una SPA reactiva con React 19 y Tailwind CSS v4. Diseñé un flujo de sincronización de datos con el backend mediante técnicas de polling adaptativo y Page Visibility API.</span>
                  </li>
                </ul>

                <div style={{ marginTop: '0.85rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {['Python 3.8+', 'Django 4.2', 'DRF', 'React 19', 'Tailwind CSS v4', 'PostgreSQL', 'pyHanko', 'ReportLab', 'X.509', 'RFC3161 TSA'].map((tech, idx) => (
                    <span key={idx} className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section: Experiencia Laboral */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c084fc', fontFamily: 'var(--font-code)', marginBottom: '0.75rem' }}>
                Experiencia Laboral — Gestión, Operaciones y Liderazgo
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ borderLeft: '2px solid #4ade80', paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <strong style={{ fontSize: '1rem', color: '#f8fafc' }}>Jefe de Bar / Responsable de Operaciones</strong>
                    <span style={{ fontSize: '0.82rem', color: '#4ade80', fontFamily: 'var(--font-code)' }}>2023 – 2025 • Hotel Millor Sol (Mallorca)</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    <li style={{ display: 'flex', gap: '0.45rem' }}>
                      <span>•</span>
                      <span>Lideré y coordiné equipos de trabajo en entornos de alta exigencia y presión constante, garantizando estándares de servicio y máxima eficiencia operativa.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '0.45rem' }}>
                      <span>•</span>
                      <span>Supervisión integral de compras, gestión de stock e inventarios, optimizando costes y reduciendo mermas mediante control riguroso de datos de consumo.</span>
                    </li>
                  </ul>
                </div>

                <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <strong style={{ fontSize: '1rem', color: '#f8fafc' }}>Personal de Hostelería y Atención al Cliente</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-code)' }}>2017 – 2023 • Varios Hoteles (Hotel Millor Sol, Apartahotel Ciudad Laurel)</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    <li style={{ display: 'flex', gap: '0.45rem' }}>
                      <span>•</span>
                      <span>Desarrollo intensivo de competencias transversales: comunicación asertiva, negociación y resolución ágil de incidencias imprevistas con clientes internacionales.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '0.45rem' }}>
                      <span>•</span>
                      <span>Capacidad de adaptación inmediata a dinámicas de trabajo dinámicas y colaboración interdepartamental orientada a objetivos.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Educación & Formación */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', fontFamily: 'var(--font-code)', marginBottom: '0.75rem' }}>
                Educación & Formación
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.98rem', color: '#f8fafc' }}>
                    <span>Máster en Desarrollo Full Stack</span>
                    <span style={{ color: '#4ade80', fontFamily: 'var(--font-code)', fontSize: '0.82rem' }}>2024 – Presente</span>
                  </div>
                  <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.15rem' }}>Conquer Blocks</div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Backend Python/Django & Java/Spring Boot, React 19, SQL, Criptografía aplicada, Scrum y CI/CD en entornos de producción.
                  </p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '0.95rem', color: '#f8fafc' }}>
                    <span>FP Adm. de Empresas (1.er año)</span>
                    <span style={{ color: '#38bdf8', fontFamily: 'var(--font-code)', fontSize: '0.82rem' }}>2019 – 2020</span>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.15rem' }}>IES Llorenç Garcias i Font</div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Contabilidad analítica, balance de cuentas, gestión de recursos materiales y operativa empresarial.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Stack Tecnológico & Idiomas */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fbbf24', fontFamily: 'var(--font-code)', marginBottom: '0.6rem' }}>
                  Habilidades Técnicas
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                  <div>
                    <strong style={{ color: '#4ade80' }}>Backend:</strong> Python 3.8+, Django 4.2, Django REST Framework, Java, Spring Boot, APIs RESTful, SimpleJWT.
                  </div>
                  <div>
                    <strong style={{ color: '#38bdf8' }}>Frontend:</strong> React 19, TypeScript, JavaScript ES6+, Tailwind CSS v4, HTML5/CSS3, Vite.
                  </div>
                  <div>
                    <strong style={{ color: '#c084fc' }}>Criptografía & Datos:</strong> Firmas X.509, pyHanko, TSA RFC3161, SHA-256, PostgreSQL, SQLite.
                  </div>
                  <div>
                    <strong style={{ color: '#fbbf24' }}>Buenas Prácticas:</strong> SOLID, PEP 8, 32 Tests Automatizados Django, Git/GitHub, Scrum, CI/CD.
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f43f5e', fontFamily: 'var(--font-code)', marginBottom: '0.6rem' }}>
                  Idiomas
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.86rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#f8fafc' }}>Español:</strong>
                    <span style={{ color: '#4ade80' }}>Nativo</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#f8fafc' }}>Catalán:</strong>
                    <span style={{ color: '#4ade80' }}>Nativo</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#f8fafc' }}>Inglés:</strong>
                    <span style={{ color: '#38bdf8' }}>B2 (Profesional)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#f8fafc' }}>Alemán:</strong>
                    <span style={{ color: 'var(--text-subtle)' }}>A1 (Básico)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Modal Bottom Footer */}
        <div className="no-print" style={{
          padding: '1.25rem 2rem',
          background: '#070a12',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '0.84rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-code)' }}>
            {activeTab === 'formal' 
              ? "📄 Formato corporativo formal estándar para selección y ATS"
              : "🚀 Formato moderno de ingeniería con métricas y arquitectura"}
          </span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a 
              href={activeTab === 'formal' ? `${import.meta.env.BASE_URL}cv-pere-joan-formal.pdf` : `${import.meta.env.BASE_URL}cv-pere-joan.pdf`}
              download={activeTab === 'formal' ? "CV_Pere_Joan_Sancho_Formal.pdf" : "CV_Pere_Joan_Sancho_Tech.pdf"}
              className="btn btn-primary btn-sm"
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

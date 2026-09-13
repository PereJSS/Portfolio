import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, ChevronDown, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export default function CVDownloadDropdown({ buttonClassName = "btn btn-outline", buttonStyle = {}, label = "Descargar CV", size = "normal", direction = "down" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSmall = size === "small";
  const isUp = direction === "up";

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClassName}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: isSmall ? '0.35rem' : '0.5rem',
          cursor: 'pointer',
          ...buttonStyle
        }}
        title="Opciones de descarga del Curriculum Vitae"
        aria-expanded={isOpen}
      >
        <Download size={isSmall ? 14 : 17} />
        <span>{label}</span>
        <ChevronDown 
          size={isSmall ? 12 : 14} 
          style={{ 
            transform: isUp 
              ? (isOpen ? 'rotate(0deg)' : 'rotate(180deg)') 
              : (isOpen ? 'rotate(180deg)' : 'rotate(0deg)'), 
            transition: 'transform 0.2s ease' 
          }} 
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            ...(isUp 
              ? { bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' }
              : { top: 'calc(100% + 8px)', right: 0 }
            ),
            width: '290px',
            background: '#0b0f19',
            border: '1px solid rgba(74, 222, 128, 0.35)',
            borderRadius: '14px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.85), 0 0 25px rgba(74, 222, 128, 0.2)',
            padding: '0.6rem',
            zIndex: 1050,
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div style={{ padding: '0.35rem 0.65rem 0.5rem 0.65rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-code)', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Selecciona el formato de CV
            </span>
          </div>

          {/* Option 1: CV Formal Estándar */}
          <a
            href="/cv-pere-joan-formal.pdf"
            download="CV_Pere_Joan_Sancho_Formal.pdf"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#f8fafc',
              background: 'transparent',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', marginTop: '2px', flexShrink: 0 }}>
              <Building2 size={16} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.88rem' }}>
                <span>CV Formal / Clásico</span>
                <span className="badge badge-cyan" style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem' }}>ATS Estándar</span>
              </div>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: 1.35 }}>
                Formato corporativo tradicional en fondo blanco. Ideal para consultoras, RRHH y procesos clásicos.
              </p>
            </div>
          </a>

          {/* Option 2: CV Tech / Portfolio */}
          <a
            href="/cv-pere-joan.pdf"
            download="CV_Pere_Joan_Sancho_Tech.pdf"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#f8fafc',
              background: 'transparent',
              transition: 'all 0.15s ease',
              marginTop: '0.25rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(74, 222, 128, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(74, 222, 128, 0.15)', color: '#4ade80', marginTop: '2px', flexShrink: 0 }}>
              <Sparkles size={16} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.88rem' }}>
                <span>CV Tech / Portfolio</span>
                <span className="badge badge-green" style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem' }}>Full Stack</span>
              </div>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: 1.35 }}>
                Formato moderno de alto impacto con métricas técnicas, React 19 y arquitectura Django 4.2.
              </p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

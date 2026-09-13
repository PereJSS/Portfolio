import React from 'react';
import { Shield, Zap, Award, Layers, CheckCircle2, Lock, Cpu, Database } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: <Award size={24} color="#4ade80" />,
      title: "Metodología Intensiva & Conquer Blocks",
      description: "Formación práctica basada en la construcción autónoma de proyectos reales, dominando un ecosistema completo de tecnologías web y backend."
    },
    {
      icon: <Layers size={24} color="#38bdf8" />,
      title: "Especialización React 19 + Django 4.2",
      description: "Arquitecturas cliente-servidor desacopladas, APIs RESTful versionadas (/api/v1/...), gestión de estado reactivo y persistencia de bases de datos relacionales."
    },
    {
      icon: <Shield size={24} color="#c084fc" />,
      title: "Seguridad Criptográfica & Testing",
      description: "Enfoque en código seguro y mantenible: implementaciones de firmas X.509, sellado temporal RFC3161, almacenamiento JWT en sessionStorage y suite de 32 tests automatizados."
    }
  ];

  const metrics = [
    { value: "10+", label: "Proyectos Desarrollados", note: "Código disponible" },
    { value: "32", label: "Tests Automatizados", note: "Garantizando estabilidad" },
    { value: "X.509", label: "Criptografía & Timestamps", note: "Firma y validez legal" },
    { value: "<50KB", label: "Optimización de Bundle", note: "JS Vanilla High-Performance" }
  ];

  return (
    <section id="philosophy" className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Perfil & Filosofía Técnica</span>
          </div>
          <h2 className="section-title">
            Madurez Técnica & <span style={{ color: '#4ade80' }}>Buenas Prácticas</span>
          </h2>
          <p className="section-subtitle">
            Un enfoque riguroso formado en el Máster de Conquer Blocks: construyendo software funcional, mantenible y listo para resolver necesidades de negocio reales.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card philosophy-pillar-card" style={{ padding: '1.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>{pillar.title}</h3>
              <p className="pillar-desc" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Metrics Counter Banner */}
        <div className="glass-card philosophy-metrics-card" style={{
          padding: '2rem 1.5rem',
          background: 'rgba(11, 15, 25, 0.55)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(74, 222, 128, 0.3)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {metrics.map((m, idx) => (
              <div key={idx} style={{ padding: '0.5rem' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: idx === 0 ? '#4ade80' : idx === 1 ? '#38bdf8' : idx === 2 ? '#c084fc' : '#fbbf24',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>
                  {m.value}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-code)' }}>
                  {m.note}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { TIMELINE_DATA } from '../data/timelineData';
import { Award, CheckCircle2, Terminal, Code2, ShieldCheck, Briefcase } from 'lucide-react';

export default function ConquerRoadmap() {
  return (
    <section id="roadmap" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Formación Intensiva de Élite</span>
          </div>
          <h2 className="section-title">
            Roadmap del <span style={{ color: '#4ade80' }}>Máster Conquer Blocks</span>
          </h2>
          <p className="section-subtitle">
            Una trayectoria guiada y autónoma simulando entornos de desarrollo reales en empresas tech: desde la lógica algorítmica hasta despliegues en producción.
          </p>
        </div>

        {/* Vertical Illuminated Timeline */}
        <div style={{ position: 'relative', maxWidth: '840px', margin: '0 auto' }}>
          
          {/* Vertical Glowing Line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '20px',
            bottom: '20px',
            width: '3px',
            background: 'linear-gradient(180deg, #4ade80 0%, #38bdf8 50%, #c084fc 100%)',
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.4)',
            borderRadius: '9999px'
          }} className="timeline-line" />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {TIMELINE_DATA.map((item, idx) => (
              <div 
                key={idx} 
                className="timeline-item"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 1fr',
                  gap: '1rem',
                  alignItems: 'flex-start'
                }}
              >
                {/* Step Circle */}
                <div 
                  className="timeline-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'var(--bg-surface)',
                    border: '2px solid #4ade80',
                    color: '#4ade80',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 800,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)',
                    zIndex: 2
                  }}
                >
                  {item.step}
                </div>

                {/* Content Card */}
                <div className="glass-card timeline-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>
                      {item.title}
                    </h3>
                    <span className="badge badge-green">
                      {item.period}
                    </span>
                  </div>

                  <p className="timeline-desc" style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {item.description}
                  </p>

                  {/* Highlight */}
                  <div className="timeline-highlight" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: '#38bdf8',
                    fontFamily: 'var(--font-code)',
                    marginBottom: '1rem',
                    background: 'rgba(56, 189, 248, 0.08)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}>
                    <CheckCircle2 size={15} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>{item.highlight}</span>
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {item.techs.map((t, i) => (
                      <span key={i} style={{
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-code)',
                        color: 'var(--text-subtle)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

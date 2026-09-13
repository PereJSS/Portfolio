import React from 'react';
import { SKILLS_DATA } from '../data/skillsData';
import { Layout, Server, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

export default function SkillsMatrix() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={22} color="#4ade80" />;
      case 'Server': return <Server size={22} color="#38bdf8" />;
      case 'ShieldCheck': return <ShieldCheck size={22} color="#c084fc" />;
      case 'Cpu': return <Cpu size={22} color="#fbbf24" />;
      default: return <Sparkles size={22} color="#4ade80" />;
    }
  };

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Matriz de Dominio Técnico</span>
          </div>
          <h2 className="section-title">
            Ecosistema & <span style={{ color: '#38bdf8' }}>Herramientas Tecnológicas</span>
          </h2>
          <p className="section-subtitle">
            Especialidades backend, frontend y seguridad verificadas mediante proyectos de software en producción.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
          {SKILLS_DATA.map((quad, idx) => (
            <div key={idx} className="glass-card skill-card-item" style={{ padding: '1.5rem' }}>
              
              {/* Quadrant Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {getIcon(quad.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{quad.category}</h3>
                </div>
              </div>

              {/* Quadrant Description */}
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {quad.description}
              </p>

              {/* Skills List with Qualitative Level Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {quad.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      fontSize: '0.88rem'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{skill.name}</span>
                    <span className={`badge badge-${skill.badgeType || 'cyan'}`} style={{ fontSize: '0.7rem' }}>
                      {skill.levelLabel}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

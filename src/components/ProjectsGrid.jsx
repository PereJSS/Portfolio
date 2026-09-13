import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { Code2, Filter, Sparkles, Star, ChevronDown, ChevronUp, Search, X } from 'lucide-react';

export default function ProjectsGrid({ onSelectDeepDive }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'star', label: 'Caso de Estudio ⭐' },
    { id: 'fullstack', label: 'Full Stack (React + Django)' },
    { id: 'react', label: 'React 19 SPAs' },
    { id: 'vanilla', label: 'JS Vanilla (High-Perf)' },
    { id: 'satellites', label: 'Módulos & Experimentos 📦' }
  ];

  const filteredProjects = PROJECTS_DATA.filter(project => {
    // Category check
    const matchesCategory = activeFilter === 'all' || project.categories.includes(activeFilter);
    if (!matchesCategory) return false;

    // Search query check (title, subtitle, description, tech stack)
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const matchesTitle = project.title?.toLowerCase().includes(q);
    const matchesSubtitle = project.subtitle?.toLowerCase().includes(q);
    const matchesDesc = project.shortDescription?.toLowerCase().includes(q);
    const matchesStack = project.stack?.some(tech => tech.toLowerCase().includes(q));

    return matchesTitle || matchesSubtitle || matchesDesc || matchesStack;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Portafolio & Proyectos</span>
          </div>
          <h2 className="section-title">
            Proyectos de <span style={{ color: '#4ade80' }}>Ingeniería</span>
          </h2>
          <p className="section-subtitle">
            Plataformas Full-Stack enfocadas en resolución de problemas de negocio, firma digital, rendimiento en JS Vanilla y suites de testing.
          </p>
        </div>

        {/* Real-Time Live Search Bar */}
        <div style={{
          maxWidth: '560px',
          margin: '0 auto 1.75rem auto',
          position: 'relative',
          width: '100%'
        }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '9999px',
            border: '1px solid rgba(74, 222, 128, 0.35)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(74, 222, 128, 0.1)',
            padding: '0.45rem 1.15rem',
            transition: 'all 0.3s ease'
          }}>
            <Search size={17} color="#4ade80" style={{ flexShrink: 0, marginRight: '0.65rem' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tecnología o palabra clave (ej: React 19, Django, X.509, Tests)..."
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#f8fafc',
                fontSize: '0.88rem',
                fontFamily: 'inherit'
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  padding: '0.2rem',
                  borderRadius: '50%',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none'
                }}
                title="Limpiar búsqueda"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Live Match Counter Pill */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.45rem 0.75rem 0 0.75rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-code)'
          }}>
            <span>
              {searchQuery ? (
                <>Resultados para <span style={{ color: '#4ade80', fontWeight: 600 }}>"{searchQuery}"</span>: {filteredProjects.length} de {PROJECTS_DATA.length}</>
              ) : (
                <>{PROJECTS_DATA.length} proyectos documentados</>
              )}
            </span>
            {(searchQuery || activeFilter !== 'all') && (
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                style={{
                  color: '#38bdf8',
                  fontSize: '0.75rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'inherit'
                }}
              >
                Restablecer filtros
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-scroll-container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          marginBottom: '3rem'
        }}>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '0.55rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                background: activeFilter === filter.id ? '#4ade80' : 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: activeFilter === filter.id ? '#020617' : '#e2e8f0',
                border: activeFilter === filter.id ? '1px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: activeFilter === filter.id ? '0 0 18px rgba(74, 222, 128, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.35)',
                textShadow: activeFilter === filter.id ? 'none' : '0 1px 4px rgba(0, 0, 0, 0.8)'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="glass-card" style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            maxWidth: '520px',
            margin: '2rem auto',
            borderRadius: '16px',
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            <p style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.5rem', fontWeight: 600 }}>
              No se encontraron proyectos para "{searchQuery}"
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Prueba buscando por otra tecnología como "React", "Django", "Python", "Tests" o pulsa el botón para restablecer.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="btn btn-primary btn-sm"
            >
              Mostrar todos los proyectos
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
            width: '100%'
          }} className="projects-layout">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                style={{
                  gridColumn: project.category === 'star' && !searchQuery ? '1 / -1' : 'span 1',
                  minWidth: 0,
                  width: '100%'
                }}
              >
                <ProjectCard 
                  project={project} 
                  onSelectDeepDive={onSelectDeepDive} 
                />
              </div>
            ))}
          </div>
        )}

        {/* Note at bottom */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <span style={{ 
            color: '#cbd5e1', 
            fontSize: '0.88rem', 
            background: 'rgba(11, 15, 25, 0.75)', 
            backdropFilter: 'blur(12px)', 
            WebkitBackdropFilter: 'blur(12px)', 
            padding: '0.6rem 1.25rem', 
            borderRadius: '9999px', 
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.85)'
          }}>
            💡 Repositorios abiertos y documentados en GitHub con READMEs técnicos y estructura de código clara.
          </span>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-layout {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .projects-layout > div {
            grid-column: span 1 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

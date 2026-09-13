import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Cpu, Database, Search, Star, Heart, Terminal, RefreshCw, Layers, Calendar, Lock, Code, ShoppingCart, BarChart3, LayoutGrid, FileText } from 'lucide-react';

function ProjectPreviewCanvas({ projectId, isHovered }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setStep((prev) => (prev + 1) % 4);
      }, 1200);
    } else {
      setStep(0);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  // Project 1: CheckIt (B2B Inspection & X.509 Digital Signature)
  if (projectId === 'checkit') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #090d16 0%, #0f172a 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#4ade80', fontWeight: 700 }}>
            <ShieldCheck size={14} /> CheckIt B2B Engine
          </span>
          <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}>RBAC Authorized</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', my: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
            <span>Evidencia: #IMG-2026.png</span>
            <span style={{ color: '#38bdf8' }}>SHA-256: e3b0c442...</span>
          </div>

          <div style={{
            padding: '0.5rem',
            borderRadius: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(74, 222, 128, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span style={{ color: step >= 1 ? '#4ade80' : 'var(--text-muted)' }}>
              {step === 0 && "⏳ Subiendo evidencias in situ..."}
              {step === 1 && "🔐 Generando Hashing SHA-256..."}
              {step === 2 && "📜 Sello de Tiempo RFC3161 OK"}
              {step === 3 && "✅ Firma X.509 Notarial Emitida"}
            </span>
            <CheckCircle2 size={14} color={step >= 2 ? '#4ade80' : '#64748b'} />
          </div>

          <div style={{ fontSize: '0.68rem', color: 'var(--text-subtle)', background: '#020617', padding: '0.35rem 0.5rem', borderRadius: '4px' }}>
            {step === 0 && "> POST /api/v1/inspections/order-892/finish"}
            {step === 1 && "> pyHanko Certificate Signed (X.509)"}
            {step === 2 && "> TimeStamp Authority Response: 200 OK"}
            {step === 3 && "> PDF Generated with ReportLab Engine"}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#4ade80' }}>
          <span>📄 Estado: Reporte Probatorio Validado</span>
          <span style={{ color: '#c084fc' }}>PageVisibility Polling</span>
        </div>
      </div>
    );
  }

  // Project 2: Gestor de Reservas de Hoteles & 32 Tests Suite
  if (projectId === 'gestor-reservas') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #070a12 0%, #111827 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#38bdf8', fontWeight: 700 }}>
            <Calendar size={14} /> Backoffice Hotelero
          </span>
          <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>32 Tests Suite OK</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.3rem', my: 'auto' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => {
            const isBooked = day === 3 || day === 4 || day === 8;
            const isSelected = step > 0 && (day === 5 || day === 6);
            return (
              <div 
                key={day}
                style={{
                  padding: '0.4rem 0.2rem',
                  textAlign: 'center',
                  borderRadius: '4px',
                  background: isBooked ? 'rgba(239, 68, 68, 0.2)' : isSelected ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255, 255, 255, 0.04)',
                  border: isBooked ? '1px solid #ef4444' : isSelected ? '1px solid #4ade80' : '1px solid transparent',
                  color: isBooked ? '#f87171' : isSelected ? '#4ade80' : 'var(--text-muted)',
                  fontSize: '0.68rem',
                  fontWeight: 600
                }}
              >
                {day} Set
              </div>
            );
          })}
        </div>

        <div style={{ background: '#020617', padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
          <div style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.68rem' }}>
            <Terminal size={12} /> python manage.py test (32 tests)
          </div>
          <div style={{ color: '#4ade80', fontSize: '0.65rem', marginTop: '0.15rem' }}>
            {step === 0 && "Ejecutando suite anti-overbooking..."}
            {step === 1 && "✔ test_anti_overbooking_range_lock ... OK"}
            {step === 2 && "✔ test_recurring_service_pattern ... OK"}
            {step === 3 && "OK (32 tests completados en 0.84s)"}
          </div>
        </div>
      </div>
    );
  }

  // Project 3: Rick & Morty React 19 (SwiperJS & Custom Hooks)
  if (projectId === 'rick-morty-react') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #0d1117 0%, #1e1b4b 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#c084fc', fontWeight: 700 }}>
            <Layers size={14} /> React 19 SPA + SwiperJS
          </span>
          <span className="badge badge-purple" style={{ fontSize: '0.65rem' }}>useFavorites Hook</span>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', overflow: 'hidden', py: '0.3rem' }}>
          {['Rick Sanchez', 'Morty Smith', 'Summer Smith'].map((name, idx) => (
            <div 
              key={idx}
              style={{
                flexShrink: 0,
                width: '110px',
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: step === idx ? '1px solid #c084fc' : '1px solid rgba(255, 255, 255, 0.08)',
                transform: step === idx ? 'scale(1.04)' : 'scale(0.96)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ width: '100%', height: '35px', background: 'rgba(192, 132, 252, 0.2)', borderRadius: '4px', marginBottom: '0.3rem' }} />
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#f8fafc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {name}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-subtle)' }}>Human</span>
                <Heart size={10} fill={step === idx ? '#c084fc' : 'none'} color="#c084fc" />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#c084fc' }}>
          <span>💾 Sincronización LocalStorage: OK</span>
          <span>⚡ GitHub Actions CI/CD</span>
        </div>
      </div>
    );
  }

  // Project 4: Rick & Morty JS Vanilla (High Performance <50KB)
  if (projectId === 'rick-morty-vanilla') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #051910 0%, #0b2518 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(74, 222, 128, 0.2)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#4ade80', fontWeight: 700 }}>
            <Cpu size={14} /> JS Vanilla High-Perf
          </span>
          <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>&lt;50KB Zero-Deps</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', my: 'auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.5rem',
            borderRadius: '4px',
            background: 'rgba(74, 222, 128, 0.1)',
            border: '1px solid rgba(74, 222, 128, 0.3)'
          }}>
            <Search size={12} color="#4ade80" />
            <span style={{ color: '#4ade80', fontSize: '0.68rem' }}>
              {step === 0 && "Buscando: 'Rick' (Debounce 300ms)"}
              {step === 1 && "Caché Map hit (TTL 5 min)"}
              {step === 2 && "DOM Batching DocumentFragment"}
              {step === 3 && "IntersectionObserver Activo"}
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
            <span>Map Cache Size: 20 keys</span>
            <span style={{ color: '#4ade80' }}>Memory: 1.2 MB</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#4ade80' }}>
          <span>🚀 Tiempo de Carga: 45ms</span>
          <span>Zero Layout Thrashing</span>
        </div>
      </div>
    );
  }

  // Project 5: Suite de Ejercicios React (suite-react)
  if (projectId === 'suite-react') {
    const apps = ['ColorChanger', 'Contador', 'SearchFilter', 'TodoList Avanzado'];
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #180b2b 0%, #2e1065 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(192, 132, 252, 0.2)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#c084fc', fontWeight: 700 }}>
            <Layers size={14} /> Suite 9 Apps React
          </span>
          <span className="badge badge-purple" style={{ fontSize: '0.65rem' }}>Lazy Init useState</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', my: 'auto' }}>
          <div style={{ fontSize: '0.68rem', color: '#c084fc', fontWeight: 600 }}>
            App Activa ({step + 1}/9): <span style={{ color: '#f8fafc' }}>{apps[step % apps.length]}</span>
          </div>
          <div style={{ background: '#020617', padding: '0.45rem', borderRadius: '4px', border: '1px solid rgba(192, 132, 252, 0.3)', fontSize: '0.65rem' }}>
            {step === 0 && <span style={{ color: '#c084fc' }}>const [color, setColor] = useState('#4ade80');</span>}
            {step === 1 && <span style={{ color: '#38bdf8' }}>const [count, setCount] = useState(() =&gt; getSavedCount());</span>}
            {step === 2 && <span style={{ color: '#4ade80' }}>items.filter(item =&gt; item.name.includes(query));</span>}
            {step === 3 && <span style={{ color: '#fbbf24' }}>localStorage.setItem('todos', JSON.stringify(todos));</span>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#c084fc' }}>
          <span>Inmutabilidad de Arrays</span>
          <span>Hook Cycle Complete</span>
        </div>
      </div>
    );
  }

  // Project 6: Módulos de Arquitectura CSS (proyectos-css)
  if (projectId === 'proyectos-css') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #091724 0%, #0c2a42 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#38bdf8', fontWeight: 700 }}>
            <LayoutGrid size={14} /> Sass & BEM Architecture
          </span>
          <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>5 Módulos SCSS</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', my: 'auto' }}>
          <div style={{ background: '#020617', padding: '0.45rem', borderRadius: '4px', fontSize: '0.65rem' }}>
            {step === 0 && <span style={{ color: '#38bdf8' }}>@use 'abstracts/variables' as vars;</span>}
            {step === 1 && <span style={{ color: '#4ade80' }}>SMACSS: Base | Layout | Components | Pages</span>}
            {step === 2 && <span style={{ color: '#c084fc' }}>Nomenclatura: .card__header--active</span>}
            {step === 3 && <span style={{ color: '#fbbf24' }}>Cero colisiones de selectores CSS</span>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#38bdf8' }}>
          <span>Sass Namespacing @use</span>
          <span>Zero Specificity Conflicts</span>
        </div>
      </div>
    );
  }

  // Project 7: Django Instagram Clone (django-insta)
  if (projectId === 'django-insta') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #1a0924 0%, #350c42 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(74, 222, 128, 0.2)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#4ade80', fontWeight: 700 }}>
            <Database size={14} /> Django ORM Social
          </span>
          <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>ManyToMany Likes</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', my: 'auto' }}>
          <div style={{ background: '#020617', padding: '0.45rem', borderRadius: '4px', fontSize: '0.65rem' }}>
            {step === 0 && <span style={{ color: '#4ade80' }}>Post.objects.select_related('author')</span>}
            {step === 1 && <span style={{ color: '#38bdf8' }}>.prefetch_related('comments', 'likes')</span>}
            {step === 2 && <span style={{ color: '#c084fc' }}>Comentarios Anidados (ForeignKey Recursivo)</span>}
            {step === 3 && <span style={{ color: '#fbbf24' }}>Prevención N+1 Query Optimization OK</span>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#4ade80' }}>
          <span>Feed Algorítmico ORM</span>
          <span>PostgreSQL Relational</span>
        </div>
      </div>
    );
  }

  // Project 8: WordPress E-commerce B-World (wordpress-bworld)
  if (projectId === 'wordpress-bworld') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #1c1507 0%, #382403 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(251, 191, 36, 0.2)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#fbbf24', fontWeight: 700 }}>
            <ShoppingCart size={14} /> WooCommerce B2C
          </span>
          <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}>Stripe API Checkout</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', my: 'auto' }}>
          <div style={{ background: '#020617', padding: '0.45rem', borderRadius: '4px', fontSize: '0.65rem' }}>
            {step === 0 && <span style={{ color: '#fbbf24' }}>💳 Pasarela Stripe & PayPal Checkout SSL</span>}
            {step === 1 && <span style={{ color: '#38bdf8' }}>📦 Packlink Pro API: Cálculo Logístico en Vivo</span>}
            {step === 2 && <span style={{ color: '#4ade80' }}>📧 MailPoet: Funnel de Carrito Abandonado</span>}
            {step === 3 && <span style={{ color: '#c084fc' }}>✅ Transacción de Venta Completada</span>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#fbbf24' }}>
          <span>Conversión E-commerce</span>
          <span>SSL Checkout Safe</span>
        </div>
      </div>
    );
  }

  // Project 9: Bootstrap Admin Dashboard (bootstrap-admin)
  if (projectId === 'bootstrap-admin') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #130a21 0%, #25123d 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(192, 132, 252, 0.2)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#c084fc', fontWeight: 700 }}>
            <BarChart3 size={14} /> SB Admin 2 Analytics
          </span>
          <span className="badge badge-purple" style={{ fontSize: '0.65rem' }}>Chart.js KPIs</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', my: 'auto' }}>
          <div style={{ background: '#020617', padding: '0.45rem', borderRadius: '4px', fontSize: '0.65rem' }}>
            {step === 0 && <span style={{ color: '#c084fc' }}>📊 Chart.js Widget: KPIs de Ventas en Vivo</span>}
            {step === 1 && <span style={{ color: '#38bdf8' }}>📐 Bootstrap 5 Grid Layout Responsivo</span>}
            {step === 2 && <span style={{ color: '#4ade80' }}>🔍 DataTables: Filtrado Dinámico de Registros</span>}
            {step === 3 && <span style={{ color: '#fbbf24' }}>📱 Menú Lateral Colapsable Adaptativo</span>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#c084fc' }}>
          <span>Panel de Analítica</span>
          <span>Bootstrap 5 UI</span>
        </div>
      </div>
    );
  }

  // Project 10: JavaScript Vanilla Fundamentals (js-fundamentals)
  if (projectId === 'js-fundamentals') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #081d11 0%, #0d361f 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(74, 222, 128, 0.2)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#4ade80', fontWeight: 700 }}>
            <Terminal size={14} /> JS Vanilla Fundamentals
          </span>
          <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>9 Módulos JS</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', my: 'auto' }}>
          <div style={{ background: '#020617', padding: '0.45rem', borderRadius: '4px', fontSize: '0.65rem' }}>
            {step === 0 && <span style={{ color: '#4ade80' }}>⚡ Event Delegation: parent.addEventListener('click')</span>}
            {step === 1 && <span style={{ color: '#38bdf8' }}>🧩 ES6 Destructuring: const { title, id } = data;</span>}
            {step === 2 && <span style={{ color: '#c084fc' }}>🔒 Closures: Función privada con scope léxico</span>}
            {step === 3 && <span style={{ color: '#fbbf24' }}>🌳 Manipulación Directa de Nodos del DOM</span>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#4ade80' }}>
          <span>Fundamentos ES6+</span>
          <span>Comportamiento Nativo</span>
        </div>
      </div>
    );
  }

  // Project 11: Task API & Data Analytics Engine (task-api-analytics)
  if (projectId === 'task-api-analytics') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #091924 0%, #0d2f47 100%)',
        color: '#f8fafc',
        fontFamily: 'var(--font-code)',
        fontSize: '0.75rem',
        userSelect: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#38bdf8', fontWeight: 700 }}>
            <FileText size={14} /> Data Analytics Engine
          </span>
          <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>Python REST API</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', my: 'auto' }}>
          <div style={{ background: '#020617', padding: '0.45rem', borderRadius: '4px', fontSize: '0.65rem' }}>
            {step === 0 && <span style={{ color: '#38bdf8' }}>🌐 Consumo Asíncrono de APIs REST Externas</span>}
            {step === 1 && <span style={{ color: '#4ade80' }}>📊 Transformación & Agregación de JSON</span>}
            {step === 2 && <span style={{ color: '#c084fc' }}>📈 Cálculo Estadístico de Métricas de Rendimiento</span>}
            {step === 3 && <span style={{ color: '#fbbf24' }}>📄 Generación de Reporte Analítico Final</span>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#38bdf8' }}>
          <span>Ingestión de Datos JSON</span>
          <span>Procesamiento Backend</span>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '0.85rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'linear-gradient(135deg, #090d16 0%, #1e293b 100%)',
      color: '#f8fafc',
      fontFamily: 'var(--font-code)',
      fontSize: '0.75rem',
      userSelect: 'none'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.4rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#38bdf8', fontWeight: 700 }}>
          <Code size={14} /> Módulo de Código
        </span>
        <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>Production Ready</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', my: 'auto' }}>
        <div style={{ color: '#38bdf8', fontSize: '0.68rem' }}>&gt; Arquitectura del módulo activa...</div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>Código Limpio • Diseño Responsivo • SOLID</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: '#38bdf8' }}>
        <span>Repositorio GitHub Sincronizado</span>
        <span>Licencia Abierta</span>
      </div>
    </div>
  );
}

export default React.memo(ProjectPreviewCanvas);

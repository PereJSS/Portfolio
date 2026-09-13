export const PROJECTS_DATA = [
  {
    id: "checkit",
    title: "CheckIt — Plataforma B2B Pericial & Firma Digital",
    subtitle: "Caso de Estudio Principal / Enterprise ⭐",
    category: "star",
    categories: ["star", "fullstack", "react", "django"],
    badge: "Caso de Estudio ⭐",
    badgeType: "amber",
    isCaseStudy: true,
    caseStudy: {
      problem: "Inspecciones periciales en papel o correo vulnerables a manipulación de evidencias y carentes de certificación legal probatoria.",
      solution: "Plataforma B2B automatizada con captura web in situ, hashing criptográfico SHA-256 de fotos, firma digital X.509 y sello de tiempo RFC3161."
    },
    stack: ["React 19", "Django 4.2", "SimpleJWT (RBAC)", "PostgreSQL", "ReportLab", "pyHanko", "X.509", "RFC3161", "Tailwind CSS v4"],
    github: "https://github.com/PereJSS/PFM-CheckIt",
    demo: null,
    shortDescription: "Plataforma B2B para inspecciones periciales con autenticación RBAC, informes PDF firmados digitalmente (X.509), sellado de tiempo (RFC3161), sync adaptativo y trazabilidad SHA-256.",
    whatIs: "Plataforma profesional e integral B2B diseñada para digitalizar y certificar inspecciones periciales de inmuebles. Los administradores orquestan el centro de control (creación de propiedades, registro de operarios y asignación de órdenes con autorización RBAC). Los operarios capturan evidencias in situ desde su móvil, y el motor backend intercepta la finalización para generar dinámicamente un informe PDF con firma criptográfica X.509 y sello temporal RFC3161 de validez legal probatoria.",
    howItWorks: [
      { step: "1", title: "Orquestación de Entorno & RBAC", desc: "El Administrador registra la propiedad, crea perfiles con permisos RBAC aislados en endpoints RESTful (/api/v1) y asigna órdenes de trabajo." },
      { step: "2", title: "Captura de Evidencias en Campo", desc: "El operario consume la SPA reactiva con React 19 y Tailwind CSS v4, adjunta fotografías in situ y finaliza la orden de inspección." },
      { step: "3", title: "Sellado Criptográfico SHA-256", desc: "Al subirse cada imagen, el servidor calcula un hash criptográfico SHA-256 único y solicita un sello de tiempo a una autoridad RFC3161." },
      { step: "4", title: "Notario Digital & PDF", desc: "El motor Django con ReportLab + pyHanko inyecta las evidencias en un PDF estructurado, firma el archivo con un certificado X.509 y habilita descarga segura para el Admin." },
      { step: "5", title: "Polling Adaptativo & Page Visibility", desc: "El dashboard ejecuta polling inteligente optimizado con la Page Visibility API para reflejar avances en vivo sin sobrecargar la red ni el servidor." }
    ],
    features: [
      "Autenticación SimpleJWT con refresh tokens, RBAC granular a nivel de endpoint y persistencia aislada en sessionStorage (anti-XSS).",
      "Infraestructura de Firma Digital X.509 y sellado temporal RFC3161 (Time Stamp Authority).",
      "Persistencia híbrida desacoplada con python-decouple (SQLite local / PostgreSQL en producción).",
      "Trazabilidad inmutable mediante Hashing SHA-256 de todas las fotos de inspección.",
      "Motor de generación dinámica de PDFs complejos con pyHanko y ReportLab.",
      "Sincronización en vivo mediante Polling Adaptativo y Page Visibility API.",
      "Despliegue configurado con Gunicorn para alta concurrencia en producción.",
      "Arquitectura API First con versionado RESTful (/api/v1/...)."
    ]
  },
  {
    id: "gestor-reservas",
    title: "Gestor de Reservas de Hoteles & Backoffice",
    subtitle: "Motor Transaccional Blindado por 32 Tests",
    category: "fullstack",
    categories: ["fullstack", "django"],
    badge: "32 Tests Suite 🛡️",
    badgeType: "green",
    stack: ["Django 4.2", "Bootstrap 5", "django-jazzmin", "PostgreSQL", "Django TestCase"],
    github: "https://github.com/PereJSS/gestor-de-reservas-",
    demo: null,
    shortDescription: "Motor de disponibilidad hotelera y reservas con algoritmos anti-overbooking a nivel de base de datos, motor de recurrencias y 32 tests automatizados de integración y unitarios.",
    whatIs: "Motor transaccional completo para la gestión de disponibilidad y reservas de estancias hoteleras. Combina un portal de cara al usuario para filtrado dinámico de estancias por fechas con un Backoffice administrativo para gestión de inventarios, habitaciones y flujos de reserva.",
    howItWorks: [
      { step: "1", title: "Búsqueda & Filtrado", desc: "El cliente define su rango de estancias (Check-in/Check-out); el sistema interroga a PostgreSQL para validar disponibilidad estricta." },
      { step: "2", title: "Prevención de Overbooking", desc: "Algoritmos en el ORM bloquean cualquier solapamiento de fechas antes de la persistencia de la reserva." },
      { step: "3", title: "Motor de Recurrencia", desc: "Permite programar reservas periódicas (diarias/semanales) generando automáticamente los registros correspondientes." },
      { step: "4", title: "Backoffice Visual Dinámico", desc: "La gerencia visualiza la carga hotelera en un calendario codificado por colores (Verde: disponible, Rojo: ocupado, Amarillo: pendiente)." }
    ],
    features: [
      "Algoritmos de validación de rangos temporales para prevención de overbooking.",
      "Generador de patrones de recurrencia automática para reservas institucionales.",
      "Panel de administración personalizado con django-jazzmin.",
      "Suite de 32 tests automatizados (Django TestCase) cubriendo casos límite.",
      "Scripts de Seeding (createService.py) para inicialización de entornos con datos reales de prueba."
    ]
  },
  {
    id: "rick-morty-react",
    title: "Rick & Morty Character Explorer (React 19)",
    subtitle: "SPA Moderna & CI/CD Pipeline",
    category: "react",
    categories: ["react"],
    badge: "React 19 + Vite ⚡",
    badgeType: "cyan",
    stack: ["React 19", "Vite", "SwiperJS", "Custom Hooks", "GitHub Actions", "Web Storage API"],
    github: "https://github.com/PereJSS/proyecto-React",
    demo: null,
    shortDescription: "Single Page Application (SPA) de alta reactividad con carrusel SwiperJS, gestión de favoritos sincronizada en localStorage, custom hooks y pipeline de CI/CD en GitHub Actions.",
    whatIs: "Aplicación SPA diseñada para explorar la API pública de Rick and Morty. Destaca por su diseño fluido, sistema de favoritos persistente, alternancia entre vista de carrusel táctil y cuadrícula responsiva, y su despliegue automatizado continuo.",
    howItWorks: [
      { step: "1", title: "Hidratación Inicial Rápida", desc: "Carga inmediata de personajes mediante peticiones optimizadas." },
      { step: "2", title: "Buscador Reactivo", desc: "Filtrado multidimensional en tiempo real a medida que el usuario teclea." },
      { step: "3", title: "Persistencia de Favoritos", desc: "Custom hook `useFavorites` sincroniza las selecciones con la Web Storage API." },
      { step: "4", title: "Visualización Híbrida", desc: "Cambio entre Grid CSS responsivo y Carrusel táctil (SwiperJS)." },
      { step: "5", title: "Pipeline DevOps", desc: "Cada commit a main dispara un workflow en GitHub Actions que compila con Vite y despliega en GitHub Pages." }
    ],
    features: [
      "Arquitectura basada en Custom Hooks aislados para separar UI de lógica de datos.",
      "Sincronización bidireccional entre estado React y Web Storage API.",
      "Diseño Mobile-First adaptativo según viewport.",
      "Pipeline CI/CD completamente automatizado con GitHub Actions."
    ]
  },
  {
    id: "rick-morty-vanilla",
    title: "Rick & Morty Explorer (JS Vanilla High-Performance)",
    subtitle: "Zero-Dependencies & DOM Optimization",
    category: "vanilla",
    categories: ["vanilla"],
    badge: "High Performance (<50KB) 🚀",
    badgeType: "green",
    stack: ["JavaScript ES6+", "Vite", "CSS3 Glassmorphism", "Intersection Observer", "DocumentFragment"],
    github: "https://github.com/PereJSS/Proyecto-JS-Rick-Morty-explorer",
    demo: null,
    shortDescription: "Reconstrucción en JS Vanilla puro orientada a objetos (POO), reduciendo el bundle de 150KB a <50KB con caché Map de 5min, Lazy Loading, Debouncing y batching de DOM.",
    whatIs: "Exhibición de optimización a bajo nivel. Reconstruye la SPA anterior sin frameworks, apoyándose en la API nativa del navegador y patrones de diseño orientados a objetos para lograr tiempos de carga rápidos y consumo mínimo de memoria.",
    howItWorks: [
      { step: "1", title: "Arquitectura POO Modular", desc: "Estructurado en clases ES6 aisladas (DataManager, LazyLoadManager, UIManager)." },
      { step: "2", title: "DataManager Proxy Smart Cache", desc: "Caché en memoria en estructura Map con TTL de 5 minutos que anula peticiones repetidas." },
      { step: "3", title: "LazyLoad con Intersection Observer", desc: "Difiere la carga de imágenes hasta que entran en la ventana visible del usuario." },
      { step: "4", title: "Debouncing de Peticiones", desc: "Retraso controlado de 300ms en el buscador para no saturar la red durante el tecleo." },
      { step: "5", title: "DocumentFragment Rendering Batch", desc: "Agrupa las mutaciones de DOM en una sola inserción para evitar reflows innecesarios." }
    ],
    features: [
      "Cero dependencias de framework; bundle ultra liviano por debajo de los 50KB.",
      "Caché inteligente Map con TTL e inhibición de peticiones duplicadas.",
      "Debouncing algorítmico y Intersection Observer nativo.",
      "Arquitectura CSS con Glassmorphism nativo (`backdrop-filter`) y variables dinámicas."
    ]
  },
  {
    id: "suite-react",
    title: "Suite de Ejercicios React (Básico a Avanzado)",
    subtitle: "9 Mini-Aplicaciones Progresivas",
    category: "react",
    categories: ["react"],
    badge: "9 Mini-Apps 📚",
    badgeType: "purple",
    stack: ["React 19", "Vite", "Hooks (useState, useEffect)", "Lazy Initialization", "Clipboard API"],
    github: "https://github.com/PereJSS/Ejercicios-React",
    demo: null,
    shortDescription: "Ecosistema de 9 proyectos React progresivos: desde mutación de estado e inmutabilidad con arrays, hasta el TodoList Avanzado con lazy useState init y localStorage sync.",
    whatIs: "Batería de 9 mini-aplicaciones codificadas individualmente para ejercitar el dominio práctico de la reactividad en React, patrones de inmutabilidad y Hooks avanzados.",
    howItWorks: [
      { step: "E1", title: "Color Changer", desc: "Virtual DOM & inline styles dinámicos con useState." },
      { step: "E2", title: "Contador", desc: "Estado numérico inmutable y propagación de eventos." },
      { step: "E3", title: "Lista Dinámica", desc: "Reconciliación con keys únicas e inmutabilidad (.map / .filter)." },
      { step: "E4", title: "Search Filter", desc: "Filtros en tiempo real sobre estructuras de datos." },
      { step: "E5", title: "Calculadora", desc: "Tipado explícito parseFloat y lógica switch." },
      { step: "E6", title: "Temporizador", desc: "Ciclo de vida y cleanup de efectos (setInterval / clearInterval)." },
      { step: "E7", title: "Password Generator", desc: "Entropía aleatoria y Clipboard API." },
      { step: "E8", title: "Word Counter", desc: "Transformación de cadenas y Regex en tiempo real." },
      { step: "E9", title: "TodoList Avanzado", desc: "Lazy initialization en useState para lectura síncrona única y sync con localStorage." }
    ],
    features: [
      "Demostración técnica paso a paso de la API fundamental de React.",
      "Uso de patrones de inmutabilidad en mutaciones de arrays y objetos.",
      "Proyecto cumbre (TodoList) con Lazy useState Initialization y persistencia optimizada."
    ]
  },
  {
    id: "proyectos-css",
    title: "Módulos de Arquitectura CSS (1-5)",
    subtitle: "Sass Moderno, SMACSS & BEM",
    category: "css",
    categories: ["css"],
    badge: "5 Módulos SCSS 🎨",
    badgeType: "cyan",
    stack: ["Sass (@use/@forward)", "SMACSS", "BEM Methodology", "CSS Grid", "Flexbox"],
    github: "https://github.com/PereJSS/Proyectos-CSS",
    demo: null,
    githubLinks: [
      { title: "Módulo 1", url: "https://github.com/PereJSS/Proyectos-CSS" },
      { title: "Módulo 2", url: "https://github.com/PereJSS/Proyectos-CSS-02" },
      { title: "Módulo 3", url: "https://github.com/PereJSS/Proyectos-CSS-03" },
      { title: "Módulo 4", url: "https://github.com/PereJSS/Proyectos-CSS-04" },
      { title: "Módulo 5", url: "https://github.com/PereJSS/Proyectos-CSS-05" }
    ],
    shortDescription: "Cinco proyectos dedicados al diseño UI responsivo, refactorización con Sass moderno (@use y @forward), arquitectura SMACSS y nomenclatura BEM para cero colisiones.",
    whatIs: "Batería de 5 módulos de maquetación enfocada en crear código CSS escalable y libre de deuda técnica.",
    howItWorks: [
      { step: "1", title: "Sass Modern Standard", desc: "Reemplazo de @import por @use y @forward garantizando nombres aislados y compilación veloz." },
      { step: "2", title: "Estructura SMACSS", desc: "Separación estricta en carpetas: Abstracts, Base, Components, Layout y Pages." },
      { step: "3", title: "Nomenclatura BEM", desc: "Reglas `.block__element--modifier` para eliminar especificidades indeseadas." },
      { step: "4", title: "Mobile-First Design", desc: "Layouts fluidos con CSS Grid y Flexbox adaptables a cualquier dispositivo." }
    ],
    features: [
      "Aislamiento de variables con Sass namespacing.",
      "Organización modular SMACSS.",
      "Cero colisiones de selectores gracias a BEM."
    ]
  },
  {
    id: "django-insta",
    title: "Django Instagram Clone",
    subtitle: "Modelado de Relaciones Complejas & ORM",
    category: "fullstack",
    categories: ["fullstack", "django"],
    badge: "Django ORM 📸",
    badgeType: "green",
    stack: ["Django 4.2", "Python", "SQLite / PostgreSQL", "ORM ManyToMany", "HTML5/CSS3"],
    github: "https://github.com/PereJSS/djanjo_insta",
    demo: null,
    shortDescription: "Aplicación social backend impulsada por el ORM de Django con relaciones ManyToMany, ForeignKeys, sistema de likes, comentarios anidados y feed optimizado.",
    whatIs: "Aplicación social backend desarrollada con el ORM de Django para simular la lógica de interacción de Instagram.",
    howItWorks: [
      { step: "1", title: "Modelado Relacional", desc: "Definición de entidades UserProfile, Post, Comment y Like." },
      { step: "2", title: "Relaciones Complejas", desc: "Manejo de ManyToMany para seguidores/seguidos y ForeignKeys para anidación de respuestas." },
      { step: "3", title: "Feed Algorítmico", desc: "Querysets optimizados con select_related y prefetch_related para prevenir el problema N+1." }
    ],
    features: [
      "Perfiles de usuario extendidos y lógica de seguimiento.",
      "Comentarios anidados y conteo dinámico de likes.",
      "Optimización de consultas ORM."
    ]
  },
  {
    id: "wordpress-bworld",
    title: "WordPress E-commerce B-World",
    subtitle: "Solución B2C & Ecosistema de Pagos",
    category: "satellites",
    categories: ["satellites", "css"],
    badge: "WooCommerce B2C 🛒",
    badgeType: "amber",
    stack: ["WordPress", "WooCommerce", "Elementor Pro", "Stripe API", "Packlink Pro", "MailPoet"],
    github: "https://github.com/PereJSS/Wordpress-E-commers",
    demo: null,
    shortDescription: "Plataforma e-commerce B2C con pasarelas de pago Stripe/PayPal, sincronización logística automatizada con Packlink Pro y funnels de email marketing.",
    whatIs: "Tienda online completa concebida con visión de negocio y conversión.",
    howItWorks: [
      { step: "1", title: "Pasarelas de Pago", desc: "Integración de Stripe y PayPal con flujo checkout SSL seguro." },
      { step: "2", title: "Logística API", desc: "Conexión en tiempo real con Packlink Pro para cálculo automático de envíos." },
      { step: "3", title: "Email Funnels", desc: "Automatizaciones de carritos abandonados con MailPoet." }
    ],
    features: [
      "Checkout optimizado para conversión B2C.",
      "Sincronización automatizada de stock y logística.",
      "Funnels de remarketing por correo electrónico."
    ]
  },
  {
    id: "bootstrap-admin",
    title: "Bootstrap Admin Dashboard",
    subtitle: "Panel de Analítica SB Admin 2",
    category: "satellites",
    categories: ["satellites", "vanilla"],
    badge: "Admin Dashboard 📊",
    badgeType: "purple",
    stack: ["Bootstrap 5", "HTML5", "CSS3", "JavaScript ES6", "Chart.js"],
    github: "https://github.com/PereJSS/Biblioteca-Java-bootstrap-admin",
    demo: null,
    shortDescription: "Interfaz administrativa analítica con tablas de datos filtrables, widgets estadísticos interactivos y layouts colapsables responsivos.",
    whatIs: "Panel de control para supervisión de datos e indicadores empresariales.",
    howItWorks: [
      { step: "1", title: "Grillas Adaptativas", desc: "Layout responsivo sobre Bootstrap 5." },
      { step: "2", title: "Data Visualization", desc: "Widgets interactivos para visualización de KPIs." }
    ],
    features: [
      "Diseño limpio y profesional para backoffice.",
      "Filtrado dinámico de información."
    ]
  },
  {
    id: "js-fundamentals",
    title: "JavaScript Vanilla Fundamentals",
    subtitle: "9 Módulos de Bases del Navegador",
    category: "vanilla",
    categories: ["vanilla"],
    badge: "9 Módulos JS ⚡",
    badgeType: "green",
    stack: ["JavaScript ES6+", "DOM Manipulation", "Event Delegation", "Template Literals"],
    github: "https://github.com/PereJSS/Tarea-entregable-1-JS",
    demo: null,
    shortDescription: "Colección de 9 módulos prácticos de fundamentos de programación: delegación de eventos, desestructuración, closures y manipulaciones directas del DOM.",
    whatIs: "Batería de ejercicios de lógica pura y comportamiento nativo del navegador.",
    howItWorks: [
      { step: "1", title: "Event Delegation", desc: "Captura de eventos eficiente en contenedores padre." },
      { step: "2", title: "Lógica ES6", desc: "Uso de destructuring, template literals en ES6." }
    ],
    features: ["Bases sólidas en la especificación ES6+ de JavaScript."]
  },
  {
    id: "task-api-analytics",
    title: "Task API & Data Analytics Engine",
    subtitle: "Procesamiento de Datos & APIs REST",
    category: "satellites",
    categories: ["satellites", "fullstack"],
    badge: "Data API 📈",
    badgeType: "cyan",
    stack: ["Python", "API REST", "JSON Data Processing", "Data Structures"],
    github: "https://github.com/PereJSS/Task-API-data-analytics",
    demo: null,
    shortDescription: "Servicio de consumo y procesamiento analítico de datos desde APIs externas con generación de reportes y transformación de estructuras JSON.",
    whatIs: "Módulo especializado en ingestión y análisis de datos de APIs.",
    howItWorks: [
      { step: "1", title: "Consumo de API", desc: "Peticiones HTTP asíncronas con formateo de respuesta." },
      { step: "2", title: "Transformación Data", desc: "Filtrado y agregación estadística de métricas." }
    ],
    features: ["Procesamiento analítico de estructuras JSON complejas."]
  }
];

# 🌐 Pere Joan Sancho Suñer — Portfolio & Engineering Showcase

<div align="center">

[![Portfolio Live](https://img.shields.io/badge/Live_Demo-perejss.github.io%2FPortfolio-059669?style=for-the-badge&logo=googlechrome&logoColor=white)](https://perejss.github.io/Portfolio/)
[![Deploy to GitHub Pages](https://img.shields.io/github/actions/workflow/status/PereJSS/Portfolio/deploy.yml?branch=main&label=Deploy%20Status&style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/PereJSS/Portfolio/actions)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Django 4.2](https://img.shields.io/badge/Django_4.2-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Python 3.8+](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

**Portfolio interactivo y plataforma de presentación profesional de Pere Joan Sancho Suñer.**  
*Full-Stack Software Engineer especializado en **Python / Django 4.2+** y **React 19**, con sólida trayectoria en **arquitectura de software, seguridad criptográfica (X.509 & TSA RFC3161)** y **liderazgo de equipos y operaciones**.*

[🚀 Ver Portfolio en Vivo](https://perejss.github.io/Portfolio/) • [📄 Ver CV Online](https://perejss.github.io/Portfolio/#) • [📫 Contactar](mailto:pere.joan.sancho14@gmail.com)

</div>

---

## 📌 Tabla de Contenidos

- [Sobre Mí](#-sobre-mí)
- [Proyectos Destacados](#-proyectos-destacados)
- [Características del Portfolio](#-características-del-portfolio)
- [Arquitectura & Stack Tecnológico](#-arquitectura--stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación & Ejecución Local](#-instalación--ejecución-local)
- [Generación de CVs en PDF](#-generación-de-cvs-en-pdf-con-python)
- [Despliegue Continuo (CI/CD)](#-despliegue-continuo-cicd)
- [Contacto](#-contacto)

---

## 👨‍💻 Sobre Mí

Desarrollador Full Stack enfocado en el diseño e implementación de sistemas backend robustos, desacoplados y seguros con **Python y Django 4.2+**, complementado con interfaces reactivas de alto rendimiento en **React 19**.

- 🎓 **Formación:** Graduado del **Máster Full Stack Developer en Conquer Blocks** (*Septiembre 2024 – Septiembre 2026*).
- 🔐 **Especialización:** APIs RESTful modulares, control de acceso por roles (**RBAC**), autenticación stateless **JWT**, auditoría legal probatoria con firmas digitales notariales **X.509** y sellado temporal oficial **RFC3161 (TSA)**.
- 🧪 **Calidad:** Automatización de suites de pruebas (**32 tests unitarios e integración** con Django TestCase) y despliegues continuos con **GitHub Actions**.
- 🤝 **Valor Diferencial:** Más de 6 años de experiencia previa en **hostelería y liderazgo de equipos** (+8 personas), aportando una capacidad probada en resolución ágil de problemas bajo presión, comunicación asertiva y gestión orientada a objetivos de negocio.

---

## 🚀 Proyectos Destacados

### 1. [CheckIt — Plataforma B2B de Auditoría Pericial & Firma Digital](https://github.com/PereJSS/Checkit-Backend)
> *React 19 • Django 4.2 • PostgreSQL • pyHanko • ReportLab • Certificados X.509 • RFC3161 TSA • Tailwind CSS v4*
- **Arquitectura RESTful & RBAC:** API REST modular (`/api/v1`) con Django REST Framework y autenticación JWT con control de acceso por roles.
- **Seguridad Criptográfica:** Motor de auditoría con `pyHanko` integrando certificados digitales X.509, sellado de tiempo oficial TSA e inmutabilidad de evidencias mediante hash SHA-256.
- **Frontend React 19:** SPA reactiva con polling adaptativo (`Page Visibility API`) reduciendo un **40% de peticiones de red innecesarias**.
- **Calidad & CI/CD:** Suite de 32 tests automatizados, configuración híbrida (SQLite local / PostgreSQL producción) y pipeline continuo en GitHub Actions.

### 2. [Gestor de Reservas Hoteleras — Motor Transaccional](https://github.com/PereJSS/gestor-de-reservas-)
> *Python 3 • Django 4.2 • PostgreSQL • Django Tests • Clean Code*
- Sistema backend transaccional para operaciones hoteleras complejas: disponibilidad en tiempo real, bloqueos de inventario y tarificación dinámica.
- Cobertura integral con **32 pruebas automatizadas** validando integridad referencial, transacciones atómicas y reglas de negocio.

### 3. [Rick & Morty Explorer (React 19 SPA)](https://github.com/PereJSS/proyecto-React)
> *React 19 • SwiperJS • CSS Modules • GitHub Actions CI/CD*
- Aplicación de alto rendimiento con carruseles táctiles reactivos, paginación dinámica, filtrado reactivo y despliegue automatizado.

### 4. [Rick & Morty Explorer (Vanilla JS)](https://github.com/PereJSS/Proyecto-JS-Rick-Morty-explorer)
> *JavaScript ES6+ • Programación Orientada a Objetos • HTML5/CSS3*
- Arquitectura POO pura y manipulación nativa del DOM con huella ultraligera (<50KB), carga asíncrona optimizada y diseño responsive.

---

## ✨ Características del Portfolio

- 🎨 **Diseño Moderno & Glassmorphism:** Sistema de diseño propio en Vanilla CSS con tokens semánticos, modo oscuro refinado, gradientes elegantes y micro-animaciones fluidas a 60 FPS.
- 📄 **Modal de CV Interactivo & Multi-formato:**
  - **1. CV Formal ATS:** Maquetación ejecutiva estilo suizo, estructurada y optimizada para lectores ATS (*Applicant Tracking Systems*).
  - **2. CV Tech / Developer Edition:** Estética de terminal y métricas reactivas diseñada para Tech Leads y reclutadores técnicos.
- 📥 **Descarga de CVs en PDF Vectoriales:** Descargas directas de PDFs de **1 sola página exacta**, generados nativamente con Python y ReportLab con tipografías vectoriales Tipo 1 y enlaces interactivos.
- 🗺️ **Roadmap del Máster Conquer Blocks:** Línea de tiempo iluminada que documenta la progresión formativa y técnica desde los fundamentos algorítmicos hasta despliegues en producción.
- 📱 **100% Responsive & Accesible:** Optimizado para dispositivos móviles, tablets y monitores de alta resolución con navegación accesible por teclado (tecla `ESC` para modales).
- 🔍 **SEO de Última Generación:**
  - Metadatos Open Graph y Twitter Cards completos con imagen optimizada (`og-image.png`).
  - Datos estructurados **JSON-LD Schema.org** (`Person` y `EducationalOrganization`).
  - Fallback semántico completo dentro de `<noscript>` para crawlers y lectores de pantalla.
  - Generación de `sitemap.xml`, `robots.txt` y manifiesto web PWA (`site.webmanifest`).

---

## 🛠️ Arquitectura & Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend** | React 19, JavaScript ES6+, Vite 6, Lucide React Icons |
| **Estilos** | Vanilla CSS con Custom Properties, Glassmorphism, BEM, CSS Grid & Flexbox |
| **Generación PDF** | Python 3, ReportLab, Pillow (PIL), PyPDF (Strict 1-Page Layout) |
| **Backend & APIs** | Python 3.8+, Django 4.2 LTS, Django REST Framework, pyHanko, ReportLab |
| **Bases de Datos** | PostgreSQL, SQLite |
| **Seguridad & Firma** | Certificados X.509, TSA RFC3161, SimpleJWT, Hash SHA-256 |
| **DevOps & Despliegue** | GitHub Actions (CI/CD), GitHub Pages, Git |

---

## 📁 Estructura del Proyecto

```text
pere-joan-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline CI/CD automático a GitHub Pages
├── public/
│   ├── cv-pere-joan-formal.pdf     # CV descargable versión formal ATS (1 página)
│   ├── cv-pere-joan.pdf            # CV descargable versión Tech Developer (1 página)
│   ├── pere-joan-photo.png         # Fotografía profesional original
│   ├── pere-joan-avatar-formal.png # Avatar circular con doble anillo azul
│   ├── pere-joan-avatar-cv.png     # Avatar circular con anillo verde esmeralda
│   ├── og-image.png                # Imagen Open Graph para previews sociales
│   ├── sitemap.xml                 # Mapa del sitio para indexación SEO
│   ├── robots.txt                  # Directivas para rastreadores web
│   └── site.webmanifest            # Manifiesto PWA
├── scripts/
│   ├── generate_cv.py              # Generador Python nativo de PDFs (ReportLab)
│   └── perfect_avatar.py           # Script generador de avatares con doble anillo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Barra de navegación flotante con enlaces de ancla
│   │   ├── Hero.jsx                # Portada principal con badges, CTA y bio
│   │   ├── Philosophy.jsx          # Sección de filosofía de ingeniería y valores
│   │   ├── ProjectsGrid.jsx        # Catálogo interactivo de proyectos con filtros
│   │   ├── ProjectCard.jsx         # Tarjetas de proyectos con badges y previews
│   │   ├── DeepDiveModal.jsx       # Modal de auditoría técnica en profundidad
│   │   ├── ProjectPreviewCanvas.jsx# Canvas interactivo para preview de proyectos
│   │   ├── ConquerRoadmap.jsx      # Línea temporal del Máster Conquer Blocks
│   │   ├── Skills.jsx              # Cuadrícula clasificada de stack tecnológico
│   │   ├── CVModal.jsx             # Visor modal de CV (Formal ATS y Tech Edition)
│   │   ├── CVDownloadDropdown.jsx  # Desplegable para descarga directa de PDFs
│   │   └── ContactFooter.jsx       # Footer con datos de contacto y enlaces sociales
│   ├── data/
│   │   ├── projectsData.js         # Datos y métricas de los proyectos
│   │   ├── skillsData.js           # Clasificación de habilidades técnicas
│   │   └── timelineData.js         # Hitos del Roadmap Conquer Blocks
│   ├── App.jsx                     # Componente raíz de la aplicación
│   ├── main.jsx                    # Punto de entrada de React 19
│   └── index.css                   # Sistema de diseño global y estilos de impresión
├── index.html                      # HTML5 semántico, JSON-LD Schema y meta tags
├── package.json                    # Dependencias y scripts de Vite
└── vite.config.js                  # Configuración de compilación y base path
```

---

## 💻 Instalación & Ejecución Local

### Prerrequisitos
- **Node.js** (versión 18 o superior)
- **npm** (versión 9 o superior)
- **Python 3.8+** (opcional, solo para regenerar los PDFs de los CVs)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/PereJSS/Portfolio.git
   cd Portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos listos para producción se generarán en la carpeta `dist/`.

---

## 📄 Generación de CVs en PDF con Python

Los CVs descargables se generan nativamente en Python usando **ReportLab** para garantizar:
- Tipografía vectorial crisp y texto 100% seleccionable e indexable por software ATS.
- Ajuste matemático exacto a **1 sola página A4** sin desbordamiento.
- Enlaces web clicables directos al repositorio y al portfolio.

Para regenerar ambos PDFs (`Tech` y `Formal ATS`):

```bash
# Instalar dependencias de Python (si es necesario)
pip install reportlab pillow pypdf

# Ejecutar el generador
python scripts/generate_cv.py
```

El script genera automáticamente:
- `public/cv-pere-joan-formal.pdf`
- `public/cv-pere-joan.pdf`

---

## 🔄 Despliegue Continuo (CI/CD)

El proyecto cuenta con un flujo automatizado de Integración y Despliegue Continuo configurado con **GitHub Actions** en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Ante cada `push` a la rama `main`, el workflow se activa automáticamente.
2. Configura el entorno con **Node.js 20**.
3. Instala dependencias limpias con `npm ci`.
4. Ejecuta `npm run build` para generar el bundle optimizado en `./dist`.
5. Despliega de forma transparente en **GitHub Pages**.

La aplicación en vivo se encuentra en:  
👉 **[https://perejss.github.io/Portfolio/](https://perejss.github.io/Portfolio/)**

---

## 📬 Contacto

¿Interesado en mi perfil o en colaborar en un proyecto? ¡Estaré encantado de conversar!

- 📍 **Ubicación:** Mallorca, España *(Disponible para Remoto / Híbrido)*
- 📞 **Teléfono:** [+34 633 593 107](tel:+34633593107)
- ✉️ **Email:** [pere.joan.sancho14@gmail.com](mailto:pere.joan.sancho14@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/pere-joan](https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/)
- 🐙 **GitHub:** [github.com/PereJSS](https://github.com/PereJSS)
- 🌐 **Portfolio:** [perejss.github.io/Portfolio](https://perejss.github.io/Portfolio/)

---

<div align="center">
  <sub>Diseñado y desarrollado con dedicación por <b>Pere Joan Sancho Suñer</b> • 2026</sub>
</div>

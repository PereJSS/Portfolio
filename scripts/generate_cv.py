import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
from PIL import Image as PILImage, ImageDraw

def create_circular_avatar(src_path="public/pere-joan-photo.png", dest_path="public/pere-joan-avatar-cv.png", size=(320, 320)):
    if not os.path.exists(src_path):
        return None
    im = PILImage.open(src_path).convert("RGBA")
    im = im.resize(size, PILImage.Resampling.LANCZOS)
    
    # Create mask for circular crop
    mask = PILImage.new('L', size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size[0]-1, size[1]-1), fill=255)
    
    # Apply circular mask
    output = PILImage.new('RGBA', size, (255, 255, 255, 0))
    output.paste(im, (0, 0), mask=mask)
    
    # Add elegant emerald circular border
    draw_border = ImageDraw.Draw(output)
    draw_border.ellipse((2, 2, size[0]-3, size[1]-3), outline=(5, 150, 105, 255), width=4)
    
    output.save(dest_path, "PNG")
    return dest_path

def build_pdf(filename="public/cv-pere-joan.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=10 * mm,
        rightMargin=10 * mm,
        topMargin=9 * mm,
        bottomMargin=9 * mm
    )

    styles = getSampleStyleSheet()

    # Color palette - Standard tech recruiter format with portfolio emerald accents
    PRIMARY = colors.HexColor("#0f172a")     # Deep slate
    ACCENT = colors.HexColor("#059669")      # Emerald tech
    ACCENT_BLUE = colors.HexColor("#0284c7") # Tech blue
    TEXT_MAIN = colors.HexColor("#1e293b")   # Slate 800
    TEXT_MUTED = colors.HexColor("#475569")  # Slate 600
    BORDER_COLOR = colors.HexColor("#cbd5e1")# Clean divider

    style_name = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=21,
        leading=23,
        textColor=PRIMARY
    )

    style_title = ParagraphStyle(
        'Title',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=ACCENT
    )

    style_section_h1 = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.8,
        leading=12,
        textColor=PRIMARY,
        spaceAfter=2
    )

    style_section_left = ParagraphStyle(
        'SectionLeft',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=PRIMARY,
        spaceAfter=3
    )

    style_body = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=TEXT_MAIN,
        alignment=TA_LEFT
    )

    style_body_muted = ParagraphStyle(
        'BodyMuted',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=TEXT_MUTED
    )

    style_contact_label = ParagraphStyle(
        'ContactLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=PRIMARY
    )

    style_contact_val = ParagraphStyle(
        'ContactVal',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=TEXT_MUTED
    )

    # ---------------- LEFT COLUMN CONTENT ----------------
    left_flowables = []

    # Circular photo
    avatar_path = create_circular_avatar()
    if avatar_path and os.path.exists(avatar_path):
        photo_img = Image(avatar_path, width=34*mm, height=34*mm)
        t_photo = Table([[photo_img]], colWidths=[55*mm])
        t_photo.setStyle(TableStyle([
            ('ALIGN', (0,0), (-1,-1), 'CENTER'),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        left_flowables.append(t_photo)

    # Contact Section (Recruiter ATS Friendly with live links)
    left_flowables.append(Paragraph("DATOS DE CONTACTO", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=5, spaceBefore=1))
    
    contact_entries = [
        ("Ubicación", "Mallorca, España<br/><font color='#059669'><b>Remoto / Híbrido</b></font>"),
        ("Teléfono", "<a href='tel:+34633593107' color='#0f172a'><b>+34 633 593 107</b></a>"),
        ("Email", "<a href='mailto:pere.joan.sancho14@gmail.com' color='#0284c7'>pere.joan.sancho14@gmail.com</a>"),
        ("GitHub", "<a href='https://github.com/PereJSS' color='#0284c7'>github.com/PereJSS</a>"),
        ("LinkedIn", "<a href='https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/' color='#0284c7'>linkedin.com/in/pere-joan</a>"),
        ("Portfolio Web", "<a href='https://pere-joan-portfolio.vercel.app' color='#059669'><b>Visitar Portfolio Online</b></a>")
    ]
    for lbl, val in contact_entries:
        left_flowables.append(Paragraph(lbl.upper(), style_contact_label))
        left_flowables.append(Paragraph(val, style_contact_val))
        left_flowables.append(Spacer(1, 3))

    left_flowables.append(Spacer(1, 4))

    # Education Section
    left_flowables.append(Paragraph("EDUCACIÓN & FORMACIÓN", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=5, spaceBefore=1))
    
    edu_items = [
        ("2024 – Presente", "Máster en Desarrollo Full Stack", "Conquer Blocks", "Backend Python/Django & Java/Spring, React 19, SQL, Criptografía, Scrum y CI/CD."),
        ("2019 – 2020", "FP Adm. de Empresas (1.er año)", "IES Llorenç Garcias i Font", "Contabilidad analítica, gestión de recursos y operativa empresarial.")
    ]
    for period, title, inst, desc in edu_items:
        left_flowables.append(Paragraph(f"<b>{title}</b>", ParagraphStyle('EduTitle', parent=style_body, fontName='Helvetica-Bold', fontSize=8, textColor=PRIMARY)))
        left_flowables.append(Paragraph(f"<font color='#0284c7'><b>{inst}</b></font> | <font color='#64748b'>{period}</font>", style_body_muted))
        left_flowables.append(Paragraph(desc, ParagraphStyle('EduDesc', parent=style_body_muted, fontSize=7.2, leading=9)))
        left_flowables.append(Spacer(1, 4))

    left_flowables.append(Spacer(1, 3))

    # Languages Section
    left_flowables.append(Paragraph("IDIOMAS", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=5, spaceBefore=1))
    
    langs = [
        ("Español", "Nativo"),
        ("Catalán", "Nativo"),
        ("Inglés", "B2 (Técnico / Profesional)"),
        ("Alemán", "A1 (Nociones básicas)")
    ]
    for l, lvl in langs:
        left_flowables.append(Paragraph(f"• <b>{l}:</b> <font color='#475569'>{lvl}</font>", style_body))
        left_flowables.append(Spacer(1, 1.5))

    left_flowables.append(Spacer(1, 5))

    # Competencias Clave
    left_flowables.append(Paragraph("COMPETENCIAS CLAVE", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=5, spaceBefore=1))
    skills_list = [
        "• Arquitectura API RESTful",
        "• Criptografía X.509 & TSA",
        "• Principios SOLID & Clean Code",
        "• Testing Unitario Automatizado",
        "• Liderazgo Operativo & Scrum",
        "• Resolución Ágil bajo Presión"
    ]
    for s in skills_list:
        left_flowables.append(Paragraph(s, style_body_muted))
        left_flowables.append(Spacer(1, 1.5))

    # ---------------- RIGHT COLUMN CONTENT ----------------
    right_flowables = []

    # Header Name & Title
    right_flowables.append(Paragraph("Pere Joan Sancho Suñer", style_name))
    right_flowables.append(Paragraph("FULL STACK DEVELOPER | PYTHON & BACKEND SPECIALIST (REACT 19 & DJANGO 4.2)", style_title))
    right_flowables.append(Spacer(1, 3))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=6, spaceBefore=2))

    # Professional Summary
    right_flowables.append(Paragraph("PERFIL PROFESIONAL", style_section_h1))
    summary_p1 = (
        "Desarrollador Full Stack enfocado en el <b>backend con Python y Django 4.2</b>, con sólida formación en "
        "arquitectura de software, patrones de diseño y desarrollo de APIs robustas desacopladas. Mi trayectoria previa "
        "liderando equipos en el <b>sector de la hostelería</b> me ha dotado de una contrastada capacidad para la "
        "<b>resolución ágil de problemas bajo presión, comunicación asertiva y gestión orientada a resultados</b> de negocio."
    )
    summary_p2 = (
        "Comprometido con las mejores prácticas de ingeniería (<b>SOLID, PEP 8</b>), el <b>control de "
        "integridad criptográfica</b> (certificados X.509 y sellado de tiempo RFC3161) y la <b>automatización de pruebas</b> "
        "(suite de 32 tests) para desplegar sistemas estables, seguros y escalables en producción."
    )
    right_flowables.append(Paragraph(summary_p1, style_body))
    right_flowables.append(Spacer(1, 2))
    right_flowables.append(Paragraph(summary_p2, style_body))
    right_flowables.append(Spacer(1, 5))

    # Technical Project / Experience
    right_flowables.append(Paragraph("PROYECTO DESTACADO — INGENIERÍA DE SOFTWARE", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=4, spaceBefore=1))
    
    right_flowables.append(Paragraph("<b>CheckIt — Plataforma de Auditoría e Inspección Técnica</b>", ParagraphStyle('ProjTitle', parent=style_body, fontName='Helvetica-Bold', fontSize=9, textColor=PRIMARY)))
    right_flowables.append(Paragraph("<font color='#0284c7'><b>Desarrollador Backend Principal & Arquitecto</b></font> | <a href='https://github.com/PereJSS/Checkit-Backend' color='#059669'><b>Ver Repositorio GitHub</b></a>", style_body_muted))
    right_flowables.append(Paragraph("<i>Plataforma web integral para auditorías técnicas periciales con certificación legal e inmutabilidad criptográfica.</i>", ParagraphStyle('ProjSub', parent=style_body_muted, fontSize=7.8)))
    right_flowables.append(Spacer(1, 2.5))

    bullet_style = ParagraphStyle('Bullet', parent=style_body, leftIndent=8, spaceAfter=2.5)
    
    p_bullets = [
        "• <b>Arquitectura de API y Seguridad:</b> Diseñé e implementé una API REST modular (<code>/api/v1</code>) con Django 4.2 y Django REST Framework. Desarrollé autenticación robusta mediante SimpleJWT (tokens en sessionStorage) y sistema RBAC para control de acceso a nivel de endpoint.",
        "• <b>Criptografía y Firma Notarial:</b> Diseñé el motor de reportes técnicos con ReportLab integrando firmas digitales X.509 mediante pyHanko. Implementé inmutabilidad de evidencias fotográficas mediante hash SHA-256 y sellado de tiempo oficial RFC3161 (TSA).",
        "• <b>Estrategia de Datos y Despliegue:</b> Desacoplé entornos con python-decouple soportando arquitectura híbrida (SQLite local / PostgreSQL en producción). Configuré suite de 32 pruebas automatizadas y despliegue continuo con GitHub Actions.",
        "• <b>Frontend SPA React 19:</b> Construí la interfaz reactiva en React 19 y Tailwind CSS v4 con sincronización en tiempo real mediante polling adaptativo y Page Visibility API para optimización de consumo de red."
    ]
    for b in p_bullets:
        right_flowables.append(Paragraph(b, bullet_style))

    stack_text = "<b>Tecnologías:</b> Python 3.8+ • Django 4.2 • DRF • React 19 • PostgreSQL • pyHanko • ReportLab • X.509 • RFC3161 • Tailwind CSS v4"
    right_flowables.append(Paragraph(f"<font color='#059669'>{stack_text}</font>", ParagraphStyle('StackPill', parent=style_body, fontSize=7.3, fontName='Helvetica-Bold')))
    
    right_flowables.append(Spacer(1, 5))

    # Work Experience (Management & Operations)
    right_flowables.append(Paragraph("EXPERIENCIA LABORAL — GESTIÓN, OPERACIONES Y LIDERAZGO", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=4, spaceBefore=1))

    jobs = [
        (
            "2023 – 2025",
            "Jefe de Bar / Responsable de Operaciones",
            "Hotel Millor Sol (Mallorca)",
            [
                "• Lideré y coordiné equipos de trabajo en entornos de alta exigencia y presión constante, garantizando estándares de servicio y máxima eficiencia operativa.",
                "• Supervisión integral de compras, gestión de stock e inventarios, optimizando costes y reduciendo mermas mediante control riguroso de datos de consumo."
            ]
        ),
        (
            "2017 – 2023",
            "Personal de Hostelería y Atención al Cliente",
            "Hotel Millor Sol, Apartahotel Ciudad Laurel",
            [
                "• Desarrollo intensivo de competencias transversales: comunicación asertiva, negociación y resolución ágil de incidencias imprevistas con clientes internacionales.",
                "• Capacidad de adaptación inmediata a dinámicas de trabajo exigentes y colaboración interdepartamental orientada a objetivos."
            ]
        )
    ]

    for period, role, company, points in jobs:
        right_flowables.append(Paragraph(f"<b>{role}</b> — <font color='#0284c7'><b>{company}</b></font> <font color='#64748b'>({period})</font>", ParagraphStyle('JobHeader', parent=style_body, fontName='Helvetica', fontSize=8.4)))
        for pt in points:
            right_flowables.append(Paragraph(pt, bullet_style))
        right_flowables.append(Spacer(1, 1.5))

    right_flowables.append(Spacer(1, 3))

    # Technical Skills Grid
    right_flowables.append(Paragraph("STACK TECNOLÓGICO Y HERRAMIENTAS", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=4, spaceBefore=1))

    skills_data = [
        [
            Paragraph("<b>Backend:</b> Python 3.8+, Django 4.2, DRF, Java, Spring Boot, APIs REST", style_body),
            Paragraph("<b>Seguridad:</b> SimpleJWT, X.509, pyHanko, RFC3161, SHA-256", style_body)
        ],
        [
            Paragraph("<b>Frontend:</b> React 19, TypeScript, JS ES6+, Tailwind v4, Vite, HTML/CSS", style_body),
            Paragraph("<b>Bases de Datos:</b> PostgreSQL, SQLite (Híbrido), ORM Django", style_body)
        ],
        [
            Paragraph("<b>Calidad & DevOps:</b> SOLID, PEP 8, 32 Django Tests, Git, GitHub Actions, Linux", style_body),
            Paragraph("<b>Metodología:</b> Agile Scrum, Liderazgo de Equipos, Resolución", style_body)
        ]
    ]
    t_skills = Table(skills_data, colWidths=[66*mm, 66*mm])
    t_skills.setStyle(TableStyle([
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    right_flowables.append(t_skills)

    # ---------------- COMBINE IN 2-COLUMN TABLE ----------------
    main_table = Table([[left_flowables, right_flowables]], colWidths=[56*mm, 134*mm])
    main_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (0,-1), 0),
        ('RIGHTPADDING', (0,0), (0,-1), 8),
        ('LEFTPADDING', (1,0), (1,-1), 8),
        ('RIGHTPADDING', (1,0), (1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LINEAFTER', (0,0), (0,-1), 0.8, BORDER_COLOR),
    ]))

    doc.build([main_table])
    print(f"Generated {filename} successfully.")

if __name__ == "__main__":
    build_pdf()

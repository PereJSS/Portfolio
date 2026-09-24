import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
from PIL import Image as PILImage, ImageDraw
import pypdf

def create_circular_avatar(src_path="public/pere-joan-photo.png", dest_path="public/pere-joan-avatar-cv.png", size=(340, 340), border_color=(5, 150, 105, 255), outer_color=(209, 250, 229, 255)):
    if not os.path.exists(src_path):
        return None
    im = PILImage.open(src_path).convert("RGBA")
    im = im.resize((size[0]-16, size[1]-16), PILImage.Resampling.LANCZOS)
    
    # Inner circular mask for photo
    inner_size = (size[0]-16, size[1]-16)
    mask = PILImage.new('L', inner_size, 0)
    draw_m = ImageDraw.Draw(mask)
    draw_m.ellipse((0, 0, inner_size[0]-1, inner_size[1]-1), fill=255)
    
    cropped_photo = PILImage.new('RGBA', inner_size, (255, 255, 255, 0))
    cropped_photo.paste(im, (0, 0), mask=mask)
    
    # Outer canvas with double ring
    output = PILImage.new('RGBA', size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(output)
    
    # Outer soft ring
    draw.ellipse((0, 0, size[0]-1, size[1]-1), outline=outer_color, width=3)
    
    # Paste photo inside
    output.paste(cropped_photo, (8, 8), mask=mask)
    
    # Inner strong accent border
    draw.ellipse((7, 7, size[0]-8, size[1]-8), outline=border_color, width=4)
    
    output.save(dest_path, "PNG")
    return dest_path

def make_progress_bar(width_mm, height_mm, pct, bar_color, bg_color=colors.HexColor("#e2e8f0")):
    w_active = max(1.0, width_mm * mm * (pct / 100.0))
    w_inactive = max(0.5, width_mm * mm * (1.0 - (pct / 100.0)))
    t = Table([['', '']], colWidths=[w_active, w_inactive], rowHeights=[height_mm * mm])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,0), bar_color),
        ('BACKGROUND', (1,0), (1,0), bg_color),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    return t

# ==============================================================================
# 1. TECH / DEVELOPER CV (Emerald & Deep Slate - Spacious & Air-flow Layout)
# ==============================================================================
def build_tech_pdf(filename="public/cv-pere-joan.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=9.0 * mm,
        rightMargin=9.0 * mm,
        topMargin=10.0 * mm,
        bottomMargin=10.0 * mm
    )

    styles = getSampleStyleSheet()

    PRIMARY = colors.HexColor("#0f172a")     # Deep slate 900
    ACCENT = colors.HexColor("#059669")      # Emerald tech 600
    ACCENT_LIGHT = colors.HexColor("#10b981")# Emerald 500
    ACCENT_BLUE = colors.HexColor("#0284c7") # Tech blue
    TEXT_MAIN = colors.HexColor("#1e293b")   # Slate 800
    TEXT_MUTED = colors.HexColor("#475569")  # Slate 600
    BORDER_COLOR = colors.HexColor("#cbd5e1")# Divider
    CARD_BG = colors.HexColor("#f8fafc")     # Clean card tint

    style_name = ParagraphStyle(
        'TechName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=24,
        textColor=PRIMARY
    )

    style_title = ParagraphStyle(
        'TechTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.4,
        leading=12.5,
        textColor=ACCENT
    )

    style_section_h1 = ParagraphStyle(
        'TechSectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.6,
        leading=12.5,
        textColor=PRIMARY,
        spaceAfter=3
    )

    style_section_left = ParagraphStyle(
        'TechSectionLeft',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.6,
        leading=11.5,
        textColor=PRIMARY,
        spaceAfter=3
    )

    style_body = ParagraphStyle(
        'TechBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.1,
        leading=12.2,
        textColor=TEXT_MAIN,
        alignment=TA_LEFT
    )

    style_body_muted = ParagraphStyle(
        'TechBodyMuted',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.4,
        leading=10.2,
        textColor=TEXT_MUTED
    )

    style_contact_label = ParagraphStyle(
        'TechContactLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.2,
        leading=9.2,
        textColor=PRIMARY
    )

    style_contact_val = ParagraphStyle(
        'TechContactVal',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.2,
        leading=9.2,
        textColor=TEXT_MUTED
    )

    # ---------------- LEFT COLUMN CONTENT ----------------
    left_flowables = []

    avatar_path = create_circular_avatar(
        src_path="public/pere-joan-photo.png",
        dest_path="public/pere-joan-avatar-cv.png",
        border_color=(5, 150, 105, 255),
        outer_color=(209, 250, 229, 255)
    )
    if avatar_path and os.path.exists(avatar_path):
        photo_img = Image(avatar_path, width=34*mm, height=34*mm)
        t_photo = Table([[photo_img]], colWidths=[54*mm])
        t_photo.setStyle(TableStyle([
            ('ALIGN', (0,0), (-1,-1), 'CENTER'),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 10),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        left_flowables.append(t_photo)

    # Contact Section
    left_flowables.append(Paragraph("DATOS DE CONTACTO", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))
    
    contact_entries = [
        ("Ubicación", "Mallorca, España<br/><font color='#059669'><b>Remoto / Híbrido</b></font>"),
        ("Teléfono", "<a href='tel:+34633593107' color='#0f172a'><b>+34 633 593 107</b></a>"),
        ("Email", "<a href='mailto:pere.joan.sancho14@gmail.com' color='#059669'>pere.joan.sancho14@gmail.com</a>"),
        ("Portfolio Online", "<a href='https://perejss.github.io/Portfolio/' color='#059669'><b>perejss.github.io/Portfolio</b></a>"),
        ("GitHub", "<a href='https://github.com/PereJSS' color='#0284c7'>github.com/PereJSS</a>"),
        ("LinkedIn", "<a href='https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/' color='#0284c7'>linkedin.com/in/pere-joan</a>")
    ]
    for lbl, val in contact_entries:
        left_flowables.append(Paragraph(lbl.upper(), style_contact_label))
        left_flowables.append(Paragraph(val, style_contact_val))
        left_flowables.append(Spacer(1, 3.5))

    left_flowables.append(Spacer(1, 18))

    # Education Section
    left_flowables.append(Paragraph("EDUCACIÓN & FORMACIÓN", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))
    
    edu_items = [
        ("Sept. 2024 – Sept. 2026", "Máster Full Stack Developer (Finalizado)", "Conquer Blocks", "Backend Python/Django & Java/Spring, React 19, SQL, Scrum, criptografía y CI/CD."),
        ("2019 – 2020", "FP Adm. Empresas (1.er año)", "IES Llorenç Garcias i Font", "Contabilidad analítica, recursos y operaciones comerciales.")
    ]
    for period, title, inst, desc in edu_items:
        left_flowables.append(Paragraph(f"<b>{title}</b>", ParagraphStyle('EduTitle', parent=style_body, fontName='Helvetica-Bold', fontSize=7.6, textColor=PRIMARY)))
        left_flowables.append(Paragraph(f"<font color='#059669'><b>{inst}</b></font> | <font color='#64748b'>{period}</font>", style_body_muted))
        left_flowables.append(Paragraph(desc, ParagraphStyle('EduDesc', parent=style_body_muted, fontSize=7.0, leading=9.2)))
        left_flowables.append(Spacer(1, 4.5))

    left_flowables.append(Spacer(1, 18))

    # Languages Section
    left_flowables.append(Paragraph("IDIOMAS", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))
    
    langs = [
        ("Español", "Nativo", 100),
        ("Catalán", "Nativo", 100),
        ("Inglés", "B2 (Profesional)", 75),
        ("Alemán", "A1 (Básico)", 25)
    ]
    for l, lvl, pct in langs:
        t_lang = Table([
            [Paragraph(f"<b>{l}</b>", ParagraphStyle('LName', parent=style_body, fontSize=7.3, textColor=TEXT_MAIN)),
             Paragraph(f"<font color='#059669'><b>{lvl}</b></font>", ParagraphStyle('LLvl', parent=style_body_muted, fontSize=6.8, alignment=TA_RIGHT))]
        ], colWidths=[27*mm, 27*mm])
        t_lang.setStyle(TableStyle([
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        left_flowables.append(t_lang)
        left_flowables.append(make_progress_bar(54, 1.6, pct, ACCENT))
        left_flowables.append(Spacer(1, 3.8))

    left_flowables.append(Spacer(1, 18))

    # Competencias Clave
    left_flowables.append(Paragraph("COMPETENCIAS CLAVE", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))
    skills_list = [
        "• Arquitectura API RESTful & Modular",
        "• Criptografía Notarial X.509 & TSA",
        "• Principios SOLID & Código Limpio (PEP 8)",
        "• Testing Automatizado (32 Tests)",
        "• Liderazgo Operativo & Scrum Agile",
        "• Resolución Ágil de Incidentes"
    ]
    for s in skills_list:
        left_flowables.append(Paragraph(s, style_body_muted))
        left_flowables.append(Spacer(1, 2.5))

    # ---------------- RIGHT COLUMN CONTENT ----------------
    right_flowables = []

    # Header Name & Title
    right_flowables.append(Paragraph("Pere Joan Sancho Suñer", style_name))
    right_flowables.append(Spacer(1, 2))
    right_flowables.append(Paragraph("FULL STACK DEVELOPER | PYTHON & BACKEND SPECIALIST (DJANGO & REACT 19)", style_title))
    right_flowables.append(Spacer(1, 4))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=11, spaceBefore=2))

    # Professional Summary (Punchy, High-Impact & Spacious)
    right_flowables.append(Paragraph("PERFIL PROFESIONAL", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=2))

    summary_text = (
        "Desarrollador Full Stack especializado en el <b>backend con Python y Django 4.2+</b>, con sólida base en "
        "arquitectura de software, patrones de diseño y desarrollo de APIs RESTful robustas y desacopladas. "
        "Comprometido con las buenas prácticas (<b>SOLID, PEP 8</b>), la <b>seguridad criptográfica</b> (certificados notariales "
        "X.509 y sellado temporal RFC3161) y la <b>automatización de pruebas</b> (suite de 32 tests unitarios e integración CI/CD). "
        "Mi trayectoria previa liderando equipos en <b>hostelería</b> aporta un valor diferencial en <b>resolución ágil de problemas "
        "bajo presión, comunicación asertiva y gestión orientada a objetivos</b>."
    )
    right_flowables.append(Paragraph(summary_text, style_body))
    right_flowables.append(Spacer(1, 18))

    # Technical Project / Experience (Spacious Framed Card)
    right_flowables.append(Paragraph("PROYECTO DESTACADO — INGENIERÍA DE SOFTWARE", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=2))

    bullet_style = ParagraphStyle('Bullet', parent=style_body, leftIndent=6, spaceAfter=4.0)

    card_content = []
    card_content.append(Paragraph("<b>CheckIt — Plataforma de Auditoría e Inspección Técnica</b>", ParagraphStyle('ProjTitle', parent=style_body, fontName='Helvetica-Bold', fontSize=9.0, textColor=PRIMARY)))
    card_content.append(Paragraph("<font color='#059669'><b>Desarrollador Backend Principal & Arquitecto</b></font> | <a href='https://github.com/PereJSS/Checkit-Backend' color='#059669'><b>Ver en GitHub</b></a> | <a href='https://perejss.github.io/Portfolio/' color='#0284c7'><b>Demo en Portfolio</b></a>", style_body_muted))
    card_content.append(Paragraph("<i>Plataforma web avanzada de auditoría pericial con validez legal probatoria e inmutabilidad criptográfica.</i>", ParagraphStyle('ProjSub', parent=style_body_muted, fontSize=7.4)))
    card_content.append(Spacer(1, 3.5))

    p_bullets = [
        "• <b>Arquitectura de API y Seguridad RBAC:</b> Diseñé una API REST modular (<code>/api/v1</code>) con Django 4.2 y DRF. Implementé autenticación stateless JWT (SimpleJWT) y control de acceso por roles (RBAC) protegiendo operaciones sensibles y endpoints críticos.",
        "• <b>Criptografía y Firma Notarial:</b> Desarrollé el motor de auditoría pericial con pyHanko integrando certificados digitales X.509 y sellado temporal RFC3161 (TSA); garanticé la inmutabilidad de evidencias fotográficas mediante hash SHA-256.",
        "• <b>Frontend React 19 y Calidad CI/CD:</b> Construí SPA reactiva con React 19 y Tailwind CSS v4 con polling adaptativo (-40% tráfico de red innecesario). Suite de 32 tests automatizados, persistencia desacoplada y despliegue continuo con GitHub Actions."
    ]
    for b in p_bullets:
        card_content.append(Paragraph(b, bullet_style))

    stack_text = "<b>Tecnologías:</b> Python 3.8+ • Django 4.2 • DRF • React 19 • PostgreSQL • pyHanko • ReportLab • X.509 • RFC3161 • Tailwind CSS v4"
    card_content.append(Paragraph(f"<font color='#059669'>{stack_text}</font>", ParagraphStyle('StackPill', parent=style_body, fontSize=7.2, fontName='Helvetica-Bold')))

    t_card = Table([[card_content]], colWidths=[138*mm])
    t_card.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 0.7, BORDER_COLOR),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 9),
        ('RIGHTPADDING', (0,0), (-1,-1), 9),
    ]))
    right_flowables.append(t_card)
    right_flowables.append(Spacer(1, 18))

    # Work Experience (Management & Operations)
    right_flowables.append(Paragraph("EXPERIENCIA LABORAL — GESTIÓN, OPERACIONES Y LIDERAZGO", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=2))

    jobs = [
        (
            "2023 – 2025",
            "Jefe de Bar / Responsable de Operaciones",
            "Hotel Millor Sol (Mallorca)",
            [
                "• Lideré y coordiné equipos de 8+ personas en entornos de alta exigencia, asegurando estricto cumplimiento de estándares de calidad y servicio.",
                "• Supervisión integral de aprovisionamiento e inventarios, reduciendo un 15% las mermas operativas mediante optimización analítica basada en datos históricos de consumo."
            ]
        ),
        (
            "2017 – 2023",
            "Personal de Hostelería y Atención al Cliente",
            "Hoteles Millor Sol & Laurel",
            [
                "• Comunicación asertiva y resolución ágil de incidencias en entorno dinámico e internacional en 4 idiomas (español, catalán, inglés, alemán), demostrando alta adaptabilidad y orientación al cliente."
            ]
        )
    ]

    for period, role, company, points in jobs:
        right_flowables.append(Paragraph(f"<b>{role}</b> — <font color='#059669'><b>{company}</b></font> <font color='#64748b'>({period})</font>", ParagraphStyle('JobHeader', parent=style_body, fontName='Helvetica', fontSize=8.0)))
        for pt in points:
            right_flowables.append(Paragraph(pt, bullet_style))
        right_flowables.append(Spacer(1, 3))

    right_flowables.append(Spacer(1, 16))

    # Technical Skills Grid
    right_flowables.append(Paragraph("STACK TECNOLÓGICO Y HERRAMIENTAS", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=2))

    skills_data = [
        [
            Paragraph("<b>Backend:</b> Python 3.8+, Django 4.2, DRF, Java, Spring Boot, APIs REST", style_body),
            Paragraph("<b>Seguridad & Datos:</b> SimpleJWT, X.509, pyHanko, RFC3161, PostgreSQL", style_body)
        ],
        [
            Paragraph("<b>Frontend:</b> React 19, TypeScript, JS ES6+, Tailwind v4, Vite, HTML/CSS", style_body),
            Paragraph("<b>Bases de Datos:</b> PostgreSQL, SQLite (Híbrido), ORM Django", style_body)
        ],
        [
            Paragraph("<b>Calidad & DevOps:</b> SOLID, PEP 8, 32 Django Tests, Git, GitHub Actions, Docker", style_body),
            Paragraph("<b>Metodología:</b> Agile Scrum, Liderazgo de Equipos, Resolución de Problemas", style_body)
        ]
    ]
    t_skills = Table(skills_data, colWidths=[68*mm, 70*mm])
    t_skills.setStyle(TableStyle([
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 3),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    right_flowables.append(t_skills)

    # ---------------- COMBINE IN 2-COLUMN TABLE ----------------
    main_table = Table([[left_flowables, right_flowables]], colWidths=[54*mm, 138*mm])
    main_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (0,-1), 0),
        ('RIGHTPADDING', (0,0), (0,-1), 7),
        ('LEFTPADDING', (1,0), (1,-1), 7),
        ('RIGHTPADDING', (1,0), (1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LINEAFTER', (0,0), (0,-1), 0.8, BORDER_COLOR),
    ]))

    doc.build([main_table])
    
    # Strictly verify 1 page
    reader = pypdf.PdfReader(filename)
    assert len(reader.pages) == 1, f"ERROR: Tech PDF generated {len(reader.pages)} pages instead of 1!"
    print(f"Generated Tech CV: {filename} (strictly {len(reader.pages)} page)")


# ==============================================================================
# 2. FORMAL / ATS STANDARD CV (Swiss Executive Corporate Blue & Slate - Spacious)
# ==============================================================================
def build_formal_pdf(filename="public/cv-pere-joan-formal.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=9.0 * mm,
        rightMargin=9.0 * mm,
        topMargin=10.0 * mm,
        bottomMargin=10.0 * mm
    )

    styles = getSampleStyleSheet()

    PRIMARY = colors.HexColor("#0f172a")     # Deep slate 900
    ACCENT = colors.HexColor("#0369a1")      # Classic corporate ocean blue
    ACCENT_LIGHT = colors.HexColor("#0284c7")# Sky blue 600
    TEXT_MAIN = colors.HexColor("#1e293b")   # Slate 800
    TEXT_MUTED = colors.HexColor("#475569")  # Slate 600
    BORDER_COLOR = colors.HexColor("#cbd5e1")# Divider
    CARD_BG = colors.HexColor("#f8fafc")     # Clean card tint

    style_name = ParagraphStyle(
        'FormalName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=24,
        textColor=PRIMARY
    )

    style_title = ParagraphStyle(
        'FormalTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.4,
        leading=12.5,
        textColor=ACCENT
    )

    style_section_h1 = ParagraphStyle(
        'FormalSectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.6,
        leading=12.5,
        textColor=PRIMARY,
        spaceAfter=3
    )

    style_section_left = ParagraphStyle(
        'FormalSectionLeft',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.6,
        leading=11.5,
        textColor=PRIMARY,
        spaceAfter=3
    )

    style_body = ParagraphStyle(
        'FormalBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.1,
        leading=12.2,
        textColor=TEXT_MAIN,
        alignment=TA_LEFT
    )

    style_body_muted = ParagraphStyle(
        'FormalBodyMuted',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.4,
        leading=10.2,
        textColor=TEXT_MUTED
    )

    style_contact_label = ParagraphStyle(
        'FormalContactLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.2,
        leading=9.2,
        textColor=PRIMARY
    )

    style_contact_val = ParagraphStyle(
        'FormalContactVal',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.2,
        leading=9.2,
        textColor=TEXT_MUTED
    )

    # ---------------- LEFT COLUMN CONTENT ----------------
    left_flowables = []

    avatar_path = create_circular_avatar(
        src_path="public/pere-joan-photo.png",
        dest_path="public/pere-joan-avatar-formal.png",
        border_color=(2, 132, 199, 255),
        outer_color=(224, 242, 254, 255)
    )
    if avatar_path and os.path.exists(avatar_path):
        photo_img = Image(avatar_path, width=34*mm, height=34*mm)
        t_photo = Table([[photo_img]], colWidths=[54*mm])
        t_photo.setStyle(TableStyle([
            ('ALIGN', (0,0), (-1,-1), 'CENTER'),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 10),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        left_flowables.append(t_photo)

    # Contact Section
    left_flowables.append(Paragraph("CONTACTO", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))
    
    contact_entries = [
        ("Ubicación", "Mallorca, España<br/><font color='#0369a1'><b>Remoto / Híbrido</b></font>"),
        ("Teléfono", "<a href='tel:+34633593107' color='#0f172a'><b>+34 633 593 107</b></a>"),
        ("Email", "<a href='mailto:pere.joan.sancho14@gmail.com' color='#0369a1'>pere.joan.sancho14@gmail.com</a>"),
        ("Portfolio Online", "<a href='https://perejss.github.io/Portfolio/' color='#0369a1'><b>perejss.github.io/Portfolio</b></a>"),
        ("GitHub", "<a href='https://github.com/PereJSS' color='#0369a1'>github.com/PereJSS</a>"),
        ("LinkedIn", "<a href='https://www.linkedin.com/in/pere-joan-sancho-su%C3%B1er-68a13a3a4/' color='#0369a1'>linkedin.com/in/pere-joan</a>")
    ]
    for lbl, val in contact_entries:
        left_flowables.append(Paragraph(lbl.upper(), style_contact_label))
        left_flowables.append(Paragraph(val, style_contact_val))
        left_flowables.append(Spacer(1, 3.5))

    left_flowables.append(Spacer(1, 18))

    # Education Section
    left_flowables.append(Paragraph("EDUCACIÓN", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))
    
    edu_items = [
        ("Sept. 2024 – Sept. 2026", "Máster Full Stack Developer (Finalizado)", "Conquer Blocks", "Backend Python/Django & Java/Spring, React 19, SQL, Scrum, criptografía y CI/CD."),
        ("2019 – 2020", "FP Adm. Empresas (1.er año)", "IES Llorenç Garcias i Font", "Contabilidad analítica, recursos y operaciones comerciales.")
    ]
    for period, title, inst, desc in edu_items:
        left_flowables.append(Paragraph(f"<b>{title}</b>", ParagraphStyle('FormalEduTitle', parent=style_body, fontName='Helvetica-Bold', fontSize=7.6, textColor=PRIMARY)))
        left_flowables.append(Paragraph(f"<font color='#0369a1'><b>{inst}</b></font> | <font color='#64748b'>{period}</font>", style_body_muted))
        left_flowables.append(Paragraph(desc, ParagraphStyle('FormalEduDesc', parent=style_body_muted, fontSize=7.0, leading=9.2)))
        left_flowables.append(Spacer(1, 4.5))

    left_flowables.append(Spacer(1, 18))

    # Languages Section
    left_flowables.append(Paragraph("IDIOMAS", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))
    
    langs = [
        ("Español", "Nativo", 100),
        ("Catalán", "Nativo", 100),
        ("Inglés", "B2 (Profesional)", 75),
        ("Alemán", "A1 (Básico)", 25)
    ]
    for l, lvl, pct in langs:
        t_lang = Table([
            [Paragraph(f"<b>{l}</b>", ParagraphStyle('FormalLName', parent=style_body, fontSize=7.3, textColor=TEXT_MAIN)),
             Paragraph(f"<font color='#0369a1'><b>{lvl}</b></font>", ParagraphStyle('FormalLLvl', parent=style_body_muted, fontSize=6.8, alignment=TA_RIGHT))]
        ], colWidths=[27*mm, 27*mm])
        t_lang.setStyle(TableStyle([
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        left_flowables.append(t_lang)
        left_flowables.append(make_progress_bar(54, 1.6, pct, ACCENT_LIGHT))
        left_flowables.append(Spacer(1, 3.8))

    left_flowables.append(Spacer(1, 18))

    # Competencias Clave
    left_flowables.append(Paragraph("COMPETENCIAS CLAVE", style_section_left))
    left_flowables.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))
    skills_list = [
        "• Arquitectura API RESTful & Modular",
        "• Criptografía Notarial X.509 & TSA",
        "• Principios SOLID & Código Limpio (PEP 8)",
        "• Testing Unitario Automatizado (32 Tests)",
        "• Liderazgo Operativo & Metodología Scrum",
        "• Resolución Ágil de Problemas bajo Presión"
    ]
    for s in skills_list:
        left_flowables.append(Paragraph(s, style_body_muted))
        left_flowables.append(Spacer(1, 2.5))

    # ---------------- RIGHT COLUMN CONTENT ----------------
    right_flowables = []

    # Header Name & Title
    right_flowables.append(Paragraph("Pere Joan Sancho Suñer", style_name))
    right_flowables.append(Spacer(1, 2))
    right_flowables.append(Paragraph("FULL STACK DEVELOPER | PYTHON & BACKEND SPECIALIST", style_title))
    right_flowables.append(Spacer(1, 4))
    right_flowables.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceAfter=11, spaceBefore=2))

    # Professional Summary (Punchy, High-Impact & Spacious)
    right_flowables.append(Paragraph("PERFIL PROFESIONAL", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=2))

    summary_text = (
        "Desarrollador Full Stack especializado en el <b>backend con Python y Django 4.2+</b>, con sólida base en "
        "arquitectura de software, patrones de diseño y desarrollo de APIs RESTful robustas y desacopladas. "
        "Comprometido con las buenas prácticas (<b>SOLID, PEP 8</b>), la <b>seguridad criptográfica</b> (certificados notariales "
        "X.509 y sellado temporal RFC3161) y la <b>automatización de pruebas</b> (suite de 32 tests unitarios e integración CI/CD). "
        "Mi trayectoria previa liderando equipos en <b>hostelería</b> aporta un valor diferencial en <b>resolución ágil de problemas "
        "bajo presión, comunicación asertiva y gestión orientada a objetivos</b>."
    )
    right_flowables.append(Paragraph(summary_text, style_body))
    right_flowables.append(Spacer(1, 18))

    # Technical Project / Experience (Spacious Framed Card)
    right_flowables.append(Paragraph("PROYECTO DESTACADO — EXPERIENCIA TÉCNICA", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=2))

    bullet_style = ParagraphStyle('FormalBullet', parent=style_body, leftIndent=6, spaceAfter=4.0)

    card_content = []
    card_content.append(Paragraph("<b>CheckIt — Plataforma de Auditoría e Inspección Técnica</b>", ParagraphStyle('FormalProjTitle', parent=style_body, fontName='Helvetica-Bold', fontSize=9.0, textColor=PRIMARY)))
    card_content.append(Paragraph("<font color='#0369a1'><b>Desarrollador Backend Principal & Arquitecto</b></font> | <a href='https://github.com/PereJSS/Checkit-Backend' color='#0369a1'><b>Ver en GitHub</b></a> | <a href='https://perejss.github.io/Portfolio/' color='#0284c7'><b>Demo en Portfolio</b></a>", style_body_muted))
    card_content.append(Paragraph("<i>Plataforma web avanzada de auditoría pericial con validez legal probatoria e inmutabilidad criptográfica.</i>", ParagraphStyle('FormalProjSub', parent=style_body_muted, fontSize=7.4)))
    card_content.append(Spacer(1, 3.5))

    p_bullets = [
        "• <b>Arquitectura de API y Seguridad RBAC:</b> Diseñé una API REST modular (<code>/api/v1</code>) con Django 4.2 y DRF. Implementé autenticación stateless JWT (SimpleJWT) y control de acceso por roles (RBAC) protegiendo operaciones sensibles y endpoints críticos.",
        "• <b>Criptografía y Firma Notarial:</b> Desarrollé el motor de auditoría pericial con pyHanko integrando certificados digitales X.509 y sellado temporal RFC3161 (TSA); garanticé la inmutabilidad de evidencias fotográficas mediante hash SHA-256.",
        "• <b>Frontend React 19 y Calidad CI/CD:</b> Construí SPA reactiva con React 19 y Tailwind CSS v4 con polling adaptativo (-40% tráfico de red innecesario). Suite de 32 tests automatizados, persistencia desacoplada y despliegue continuo con GitHub Actions."
    ]
    for b in p_bullets:
        card_content.append(Paragraph(b, bullet_style))

    stack_text = "<b>Tecnologías:</b> Python 3.8+ • Django 4.2 • DRF • React 19 • PostgreSQL • pyHanko • ReportLab • X.509 • RFC3161 • Tailwind CSS v4"
    card_content.append(Paragraph(f"<font color='#0369a1'>{stack_text}</font>", ParagraphStyle('FormalStackPill', parent=style_body, fontSize=7.2, fontName='Helvetica-Bold')))

    t_card = Table([[card_content]], colWidths=[138*mm])
    t_card.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 0.7, BORDER_COLOR),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 9),
        ('RIGHTPADDING', (0,0), (-1,-1), 9),
    ]))
    right_flowables.append(t_card)
    right_flowables.append(Spacer(1, 18))

    # Work Experience (Management & Operations)
    right_flowables.append(Paragraph("EXPERIENCIA LABORAL — GESTIÓN Y LIDERAZGO", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=2))

    jobs = [
        (
            "2023 – 2025",
            "Jefe de Bar / Responsable de Operaciones",
            "Hotel Millor Sol (Mallorca)",
            [
                "• Lideré y coordiné equipos de 8+ personas en entornos de alta exigencia, asegurando estricto cumplimiento de estándares de calidad y servicio.",
                "• Supervisión integral de aprovisionamiento e inventarios, reduciendo un 15% las mermas operativas mediante optimización analítica basada en datos históricos de consumo."
            ]
        ),
        (
            "2017 – 2023",
            "Personal de Hostelería y Atención al Cliente",
            "Hoteles Millor Sol & Laurel",
            [
                "• Comunicación asertiva y resolución ágil de incidencias en entorno dinámico e internacional en 4 idiomas (español, catalán, inglés, alemán), demostrando alta adaptabilidad y orientación al cliente."
            ]
        )
    ]

    for period, role, company, points in jobs:
        right_flowables.append(Paragraph(f"<b>{role}</b> — <font color='#0369a1'><b>{company}</b></font> <font color='#64748b'>({period})</font>", ParagraphStyle('FormalJobHeader', parent=style_body, fontName='Helvetica', fontSize=8.0)))
        for pt in points:
            right_flowables.append(Paragraph(pt, bullet_style))
        right_flowables.append(Spacer(1, 3))

    right_flowables.append(Spacer(1, 16))

    # Technical Skills Grid
    right_flowables.append(Paragraph("HABILIDADES TÉCNICAS — STACK TECNOLÓGICO", style_section_h1))
    right_flowables.append(HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=6, spaceBefore=2))

    skills_data = [
        [
            Paragraph("<b>Backend:</b> Python 3.8+, Django 4.2, DRF, Java, Spring Boot, APIs REST", style_body),
            Paragraph("<b>Seguridad & Datos:</b> SimpleJWT, X.509, pyHanko, RFC3161, PostgreSQL", style_body)
        ],
        [
            Paragraph("<b>Frontend:</b> React 19, TypeScript, JS ES6+, Tailwind v4, Vite, HTML/CSS", style_body),
            Paragraph("<b>Bases de Datos:</b> PostgreSQL, SQLite (Híbrido), ORM Django", style_body)
        ],
        [
            Paragraph("<b>Calidad & DevOps:</b> SOLID, PEP 8, 32 Django Tests, Git, GitHub Actions, Docker", style_body),
            Paragraph("<b>Metodología:</b> Agile Scrum, Liderazgo de Equipos, Resolución de Problemas", style_body)
        ]
    ]
    t_skills = Table(skills_data, colWidths=[68*mm, 70*mm])
    t_skills.setStyle(TableStyle([
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 3),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    right_flowables.append(t_skills)

    # ---------------- COMBINE IN 2-COLUMN TABLE ----------------
    main_table = Table([[left_flowables, right_flowables]], colWidths=[54*mm, 138*mm])
    main_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (0,-1), 0),
        ('RIGHTPADDING', (0,0), (0,-1), 7),
        ('LEFTPADDING', (1,0), (1,-1), 7),
        ('RIGHTPADDING', (1,0), (1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LINEAFTER', (0,0), (0,-1), 0.8, BORDER_COLOR),
    ]))

    doc.build([main_table])
    
    # Strictly verify 1 page
    reader = pypdf.PdfReader(filename)
    assert len(reader.pages) == 1, f"ERROR: Formal PDF generated {len(reader.pages)} pages instead of 1!"
    print(f"Generated Formal CV: {filename} (strictly {len(reader.pages)} page)")

if __name__ == "__main__":
    build_tech_pdf()
    build_formal_pdf()

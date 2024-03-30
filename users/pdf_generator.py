from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
import os


def create_resume_pdf(data):
    doc = SimpleDocTemplate("resume.pdf", pagesize=letter)
    styles = getSampleStyleSheet()
    arial_bold_style = ParagraphStyle(
        "ArialBold",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=12,
    )
    story = []
    logo_path = "logo.png"
    if os.path.exists(logo_path):
        logo = Image(logo_path, width=2 * inch, height=2 * inch)
        story.append(logo)
    photo_path = r"C:\Users\Botirbek\Desktop\logo.jpg"
    if os.path.exists(photo_path):
        photo = Image(photo_path, width=2 * inch, height=3 * inch)
        story.append(photo)
    story.append(Spacer(1, 0.5 * inch))
    title = "<font size=14><b>Resume</b></font>"
    story.append(Paragraph(title, styles["Title"]))
    line_style = TableStyle([
        ('LINEABOVE', (0, 0), (-1, 0), 1, colors.black),
        ('LINEBELOW', (0, 0), (-1, 0), 1, colors.black),
    ])
    for key, value in data.items():
        story.append(Spacer(1, 0.1 * inch))
        story.append(Paragraph(f"<b>{key}:</b> {value}", arial_bold_style))
        if key == "About me" or key == "Links to social accounts":
            story.append(Spacer(1, 0.25 * inch))
            line_table = Table([[""]], colWidths=[5.5 * inch])
            line_table.setStyle(line_style)
            story.append(line_table)
        if key == "Links to social accounts":
            links = value.split("\n")
            for link in links:
                story.append(Paragraph(f'<a href="{link}">{link}</a>', styles["Normal"]))
        if key != "Awards":
            story.append(Spacer(1, 0.15 * inch))
            line_table = Table([[""]], colWidths=[5.5 * inch])
            line_table.setStyle(line_style)
            story.append(line_table)
    doc.build(story)
data = {}
data["First name"] = input("First name: ")
data["Last name"] = input("Last name: ")
data["Email"] = input("Email: ")
data["Country"] = input("Country: ")
data["City"] = input("City: ")
data["Phone number"] = input("Phone number: ")
data["Occupation"] = input("Occupation: ")
data["Date of birth"] = input("Date of birth: ")
data["Links to social accounts"] = input("Links to social accounts (separated by newline): ")
data["Skills"] = input("Skills: ")
data["Languages"] = input("Languages: ")
data["About me"] = input("About me: ")
data["Work experience"] = input("Work experience: ")
data["Education"] = input("Education: ")
data["Awards"] = input("Awards: ")
desktop_path = os.path.expanduser("~/Desktop")
pdf_path = os.path.join(desktop_path, "resume.pdf")
create_resume_pdf(data)
os.rename("resume.pdf", pdf_path)
print("!")

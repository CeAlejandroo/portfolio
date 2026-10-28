"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Bot,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  FlaskConical,
  Globe,
  Github,
  HardDrive,
  Headset,
  Layers,
  Network,
  PanelsTopLeft,
  Send,
  ShieldCheck,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react"

const skillIcons: Record<string, { icon: LucideIcon; color: string }> = {
  "Next.js": { icon: Code2, color: "#ffffff" },
  TypeScript: { icon: Braces, color: "#3178C6" },
  "PHP (Laravel)": { icon: FileCode2, color: "#FF2D20" },
  "C# (.NET)": { icon: Layers, color: "#512BD4" },
  "Tailwind CSS": { icon: PanelsTopLeft, color: "#38BDF8" },
  WordPress: { icon: Globe, color: "#21759B" },
  "Administración de Redes (Switches, Routers, QoS)": { icon: Network, color: "#38BDF8" },
  "Active Directory": { icon: ShieldCheck, color: "#0078D4" },
  "Diagnóstico de Hardware/Software": { icon: HardDrive, color: "#A8A8C0" },
  "Soporte Técnico Integral": { icon: Headset, color: "#A8A8C0" },
  "SQL Server": { icon: Database, color: "#CC2927" },
  PostgreSQL: { icon: Database, color: "#4169E1" },
  MySQL: { icon: Database, color: "#4479A1" },
  Supabase: { icon: Database, color: "#3ECF8E" },
  MariaDB: { icon: Database, color: "#C0765A" },
  Cloudflare: { icon: Cloud, color: "#F38020" },
  "APIs RESTful": { icon: Send, color: "#8B5CF6" },
  "Postman (Testing/Docs)": { icon: FlaskConical, color: "#FF6C37" },
  "Agentes de IA / LLMs": { icon: Bot, color: "#A78BFA" },
  GitHub: { icon: Github, color: "#ffffff" },
  "Flutter / Dart": { icon: Smartphone, color: "#54C5F8" },
  Docker: { icon: Container, color: "#2496ED" },
}

function SkillCard({ name }: { name: string }) {
  const { icon: Icon, color } = skillIcons[name]

  return (
    <div className="skill-item">
      <div className="skill-icon" aria-hidden="true">
        <Icon size={28} color={color} strokeWidth={1.8} />
      </div>
      <span className="skill-name">{name}</span>
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [openModal, setOpenModal] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-mi", "portafolio", "educacion", "skills", "contacto"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="portfolio-container">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #1a1033;
          color: #fff;
          min-height: 100vh;
        }

        .portfolio-container {
          display: flex;
          min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
          width: 200px;
          background: #150d28;
          padding: 30px 20px;
          position: fixed;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 1px solid #2d1f4e;
        }

        .avatar-container {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 4px;
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
        }

        .avatar-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }

        .avatar-initials {
          position: relative;
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(135deg, #00ff88 0%, #ff6b9d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          list-style: none;
          width: 100%;
        }

        .nav-menu li {
          margin: 8px 0;
        }

        .nav-menu a {
          display: block;
          padding: 10px 15px;
          color: #a8a8c0;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border-radius: 8px;
          cursor: pointer;
        }

        .nav-menu a:hover,
        .nav-menu a.active {
          color: #00ff88;
          background: rgba(0, 255, 136, 0.1);
        }

        /* Main Content */
        .main-content {
          margin-left: 200px;
          flex: 1;
          padding: 60px 80px;
        }

        /* Hero Section */
        .hero-section {
          min-height: calc(100vh - 120px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-name {
          font-size: 64px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .hero-name .first-name {
          color: #00ff88;
          display: block;
        }

        .hero-name .last-name {
          background: linear-gradient(90deg, #91B0BA, #42ACC9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          color: #a8a8c0;
          font-size: 16px;
          margin-bottom: 15px;
          font-weight: 300;
        }

        .hero-welcome {
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        .hero-contact {
          color: #a8a8c0;
          font-size: 14px;
          margin-bottom: 30px;
        }

        .hero-contact a {
          color: #00ff88;
          text-decoration: underline;
        }

        .cv-button {
          display: inline-block;
          padding: 12px 30px;
          border: 2px solid #a8a8c8;
          color: #fff;
          text-decoration: none;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          border-radius: 25px;
          transition: all 0.3s ease;
          background: transparent;
          cursor: pointer;
          margin-bottom: 35px;
        }

        .cv-button:hover {
          border-color: #00ff88;
          color: #00ff88;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #667eea;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 20px #a8a8c0;
        }

        /* Sections */
        .section {
          padding: 80px 0;
          border-top: 1px solid #2d1f4e;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 40px;
          color: #00ff88;
        }

        /* Sobre Mi */
        .about-content {
          display: flex;
          gap: 50px;
          align-items: flex-start;
        }

        .about-text {
          flex: 1;
        }

        .about-text p {
          color: #a8a8c0;
          line-height: 1.8;
          margin-bottom: 20px;
          font-size: 15px;
        }

        .about-image {
          width: 300px;
          height: 300px;
          border-radius: 20px;
          background: linear-gradient(135deg, #2d1f4e 0%, #1a1033 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #3d2f5e;
        }

        .about-image-placeholder {
          font-size: 80px;
          color: #00ff88;
        }

        /* Portfolio Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 50px;
        }

        .portfolio-card {
          background: #2d1f4e;
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .portfolio-card-image {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
        }

        .malinalli-preview {
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 12px;
          padding: 24px;
          background: #1a0904;
          color: #f5b900;
        }

        .malinalli-brand-mark {
          display: grid;
          width: 40px;
          height: 40px;
          place-items: center;
          border-radius: 8px;
          background: #f5b900;
          color: #1a0904;
          font-size: 24px;
          font-weight: 700;
        }

        .malinalli-brand-copy {
          display: flex;
          flex-direction: column;
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
        }

        .malinalli-brand-copy small {
          margin-top: 5px;
          color: #bda98f;
          font-family: 'Poppins', sans-serif;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .malinalli-preview-heading {
          position: absolute;
          top: 95px;
          left: 24px;
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 700;
        }

        .malinalli-preview-caption {
          position: absolute;
          top: 140px;
          left: 24px;
          color: #bda98f;
          font-size: 12px;
        }

        .news-cms-preview {
          display: grid;
          grid-template-columns: 110px 1fr;
          background: #f3efe4;
          color: #211b17;
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
        }

        .news-cms-sidebar {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 18px 12px;
          background: #1d1a17;
          color: #fff;
        }

        .news-cms-sidebar strong {
          margin-bottom: 4px;
          color: #ef9b9b;
          font-size: 7px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .news-cms-main {
          min-width: 0;
          padding: 14px 18px;
        }

        .news-cms-main h4 {
          margin-bottom: 3px;
          font-family: Georgia, serif;
          font-size: 21px;
          font-weight: 400;
        }

        .news-cms-main p {
          margin-bottom: 10px;
          color: #766e62;
          font-size: 8px;
        }

        .news-cms-table {
          overflow: hidden;
          border: 1px solid #ded5c5;
          border-radius: 6px;
          background: #faf8f1;
        }

        .news-cms-table-row {
          display: grid;
          grid-template-columns: 1fr 54px 58px;
          gap: 8px;
          align-items: center;
          padding: 7px 8px;
          border-bottom: 1px solid #e6dece;
        }

        .news-cms-table-row:last-child {
          border-bottom: 0;
        }

        .news-cms-status {
          width: fit-content;
          padding: 2px 6px;
          border-radius: 10px;
          background: #d7eee2;
          color: #176746;
          font-size: 7px;
        }

        .card-icon {
          width: 100%;  /* Tamaño de la imagen */
          height: 100%; 
          object-fit: cover; 
          padding: 0;
          display: block;
          }

        .portfolio-card-content {
          padding: 20px;
        }

        .portfolio-card-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #fff;
        }

        .portfolio-card-desc {
          color: #a8a8c0;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .portfolio-card-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 5px 12px;
          background: rgba(0, 255, 136, 0.1);
          color: #00ff88;
          border-radius: 15px;
          font-size: 12px;
        }
        
        /* Portfolio Modal */
        /* Contenedor principal del modal */
        
        .dialog-custom {
          background-color: #1a1a2e; /* Azul muy oscuro para combinar con tu fondo */
          color: #ffffff;
          border: 1px solid #333;
          border-radius: 15px;
          padding: 24px;
        }

        .modal-title {
          color: #00ff88; /* El verde brillante que usas en "Portafolio" */
          font-size: 1.5rem;
          font-weight: bold;
        }

        .modal-subtitle {
          color: #b0b0b0;
          font-style: bold;
          margin-bottom: 15px;
        }

        .modal-body p {
          line-height: 1.6;
          color: #e0e0e0;
          margin-bottom: 20px;
        }

        /* Sección de tecnologías */
        .modal-tech {
          background: rgba(255, 255, 255, 0.05);
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 20px;
        
        }

        .modal-tech strong {
          color: #667eea;
        }

        /* Botón de GitHub */
        .btn-github {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          transition: transform 0.2s;
        }

        .btn-github:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(118, 75, 162, 0.4);
        }

        /* Education */
        .education-subtitle {
          font-size: 18px;
          color: #37AFCC;
          margin: 30px 0 20px 0;
          padding-bottom: 10px;
          border-bottom: 2px solid #2d1f4e;
        }

        .education-subtitle:first-of-type {
          margin-top: 0;
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 768px) {
          .certificates-grid {
            grid-template-columns: 1fr;
          }
        }

        .education-item {
          background: #2d1f4e;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          border-left: 4px solid #a8a8c0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .certificates-grid .education-item {
          margin-bottom: 0;
        }

        .education-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(222, 222, 227, 0.01);
        }

        .education-year {
          color: #D1D1E0;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
          display: inline-block;
          background: #667eea;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .education-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #fff;
        }

        .education-institution {
          color: #a8a8c0;
          font-size: 14px;
        }

        .certificates-hint {
          color: #a8a8c0;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .certificate-link {
          text-decoration: none;
          display: block;
          cursor: pointer;
          position: relative;
        }

        .certificate-link:hover {
          border-color: #00ff88;
        }

        .certificate-link:hover .education-title {
          color: #00ff88;
        }

        .view-certificate {
          display: inline-block;
          margin-top: 12px;
          font-size: 13px;
          color: #00ff88;
          font-weight: 500;
          opacity: 0;
          transform: translateY(5px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .certificate-link:hover .view-certificate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Skills */
        .skills-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .skills-category h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #a8a8c0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          background: #2d1f4e;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: #3d2f5e;
          transform: translateX(5px);
        }

        .skill-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .skill-name {
          font-size: 14px;
          font-weight: 500;
          color: #fff;
        }

        /* Contact */
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .contact-info h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #a8a8c0;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          color: #a8a8c0;
        }

        .contact-item-icon {
          width: 45px;
          height: 45px;
          background: #2d1f4e;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #00ff88;
        }

        .contact-form {
          background: #2d1f4e;
          padding: 35px;
          border-radius: 15px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #a8a8c0;
          font-size: 14px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          background: #1a1033;
          border: 1px solid #3d2f5e;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00ff88;
        }

        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }

        .submit-button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(90deg, #00ff88, #00cc6a);
          border: none;
          border-radius: 8px;
          color: #1a1033;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .sidebar {
            width: 180px;
          }
          .main-content {
            margin-left: 180px;
            padding: 40px 50px;
          }
          .hero-name {
            font-size: 48px;
          }
          .skills-container,
          .contact-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            height: auto;
            position: relative;
            padding: 20px;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .avatar-container {
            width: 60px;
            height: 60px;
            margin-bottom: 0;
          }
          .avatar-initials {
            font-size: 20px;
          }
          .nav-menu {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 5px;
            width: auto;
          }
          .nav-menu li {
            margin: 0;
          }
          .nav-menu a {
            padding: 8px 12px;
            font-size: 11px;
          }
          .main-content {
            margin-left: 0;
            padding: 30px 20px;
          }
          .hero-name {
            font-size: 36px;
          }
          .about-content {
            flex-direction: column-reverse;
          }
          .about-image {
            width: 100%;
            height: 200px;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .portfolio-container {
            flex-direction: column;
          }
        }
      `}</style>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="avatar-container">
          <img
            src="/images/foto.jpeg"
            alt="Ceballos Alejandro"
          />
        </div>
        <nav>
          <ul className="nav-menu">
            <li>
              <a
                className={activeSection === "inicio" ? "active" : ""}
                onClick={() => scrollToSection("inicio")}
              >
                ALEJANDRO
              </a>
            </li>
            <li>
              <a
                className={activeSection === "sobre-mi" ? "active" : ""}
                onClick={() => scrollToSection("sobre-mi")}
              >
                SOBRE MI
              </a>
            </li>
            <li>
              <a
                className={activeSection === "portafolio" ? "active" : ""}
                onClick={() => scrollToSection("portafolio")}
              >
                PORTAFOLIO
              </a>
            </li>
            <li>
              <a
                className={activeSection === "educacion" ? "active" : ""}
                onClick={() => scrollToSection("educacion")}
              >
                EDUCACIÓN
              </a>
            </li>
            <li>
              <a
                className={activeSection === "skills" ? "active" : ""}
                onClick={() => scrollToSection("skills")}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                className={activeSection === "contacto" ? "active" : ""}
                onClick={() => scrollToSection("contacto")}
              >
                {/*CONTACTO*/}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="inicio" className="hero-section">
          <h1 className="hero-name">
            <span className="first-name">CEBALLOS</span>
            <span className="last-name">ALEJANDRO</span>
          </h1>
          <p className="hero-subtitle">Desarrollador Web Full Stack | E-commerce y soluciones para negocios</p>
          <p className="hero-welcome">DESARROLLO WEB, VENTAS EN LÍNEA Y SISTEMAS PARA NEGOCIOS.</p>
          <p className="hero-contact">
            Si quieres ponerte en contacto conmigo escríbeme a{" "}
            <a href="mailto:cebale4@gmail.com">cebale4@gmail.com</a>
          </p>
          <a href="/CV.pdf" download="Antonio-Alejandro-Ceballos-Rivera-CV.pdf" className="cv-button">Descarga mi CV</a>
          <div className="social-icons">
            <a target="_blank" href="https://www.linkedin.com/in/antonio-alejandro-ceballos-rivera-6a5166375/" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a target="_blank" href="https://github.com/CeAlejandroo" className="social-icon" aria-label="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/cee_alejandro/" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Sobre Mi Section */}
        <section id="sobre-mi" className="section">
          <h2 className="section-title">Sobre Mi</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                ¡Hola! Soy <strong>Antonio Alejandro</strong>, Ingeniero en Sistemas Computacionales y desarrollador web Full Stack. Me enfoco en crear plataformas para negocios y experiencias de comercio electrónico que faciliten las ventas en línea.
              </p>
              <p>
                Tengo experiencia diseñando e implementando soluciones de <strong>Frontend y Backend</strong>, integrando APIs y sistemas de gestión. Mi stack incluye <strong>JavaScript, TypeScript, React, Next.js, PHP y Laravel</strong>. Busco que cada producto sea responsivo, claro y fácil de usar, tanto para clientes como para quienes administran el negocio.
              </p>
              <p>
                He desarrollado plataformas web para clientes y empresas, además de soluciones de pedidos en línea con gestión de menú y órdenes. Mi experiencia es como <strong>Desarrollador Web Full Stack</strong>, con interés especial en proyectos de e-commerce y transformación digital de negocios.
              </p>
              <p>
                Por motivos de confidencialidad, no puedo compartir públicamente todos los proyectos que he desarrollado para Clever Cloud y Enjambre Digital. En este portafolio presento algunos proyectos cuya publicación está permitida.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/images/foto.jpeg"
                alt="Ceballos Alejandro"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portafolio" className="section">
          <h2 className="section-title">Portafolio</h2>
          <div className="portfolio-grid">
            {/* Proyecto destacado */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="portfolio-card" onClick={() => setOpenModal("foodtruck")}>
                  <div className="portfolio-card-image">
                    <img src="/FoodTruck.png" alt="Aplicación de comida para restaurante" className="card-icon" />
                  </div>
                  <div className="portfolio-card-content">
                    <h3 className="portfolio-card-title">E-commerce y pedidos en línea para restaurante</h3>
                    <p className="portfolio-card-desc">
                      Experiencia de compra web responsiva para realizar pedidos en línea, con gestión de menú y órdenes para el negocio.
                    </p>
                    <div className="portfolio-card-tags">
                      <span className="tag">TypeScript</span>
                      <span className="tag">React</span>
                      <span className="tag">Supabase</span>
                      <span className="tag">CSS</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="dialog-custom">
                <DialogHeader>
                  <DialogTitle className="modal-title">E-commerce y pedidos en línea para restaurante</DialogTitle>
                  <DialogDescription className="modal-subtitle">
                    Aplicación web responsiva para gestionar pedidos de venta en línea de un restaurante local.
                  </DialogDescription>
                </DialogHeader>
                <div className="modal-body">
                  <p>
                    Desarrollé esta aplicación web responsiva para un restaurante local, permitiéndole gestionar sus pedidos de ventas en línea y llevar un seguimiento de los mismos para la satisfacción de sus clientes.
                  </p>
                  <a href="https://github.com/CeAlejandroo/aplicaci-n_comida_food_truck/tree/main" target="_blank" rel="noreferrer" className="btn-github">
                    Ver proyecto en GitHub
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            {/* Malinalli Talent Hub */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="portfolio-card" onClick={() => setOpenModal("malinalli")}>
                  <div className="portfolio-card-image malinalli-preview" aria-label="Malinalli Talent Hub">
                    <div className="malinalli-brand-mark">M</div>
                    <div className="malinalli-brand-copy">
                      <span>Malinalli</span>
                      <small>ELITE RECRUITMENT</small>
                    </div>
                    <div className="malinalli-preview-heading">Encuentra tu próximo desafío</div>
                    <div className="malinalli-preview-caption">Reclutamiento y gestión de talento</div>
                  </div>
                  <div className="portfolio-card-content">
                    <h3 className="portfolio-card-title">Malinalli Talent Hub</h3>
                    <p className="portfolio-card-desc">
                      Plataforma de reclutamiento para gestionar vacantes, candidatos y procesos de selección.
                    </p>
                    <div className="portfolio-card-tags">
                      <span className="tag">React</span>
                      <span className="tag">TypeScript</span>
                      <span className="tag">Tailwind CSS</span>
                      <span className="tag">Supabase</span>
                      <span className="tag">TanStack Start</span>
                      <span className="tag">Vite</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="dialog-custom">
                <DialogHeader>
                  <DialogTitle className="modal-title">Malinalli Talent Hub</DialogTitle>
                  <DialogDescription className="modal-subtitle">
                    Plataforma de reclutamiento para gestionar vacantes, candidatos y procesos de selección.
                  </DialogDescription>
                </DialogHeader>
                <div className="modal-body">
                  <p>
                    Portal de talento con herramientas para administrar vacantes y acompañar procesos de reclutamiento.
                  </p>
                  <a href="https://github.com/CeAlejandroo/malinalli-talent-hub" target="_blank" rel="noreferrer" className="btn-github">
                    Ver proyecto en GitHub
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            {/* CMS de Noticias */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="portfolio-card" onClick={() => setOpenModal("cms-noticias")}>
                  <div className="portfolio-card-image news-cms-preview" aria-label="Panel central CMS de Noticias">
                    <div className="news-cms-sidebar">
                      <strong>Mesa Maestra</strong>
                      <span>▦　Panel</span>
                      <span>▤　Artículos</span>
                      <span>✎　Notas del agente</span>
                      <span>◎　Portales</span>
                    </div>
                    <div className="news-cms-main">
                      <h4>Artículos</h4>
                      <p>Borradores, revisión editorial y publicación en portales.</p>
                      <div className="news-cms-table">
                        <div className="news-cms-table-row">
                          <strong>Notas listas para publicar</strong>
                          <span>Editor</span>
                          <span className="news-cms-status">Revisado</span>
                        </div>
                        <div className="news-cms-table-row">
                          <strong>Contenido optimizado para búsqueda</strong>
                          <span>Agente IA</span>
                          <span className="news-cms-status">Publicado</span>
                        </div>
                        <div className="news-cms-table-row">
                          <strong>Distribución en portales</strong>
                          <span>SEO</span>
                          <span className="news-cms-status">En cola</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-card-content">
                    <h3 className="portfolio-card-title">Mesa Maestra — CMS de Noticias</h3>
                    <p className="portfolio-card-desc">
                      Panel centralizado que coordina la redacción asistida por IA y distribución de noticias a múltiples portales, con revisión humana y seguimiento de métricas SEO.
                    </p>
                    <div className="portfolio-card-tags">
                      <span className="tag">Agente IA</span>
                      <span className="tag">Revisión editorial</span>
                      <span className="tag">Publicación multisitio</span>
                      <span className="tag">Métricas SEO</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="dialog-custom">
                <DialogHeader>
                  <DialogTitle className="modal-title">Mesa Maestra — CMS de Noticias</DialogTitle>
                  <DialogDescription className="modal-subtitle">
                    Panel central para crear, revisar y distribuir contenido editorial en varios portales noticiosos.
                  </DialogDescription>
                </DialogHeader>
                <div className="modal-body">
                  <p>
                    Un agente de IA redacta las notas y prepara su distribución a los portales seleccionados. Antes de publicarse, cada artículo pasa por revisión y aprobación humana. El panel también permite dar seguimiento a métricas SEO y al estado de las publicaciones y sincronizaciones.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            {/* Almuercito escolar */}
            <Dialog> 
              <DialogTrigger asChild>
                <div className="portfolio-card" onClick={() => setOpenModal("almuercito")}>
                  <div className="portfolio-card-image"> <img src="/Almuercito.png" alt="Almuercito escolar" className="card-icon" /></div>
                  <div className="portfolio-card-content">
                    <h3 className="portfolio-card-title">Almuercito escolar</h3>
                    <p className="portfolio-card-desc">
                      Aplicación de comida para estudiantes.
                    </p>
                    <div className="portfolio-card-tags">
                      <span className="tag">Dart</span>
                      <span className="tag">Flutter</span>
                      <span className="tag">Firebase</span>
                      <span className="tag">Provider</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="dialog-custom">
                <DialogHeader>
                  <DialogTitle className="modal-title">Almuercito escolar</DialogTitle>
                  <DialogDescription className="modal-subtitle">
                    Aplicación móvil para ventas de alimentos dentro de campus universitario.
                  </DialogDescription>
                </DialogHeader>

                <div className="modal-body">
                  <p>
                    Desarrollé esta solución integral para optimizar la compr de alimentos entre estudiantes y cafetería dentro del
                    campus universitario, incluyendo funcionalidades como carrito de compras, gestión de inventario y notificaciones en tiempo real para mejorar la experiencia del usuario y la eficiencia operativa.
                  </p>
                  <a href="https://github.com/CeAlejandroo/AlmuercitoEscolar" target="_blank" rel="noreferrer" className="btn-github">
                    Ver proyecto en GitHub
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            {/* Segundo proyecto */}
            <Dialog> 
              <DialogTrigger asChild>
                <div className="portfolio-card" onClick={() => setOpenModal("almuercito")}>
                  <div className="portfolio-card-image"> <img src="/SistemaExperto.png" alt="Sistema experto nutricional" className="card-icon" /></div>
                  <div className="portfolio-card-content">
                    <h3 className="portfolio-card-title">Sistema experto nutricional</h3>
                    <p className="portfolio-card-desc">
                      Sistema experto nutricional para recomendar dietas personalizadas a miembros de Gym.
                    </p>
                    <div className="portfolio-card-tags">
                      <span className="tag">PHP</span>
                      <span className="tag">Python</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">Html y Css</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="dialog-custom">
                <DialogHeader>
                  <DialogTitle className="modal-title">Sistema experto nutricional</DialogTitle>
                  <DialogDescription className="modal-subtitle">
                    Sistema experto nutricional para recomendar dietas personalizadas a miembros de Gym.
                  </DialogDescription>
                </DialogHeader>
                <div className="modal-body">
                  <p>
                    Desarrollé un sistema experto nutricional utilizando PHP para el backend y Python para la lógica de inferencia, con una interfaz frontend en HTML, CSS y JavaScript. El sistema recopila datos de los usuarios, como edad, peso, altura, nivel de actividad física y objetivos de salud, para generar recomendaciones dietéticas personalizadas. Implementé un motor de reglas que evalúa las necesidades nutricionales individuales y sugiere planes de alimentación equilibrados, ayudando a los usuarios a alcanzar sus metas de fitness de manera efectiva.
                  </p>
                  <a href="https://github.com/CeAlejandroo/sistema_nutricional/tree/main" target="_blank" rel="noreferrer" className="btn-github">
                    Ver proyecto en GitHub
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            {/* Gestor de tareas */}
            <Dialog>  
              <DialogTrigger asChild>
                <div className="portfolio-card" onClick={() => setOpenModal("almuercito")}>
                  <div className="portfolio-card-image"> <img src="/GestorTareas.png" alt="Gestor de tareas" className="card-icon" /></div>
                  <div className="portfolio-card-content">
                    <h3 className="portfolio-card-title">Aplicación gestor de tareas</h3>
                    <p className="portfolio-card-desc">
                      Diseño frontend de una aplicación web para gestionar tareas diarias, con funcionalidades de creación, edición y eliminación de tareas, así como la capacidad de marcar tareas como completadas.
                    </p>
                    <div className="portfolio-card-tags">
                      <span className="tag">Next.js</span>
                      <span className="tag">React</span>
                      <span className="tag">Supabase</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="dialog-custom">
                <DialogHeader>
                  <DialogTitle className="modal-title">Gestor de tareas</DialogTitle>
                  <DialogDescription className="modal-subtitle">
                    Diseño frontend de una aplicación web "Gestor de tareas"
                  </DialogDescription>
                </DialogHeader>

                <div className="modal-body">
                  <p>
                    Diseño frontend de una aplicación web para gestionar tareas diarias, con funcionalidades de creación, edición y eliminación de tareas, así como la capacidad de marcar tareas como completadas.
                  </p>
                  <a href="https://github.com/CeAlejandroo/GestorTareas" target="_blank" rel="noreferrer" className="btn-github">
                    Ver proyecto en GitHub
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Education Section */}
        <section id="educacion" className="section">
          <h2 className="section-title">Educación</h2>

          <h3 className="education-subtitle">Formación Académica</h3>
          <div className="education-item">
            <span className="education-year">2021 - 2026</span>
            <h3 className="education-title">Ingeniería en Sistemas Computacionales</h3>
            <p className="education-institution">Universidad - Tecnologico de Estudios Superiores de Villa Guerrero</p>
          </div>

          <h3 className="education-subtitle">Certificaciones</h3>
          <p className="certificates-hint">Haz clic en un certificado para verlo</p>
          <div className="certificates-grid">
            <a href="/certificados/desarrollador-frontend.pdf" target="_blank" rel="noopener noreferrer" className="education-item certificate-link">
              <span className="education-year">Mayo 2025</span>
              <h3 className="education-title">Desarrollador Front-end</h3>
              <p className="education-institution">Aprende.org - 96 horas</p>
              <span className="view-certificate">Ver certificado</span>
            </a>
            <a href="/certificados/frontend-beginners.pdf" target="_blank" rel="noopener noreferrer" className="education-item certificate-link">
              <span className="education-year">Octubre 2024</span>
              <h3 className="education-title">Front-end for Beginners</h3>
              <p className="education-institution">SoloLearn - Angular/Google</p>
              <span className="view-certificate">Ver certificado</span>
            </a>
            <a href="/certificados/coding-for-data.pdf" target="_blank" rel="noopener noreferrer" className="education-item certificate-link">
              <span className="education-year">Octubre 2024</span>
              <h3 className="education-title">Coding for Data</h3>
              <p className="education-institution">SoloLearn</p>
              <span className="view-certificate">Ver certificado</span>
            </a>
            <a href="/certificados/cableado-estructurado.pdf" target="_blank" rel="noopener noreferrer" className="education-item certificate-link">
              <span className="education-year">Julio 2024</span>
              <h3 className="education-title">Técnico Instalador de Cableado Estructurado</h3>
              <p className="education-institution">Aprende.org - 60 horas</p>
              <span className="view-certificate">Ver certificado</span>
            </a>
            <a href="/certificados/intro-cpp.pdf" target="_blank" rel="noopener noreferrer" className="education-item certificate-link">
              <span className="education-year">Enero 2024</span>
              <h3 className="education-title">Introduction to C++</h3>
              <p className="education-institution">SoloLearn</p>
              <span className="view-certificate">Ver certificado</span>
            </a>
            <a href="/certificados/cpp-intermediate.pdf" target="_blank" rel="noopener noreferrer" className="education-item certificate-link">
              <span className="education-year">Enero 2024</span>
              <h3 className="education-title">C++ Intermediate</h3>
              <p className="education-institution">SoloLearn</p>
              <span className="view-certificate">Ver certificado</span>
            </a>
            <a href="/certificados/aplicaciones-nube.pdf" target="_blank" rel="noopener noreferrer" className="education-item certificate-link">
              <span className="education-year">Julio 2023</span>
              <h3 className="education-title">Desarrollador de Aplicaciones en la Nube</h3>
              <p className="education-institution">Aprende.org - 75 horas</p>
              <span className="view-certificate">Ver certificado</span>
            </a>
            <a href="/certificados/python-intermediate.pdf" target="_blank" rel="noopener noreferrer" className="education-item certificate-link">
              <span className="education-year">Mayo 2023</span>
              <h3 className="education-title">Python Intermediate</h3>
              <p className="education-institution">SoloLearn</p>
              <span className="view-certificate">Ver certificado</span>
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Desarrollo Web &amp; Frameworks</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#E34F26">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                    </svg>
                  </div>
                  <span className="skill-name">HTML</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#1572B6">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                    </svg>
                  </div>
                  <span className="skill-name">CSS</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#F7DF1E">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                    </svg>
                  </div>
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#61DAFB">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                    </svg>
                  </div>
                  <span className="skill-name">React</span>
                </div>
                {["Next.js", "TypeScript", "PHP (Laravel)", "C# (.NET)", "Tailwind CSS", "WordPress"].map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3>Infraestructura &amp; Soporte</h3>
              <div className="skills-grid">
                {[
                  "Administración de Redes (Switches, Routers, QoS)",
                  "Active Directory",
                  "Diagnóstico de Hardware/Software",
                  "Soporte Técnico Integral",
                ].map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3>Bases de Datos &amp; Cloud</h3>
              <div className="skills-grid">
                {["SQL Server", "PostgreSQL", "MySQL", "Supabase", "MariaDB", "Cloudflare"].map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3>APIs &amp; Herramientas</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#F05032">
                      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                    </svg>
                  </div>
                  <span className="skill-name">Git</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#F24E1E">
                      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.588 4.539zm-.001-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019c1.608 0 3.117-1.389 3.117-3.019v-3.019H8.147zM8.148 8.981c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981H8.148zm-.001-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.147zM15.852 24c-2.476 0-4.49-2.014-4.49-4.49v-4.49h4.49c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019zM15.852 8.981c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019z" />
                    </svg>
                  </div>
                  <span className="skill-name">Figma</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#007ACC">
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                    </svg>
                  </div>
                  <span className="skill-name">VS Code</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#7952B3">
                      <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
                    </svg>
                  </div>
                  <span className="skill-name">Bootstrap</span>
                </div>
                {["APIs RESTful", "Postman (Testing/Docs)", "Agentes de IA / LLMs", "GitHub", "Flutter / Dart", "Docker"].map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section 
        <section id="contacto" className="section">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>¡Hablemos!</h3>
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <span>cebale4@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <span>México</span>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">💼</div>
                <span>Disponible para proyectos</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="tu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" placeholder="Escribe tu mensaje aquí..."></textarea>
              </div>
              <button type="submit" className="submit-button">Enviar Mensaje</button>
            </form>
          </div>
        </section>
        */}
      </main>
    </div>
  )
}

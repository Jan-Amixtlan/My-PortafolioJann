import './About.css'
import { GraduationCap, Award, Calendar, MapPin, User, Code, BookOpen } from 'lucide-react'

const About = () => {
  const education = [
    {
      title: "Ingeniería en Desarrollo y Gestión de Software",
      institution: "Universidad Tecnológica de Xicotepec de Juárez",
      period: "2023 - 2025",
      status: "Titulada",
      // cedula: "87654321", // Reemplaza con tu número de cédula real
      description: "Formación integral en metodologías de desarrollo de software, diseño y optimización de bases de datos, arquitectura de sistemas escalables, y gestión de proyectos tecnológicos con enfoque en soluciones innovadoras."
    },
    {
      title: "T.S.U en Desarrollo de Software Multiplataforma",
      institution: "Universidad Tecnológica de Xicotepec de Juárez",
      period: "2021 - 2023",
      status: "Titulada",
      cedula: "14931907", // Reemplaza con tu número de cédula real
      description: "Formación técnica especializada en desarrollo de aplicaciones multiplataforma, programación web con tecnologías modernas (HTML5, CSS3, JavaScript ES6+, React), metodologías ágiles, control de versiones y desarrollo de proyectos integrales de software."
    }
  ]

  const personalInfo = [
    { icon: User, label: "Nombre", value: "Janeth Amixtla" },
    { icon: MapPin, label: "Ubicación", value: "Huauchinango, Puebla" },
    { icon: Calendar, label: "Experiencia", value: "--" },
    { icon: Code, label: "Especialización", value: "Frontend Development" }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">
          Conoce más sobre mi trayectoria, formación y pasión por el desarrollo
        </p>
        
        <div className="about-content">
          {/* Información Personal */}
          <div className="personal-info-section">
            <div className="info-grid">
              {personalInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="info-item">
                    <div className="info-icon">
                      <IconComponent size={20} />
                    </div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Descripción Personal */}
          <div className="about-description">
            <div className="description-card">
              <h3>Mi Historia</h3>
              <p>
                Soy una desarrolladora frontend apasionada con formación en Ingeniería en Desarrollo y Gestión de Software. 
                Mi viaje en el desarrollo web comenzó durante mis estudios universitarios, donde descubrí mi amor 
                por crear interfaces de usuario intuitivas y atractivas.
              </p>
              <p>
                Me especializo en React, JavaScript y CSS moderno, siempre buscando escribir código limpio, 
                mantenible y eficiente. Mi enfoque se centra en crear experiencias de usuario excepcionales, 
                combinando diseño atractivo con funcionalidad robusta. Tengo experiencia trabajando tanto en 
                proyectos nuevos como en el desarrollo frontend de sitios web existentes. Además, disfruto 
                crear wireframes y prototipos en Figma para visualizar ideas antes de desarrollarlas.
              </p>
              <p>
                Como parte de mi trabajo en la transformación digital de marcas, he desarrollado y mantenido 
                sitios web en WordPress, personalizando experiencias visuales y funcionales desde cero. 
                Utilizo Elementor para crear diseños adaptativos y atractivos, modificando estilos,
                maquetaciones y comportamientos según las necesidades de cada proyecto. Además, he integrado 
                y configurado plugins esenciales como soporte multidioma y conectores de comunicación (WhatsApp), 
                optimizando la interacción con el usuario y ampliando el alcance de cada marca. Mi rol también incluye 
                mantenimiento continuo, asegurando que los sitios estén actualizados, seguros y con un rendimiento óptimo 
                en todo momento.
              </p>
             
              <p>
                Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, contribuyendo a 
                proyectos de código abierto y manteniéndome actualizada con las últimas tendencias del desarrollo web.
              </p>
            </div>
          </div>

          {/* Formación Académica */}
          <div className="education-section">
            <div className="section-header">
              <GraduationCap size={24} />
              <h3>Formación Académica</h3>
            </div>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-marker">
                    <div className="marker-dot"></div>
                    {index < education.length - 1 && <div className="marker-line"></div>}
                  </div>
                  <div className="education-content">
                    <div className="education-header">
                      <h4>{edu.title}</h4>
                      <span className={`education-status ${edu.status.toLowerCase()}`}>
                        {(edu.status === 'Titulada' || edu.status === 'Graduada') ? <Award size={14} /> : <BookOpen size={14} />}
                        {edu.status}
                      </span>
                    </div>
                    <div className="education-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="period">{edu.period}</span>
                      {edu.cedula && (
                        <span className="cedula">Cédula Profesional: {edu.cedula}</span>
                      )}
                    </div>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
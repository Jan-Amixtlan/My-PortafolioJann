import './About.css'
import { GraduationCap, Award, Calendar, MapPin, User, Code, BookOpen } from 'lucide-react'

const About = () => {
  const education = [
    {
      title: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica de Xicotepec",
      period: "2020 - 2024",
      status: "Graduada",
      description: "Especialización en desarrollo de software, bases de datos y arquitectura de sistemas."
    },
    {
      title: "Certificación Frontend Development",
      institution: "FreeCodeCamp",
      period: "2023",
      status: "Completado",
      description: "HTML, CSS, JavaScript, React y proyectos prácticos de desarrollo web."
    },
    {
      title: "Curso React Avanzado",
      institution: "Platzi",
      period: "2023",
      status: "Completado",
      description: "Hooks, Context API, optimización de rendimiento y patrones avanzados."
    }
  ]

  const personalInfo = [
    { icon: User, label: "Nombre", value: "Janeth Amixtla" },
    { icon: MapPin, label: "Ubicación", value: "Xicotepec, Puebla" },
    { icon: Calendar, label: "Experiencia", value: "2+ años" },
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
                Soy una desarrolladora frontend apasionada, graduada en Ingeniería en Sistemas Computacionales. 
                Mi viaje en el desarrollo web comenzó durante mis estudios universitarios, donde descubrí mi amor 
                por crear interfaces de usuario intuitivas y atractivas.
              </p>
              <p>
                Me especializo en React, JavaScript y CSS moderno, siempre buscando escribir código limpio, 
                mantenible y eficiente. Mi enfoque se centra en crear experiencias de usuario excepcionales, 
                combinando diseño atractivo con funcionalidad robusta.
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
                        {edu.status === 'Graduada' ? <Award size={14} /> : <BookOpen size={14} />}
                        {edu.status}
                      </span>
                    </div>
                    <div className="education-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="period">{edu.period}</span>
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
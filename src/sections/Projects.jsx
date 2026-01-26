import './Projects.css'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const nextImage = (projectId, maxImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxImages
    }))
  }

  const prevImage = (projectId, maxImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: prev[projectId] > 0 ? prev[projectId] - 1 : maxImages - 1
    }))
  }

  const projects = [
    {
      id: 1,
      title: 'Sistema de Ventas',
      description: 'Un sistema integral de gestión de ventas, diseñado para empresas que buscan optimizar sus procesos comerciales y maximizar sus resultados de ventas',
      technologies: ['HTML5','React', 'Vite', 'CSS', 'Git', 'Vercel'],
      images: [
        '/758shots_so.png',
        '/502shots_so.png',
        '/263shots_so.png'
      ],
      github: 'https://github.com/Jan-Amixtlan/sistema-ventas/tree/main/sistema-ventas-nuevo',
      demo: 'https://sistema-ventas-self.vercel.app/'
    },
    {
      id: 2,
      title: 'Sistema de Efectos Industriales',
      description: 'Un sistema integral de experiencias visuales interactivas, diseñado para empresas de manufactura que buscan optimizar su presencia digital y maximizar el impacto de su marca industrial.',
      technologies: ['HTML5', 'React', 'CSS', 'Git', 'Vercel'],
      images: [
        '/Osdemscnc.png',
        '/osdemscnc2.png',
        '/osdemscnc3.png'
      ],
      github: 'https://github.com/Jan-Amixtlan/osdemscnc-react/tree/main/osdemscnc-react',
      demo: 'https://www.osdemscnc.com/'
    },
    {
      id: 3,
      title: 'Sistema Odontológico Nieves',
      description: 'Sitio web profesional para consultorio odontológico con diseño moderno y funcional. Incluye información detallada de servicios, especialidades médicas, galería de casos y sistema de contacto para gestión de citas.',
      technologies: ['HTML5', 'React', 'CSS', 'Git','Vercel'],
      images: [
        '/OdontoNieves1.png',
        '/OdontoNieves2.png',
        '/OdontoNieves3.png'
      ],
      github: 'https://github.com/Jan-Amixtlan/odonto-nieves',
      demo: 'https://odonto-nieves.vercel.app/'
    },
    {
      id: 4,
      title: 'Sistema Servicios Reparación de Autos',
      description: 'Sistema integral de servicios para la reparación y mantenimiento de vehículos. Especializados en diagnóstico computarizado, mecánica ligera y pesada, sistema eléctrico, suspensión, frenos y carrocería.',
      technologies: ['HTML5', 'React', 'CSS', 'Git','Vercel'],
      images: [
        '/RefaccionesMoviles.png',
        '/RefaccionesServices.png',
        '/Refacciones.png'
      ],
      github: 'https://github.com/Jan-Amixtlan/Reparacion-de-automoviles',
      demo: 'https://prueba-tecnica-frontend-iota.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">
          Algunos de los proyectos en los que he trabajado recientemente
        </p>
        <div className="projects-grid">
          {projects.map((project) => {
            const currentIndex = currentImageIndex[project.id] || 0
            return (
              <div key={project.id} className="project-card">
                <div className="project-image-carousel">
                  <div className="carousel-container">
                    <img 
                      src={project.images[currentIndex]} 
                      alt={`${project.title} - Vista ${currentIndex + 1}`}
                      className="carousel-image"
                    />
                    <button 
                      className="carousel-btn prev-btn"
                      onClick={() => prevImage(project.id, project.images.length)}
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      className="carousel-btn next-btn"
                      onClick={() => nextImage(project.id, project.images.length)}
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="carousel-indicators">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
                        aria-label={`Ver imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
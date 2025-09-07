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
      title: 'E-commerce Platform',
      description: 'Una plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      images: [
        '/src/assets/images/758shots_so.png',
        '/src/assets/images/502shots_so.png',
        '/src/assets/images/263shots_so.png'
      ],
      github: 'https://github.com/Jan-Amixtlan/sistema-ventas/tree/main/sistema-ventas-nuevo',
      demo: 'https://www.osdemsventas.com/'
    },
    {
      id: 2,
      title: 'App de Tareas',
      description: 'Aplicación de gestión de tareas con filtros, categorías y persistencia de datos.',
      technologies: ['React', 'CSS3', 'JavaScript', 'React Hooks'],
      images: [
        'https://via.placeholder.com/400x250/4a5568/ffffff?text=Task+Board',
        'https://via.placeholder.com/400x250/2d3748/ffffff?text=Categories',
        'https://via.placeholder.com/400x250/718096/ffffff?text=Reminders'
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Aplicación del clima que consume API externa para mostrar pronósticos en tiempo real.',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS3', 'PWA'],
      images: [
        'https://via.placeholder.com/400x250/4a5568/ffffff?text=Current+Weather',
        'https://via.placeholder.com/400x250/2d3748/ffffff?text=7+Day+Forecast',
        'https://via.placeholder.com/400x250/718096/ffffff?text=Weather+Map'
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Personal',
      description: 'Sitio web personal responsive con diseño moderno y animaciones CSS.',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Netlify'],
      images: [
        'https://via.placeholder.com/400x250/4a5568/ffffff?text=Portfolio+Home',
        'https://via.placeholder.com/400x250/2d3748/ffffff?text=Projects+Gallery',
        'https://via.placeholder.com/400x250/718096/ffffff?text=Contact+Form'
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para visualización de datos con gráficos dinámicos y métricas en tiempo real.',
      technologies: ['React', 'Chart.js', 'Firebase', 'CSS Grid'],
      images: [
        'https://via.placeholder.com/400x250/4a5568/ffffff?text=Dashboard+Overview',
        'https://via.placeholder.com/400x250/2d3748/ffffff?text=Analytics+Charts',
        'https://via.placeholder.com/400x250/718096/ffffff?text=Real+Time+Data'
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Social Media Clone',
      description: 'Clon de red social con publicaciones, likes, comentarios y chat en tiempo real.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      images: [
        'https://via.placeholder.com/400x250/4a5568/ffffff?text=News+Feed',
        'https://via.placeholder.com/400x250/2d3748/ffffff?text=Profile+Page',
        'https://via.placeholder.com/400x250/718096/ffffff?text=Real+Time+Chat'
      ],
      github: '#',
      demo: '#'
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
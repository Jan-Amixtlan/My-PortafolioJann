
import { useEffect, useRef } from 'react'
import './SkillsCarousel.css'

function InfiniteCarousel({ skills }) {
  const scrollerRef = useRef(null)

  useEffect(() => {
    if (!scrollerRef.current) return

    // Duplicar los elementos para el loop infinito
    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach(item => {
      const clone = item.cloneNode(true)
      scrollerRef.current?.appendChild(clone)
    })

    // Calcular duración de animación según ancho
    const scrollerWidth = scrollerRef.current.scrollWidth
    const animationDuration = scrollerWidth / 100
    scrollerRef.current.style.setProperty('--animation-duration', `${animationDuration}s`)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-accent/5 py-6 md:py-8 group skills-carousel">
      {/* Gradientes laterales */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      {/* Carrusel */}
      <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]" ref={scrollerRef}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-none flex-col items-center justify-center mx-4 md:mx-8 transition-transform duration-300 hover:scale-110"
          >
            <div className="w-10 h-10 md:w-16 md:h-16 relative">
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-full h-full object-contain ${skill.name === "Expo" ? "dark:brightness-0 dark:invert" : ""}`}
              />
            </div>
            <span className="mt-2 text-xs md:text-sm text-muted-foreground whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" },
        { name: 'CSS3', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg" },
        { name: 'JavaScript', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg" },
        { name: 'React Native', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" },
        { name: 'ReactJS', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Light.svg" },
        { name: 'TailwindCSS', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" },
        { name: 'Bootstrap', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Bootstrap.svg" },
        { name: 'VueJS', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VueJS-Dark.svg" }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'MySQL', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg" },
        { name: 'MongoDB', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg" },
        { name: 'NodeJS', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg" },
        { name: 'Spring', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Spring-Dark.svg" },
        { name: 'FastAPI', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/FastAPI.svg" },
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg" },
        { name: 'GitHub', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg" },
        { name: 'NPM', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: 'Ubuntu', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Ubuntu-Dark.svg" },
        { name: 'Postman', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg" },
        { name: 'VS Code', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VSCode-Dark.svg" },
        { name: 'Android Studio', icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/AndroidStudio-Dark.svg" }
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
  <div>
          <div className="skills-header">
            <h2 className="skills-title">Habilidades</h2>
            <p className="skills-description">
              Tecnologías y herramientas que domino y utilizo en mis proyectos
            </p>
          </div>
          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div key={index} className="skills-category">
                <h3 className="skills-category-title">{category.title}</h3>
                <InfiniteCarousel skills={category.skills} />
              </div>
            ))}
          </div>
  </div>
      </div>
    </section>
  )
}

export default Skills;
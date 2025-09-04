import './Hero.css'
import iconJan from '../assets/iconJan.jpg'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [typedDescription, setTypedDescription] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const descriptionText = 'Especializado en React, JavaScript y CSS. Me encanta aprender nuevas tecnologías y resolver problemas creativos a través del código.'

  useEffect(() => {
    // Esperar 2 segundos antes de iniciar la escritura de la descripción
    const startDelay = setTimeout(() => {
      setShowCursor(true)
      let currentIndex = 0
      
      const typeText = () => {
        if (currentIndex < descriptionText.length) {
          setTypedDescription(descriptionText.slice(0, currentIndex + 1))
          currentIndex++
          setTimeout(typeText, 30) // Velocidad de escritura
        } else {
          setIsTypingComplete(true)
          // Ocultar cursor después de completar
          setTimeout(() => setShowCursor(false), 1000)
        }
      }
      
      typeText()
    }, 2000)

    return () => clearTimeout(startDelay)
  }, [])

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [showCursor])

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            ¡Hola! Soy Janeth Amixtlan <span className="highlight">Developer Jr</span>
          </h1>
          <p className="hero-subtitle">
            Desarrollador Frontend apasionado por crear experiencias web increíbles
          </p>
          <p className="hero-description">
            <span className="typed-text">{typedDescription}</span>
            {!isTypingComplete && (
              <span className={`typing-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
            )}
          </p>
          <div className="hero-social">
            <a href="https://github.com/Jan-Amixtlan" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:janeth@example.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <div className="avatar-placeholder">
              <img src={iconJan} alt="Developer" className="avatar-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
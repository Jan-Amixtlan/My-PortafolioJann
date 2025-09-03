import ThemeToggle from './ThemeToggle'
import './Header.css'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Cerrar menú móvil al hacer clic
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <h2>Janeth A.</h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="navbar desktop-nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <button onClick={() => scrollToSection('hero')} className="nav-link">
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('about')} className="nav-link">
                Sobre mí
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Proyectos
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('skills')} className="nav-link">
                Habilidades
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contacto
              </button>
            </li>
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Controls */}
        <div className="mobile-controls">
          <ThemeToggle />
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item">
              <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">
                Inicio
              </button>
            </li>
            <li className="mobile-nav-item">
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
                Sobre mí
              </button>
            </li>
            <li className="mobile-nav-item">
              <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">
                Proyectos
              </button>
            </li>
            <li className="mobile-nav-item">
              <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">
                Habilidades
              </button>
            </li>
            <li className="mobile-nav-item">
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
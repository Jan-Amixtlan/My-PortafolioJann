import './Contact.css'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'janeth.amixtla@email.com',
      link: 'mailto:janeth.amixtla@email.com',
      color: '#ea4335'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '/in/janeth-amixtla',
      link: 'https://linkedin.com/in/janeth-amixtla',
      color: '#0077b5'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '/Jan-Amixtlan',
      link: 'https://github.com/Jan-Amixtlan',
      color: '#333'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Xicotepec, Puebla',
      link: null,
      color: '#34a853'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="contact-content">
          <div className="contact-intro">
            <h3>¡Conectemos y colaboremos juntos!</h3>
            <p>
              Estoy siempre abierta a nuevas oportunidades, proyectos interesantes y colaboraciones. 
              Si tienes una idea innovadora o simplemente quieres charlar sobre desarrollo web, 
              no dudes en contactarme a través de cualquiera de estos medios.
            </p>
          </div>
          
          <div className="contact-grid">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <div key={index} className="contact-card">
                  <div className="contact-icon-wrapper" style={{ color: contact.color }}>
                    <IconComponent size={32} />
                  </div>
                  <div className="contact-info-content">
                    <h4>{contact.title}</h4>
                    {contact.link ? (
                      <a href={contact.link} target="_blank" rel="noopener noreferrer">
                        {contact.value}
                      </a>
                    ) : (
                      <span>{contact.value}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
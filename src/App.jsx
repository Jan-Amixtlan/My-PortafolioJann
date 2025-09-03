import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
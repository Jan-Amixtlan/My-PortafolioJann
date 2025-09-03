import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isDark ? (
            <span className="toggle-icon moon">
              {/* Moon SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path></svg>
            </span>
          ) : (
            <span className="toggle-icon sun">
              {/* Sun SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>
            </span>
          )}
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle
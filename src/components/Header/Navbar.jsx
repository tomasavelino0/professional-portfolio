import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  FiMoon as Moon,
  FiSun as Sun,
} from 'react-icons/fi'

const Navbar = ({ inMenu, toggleMenu }) => {
  const [theme, setTheme] = useState('light')

  function toggleDark(themeStr) {
    const root = document.getElementById('theme-root')

    root.classList.toggle('theme--default')
    root.classList.toggle('theme--dark')

    setTheme(themeStr)
  }

  function handleClick({ target }) {
    if (inMenu || target.classList.contains('Button')) {
      toggleMenu()
    } else {
      const links = Array.from(document.getElementsByClassName('Link'))
      links.forEach((link) => link.classList.remove('Selected'))
      target.classList.add('Selected')
    }
  }

  return (
    <nav className="Navbar">
      <a
        href="#about"
        className="Link"
        onClick={(evt) => handleClick(evt)}
      >
        Sobre
      </a>

      <a
        href="#skills"
        className="Link"
        onClick={(evt) => handleClick(evt)}
      >
        Habilidades
      </a>

      <a
        href="#services"
        className="Link"
        onClick={(evt) => handleClick(evt)}
      >
        Serviços
      </a>

      <a
        href="#portfolio"
        className="Link"
        onClick={(evt) => handleClick(evt)}
      >
        Projetos
      </a>

      {
        inMenu || (
          <button className="Icon ThemeBtn">
            {theme === 'light' ? (
              <Moon onClick={() => toggleDark('dark')} />
            ) : (
              <Sun onClick={() => toggleDark('light')} />
            )}
          </button>
        )
      }

      <a
        href="#contact"
        className={inMenu ? 'Link' : 'Button'}
        onClick={(evt) => handleClick(evt)}
      >
        Contato
      </a>

      {
        inMenu && (
          <>
            <span className="Divider" />

            <div className="Switch--Container">
              <span className="Label">Modo Escuro</span>

              <label className="Switch">
                <input
                  className="Checkbox"
                  type="checkbox"
                  onClick={() => toggleDark('dark')}
                />
                <span className="Slider" />
              </label>
            </div>
          </>
        )
      }
    </nav>
  )
}

Navbar.propTypes = {
    inMenu: PropTypes.bool,
    toggleMenu: PropTypes.func.isRequired,
}

export default Navbar
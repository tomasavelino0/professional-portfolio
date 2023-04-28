import '../../styles/_footer.scss'

import {
  FiGithub as Github,
  FiLinkedin as LinkedIn,
} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id="footer" className="Footer">
      <div className="Content--Container">
        <div className="Container">
          <h1 className="Title">Tomas</h1>
          <span className="Subtitle">Desenvolvedor Full-Stack</span>
        </div>

        <div className="Social">
          <a href="https://www.linkedin.com/in/tomas-avelino-6b1547238/" target="_blank" rel="noreferrer">
            <LinkedIn className="Icon" />
          </a>
          <a href="https://github.com/tomasavelino0" target="_blank" rel="noreferrer">
            <Github className="Icon" />
          </a>
        </div>
      </div>
      <div className="Copyright--Container">
        <span className="Copyright">Tomas Avelino 2023 ©</span>
      </div>
    </footer>
  )
}

export default Footer
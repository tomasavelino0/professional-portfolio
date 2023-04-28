import {
  FiGithub as Github,
  FiLinkedin as LinkedIn,
} from 'react-icons/fi'

const Socials = () => {
  return (
    <div className="Social" style={{marginLeft: "3rem"}}>
      <a href="https://github.com/tomasavelino0" target="_blank" rel="noreferrer">
        <Github className="Icon" />
      </a>
      <a href="https://www.linkedin.com/in/tomas-avelino-6b1547238/" target="_blank" rel="noreferrer">
        <LinkedIn className="Icon" />
      </a>
    </div>
  )
}

export default Socials
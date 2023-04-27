import '../../styles/_skills.scss'

import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  
  return (
    <section id="skills" className="Skills">
      <h1 className="Heading">Habilidades</h1>
      <div className="Dropdown--Container">
        <Frontend />
        <Backend/>
      </div>
    </section>
  )
}

export default Skills
import PropTypes from 'prop-types'


const Skill = ({ key, name }) => {
  return (
    <li key={ key } className="Skill">
      <div className="Container">
        <span>{ name }</span>
      </div>
    </li>
  )
}

Skill.propTypes = {
  key: PropTypes.func,
  name: PropTypes.string.isRequired,
}


export default Skill
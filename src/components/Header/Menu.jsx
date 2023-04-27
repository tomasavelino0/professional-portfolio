import Navbar from './Navbar'
import PropTypes from 'prop-types'

const Menu = ({ toggleMenu }) => {
  return (
    <div className="Menu">
      <Navbar inMenu toggleMenu={toggleMenu} />
    </div>
  )
}

Menu.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
}

export default Menu
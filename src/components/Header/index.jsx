import  { useState } from 'react'
import '../../styles/_header.scss'

import Navbar from './Navbar'
import Menu from './Menu'
import Socials from '../Socials'

import {
  FiMenu as MenuIcon,
  FiX as XIcon,
} from 'react-icons/fi'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <header className="Header">
      <h1 className="Title">Tomas</h1>
      <Socials />
    
      <Navbar toggleMenu={toggleMenu}/>

      <button
        id="menu-btn"
        className="MenuBtn Icon"
        onClick={() => toggleMenu()}
      >
        {
          showMenu ? <XIcon /> : <MenuIcon />
        }
      </button>

      {
        showMenu && <Menu toggleMenu={toggleMenu} />
      }
    </header>
  )
}

export default Header
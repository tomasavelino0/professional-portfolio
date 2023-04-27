import  { useState } from 'react'
import { BiCodeCurly as FrontIcon } from 'react-icons/bi'

import {
  RiArrowUpSLine as ArrowUp,
  RiArrowDownSLine as ArrowDown,
} from 'react-icons/ri'

import { v4 as uuid } from 'uuid'
import Skill from './Skill'
import { skillsFront } from './listSkills'

const Frontend = () => {
  const [dropDown, setDropDown] = useState(false);
  const [arrow, setArrow] = useState(false);


  const handleDropdown = () => {
    setDropDown(!dropDown)
    setArrow(!arrow)
  };

  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <FrontIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">Desenvolvimento Front-End</h2>
          <a
            href="https://www.credential.net/fee78a5c-6fd1-47d0-92fb-0984a73adcf8#gs.wii108"
            target="_blank"
            className="Link" rel="noreferrer"
          >
            Ver Credencial
          </a>
        </div>
        <button
          className="Button"
          onClick={() => handleDropdown()}
        >
          {arrow ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>

      <ul id="fe-list" className={dropDown ? "DropdownList" : "DropdownList Hidden"}>
        {
          skillsFront.map(({ skillName }) => (
            <Skill
              key={ uuid() }
              name={ skillName }
            />
          ))
        }
      </ul>
    </div>
  )
}

export default Frontend
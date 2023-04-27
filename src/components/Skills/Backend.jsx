import  { useState } from 'react'
import { BiServer as BackIcon } from 'react-icons/bi'

import {
  RiArrowUpSLine as ArrowUp,
  RiArrowDownSLine as ArrowDown,
} from 'react-icons/ri'

import Skill from './Skill'
import { v4 as uuid } from 'uuid'

import {skillsBack} from './listSkills'


const Backend = () => {
  const [dropDown, setDropDown] = useState(false);
  const [arrow, setArrow] = useState(false);

  const handleDropdown = () => {
    setDropDown(!dropDown)
    setArrow(!arrow)
  };

  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <BackIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">Desenvolvimento Back-End</h2>
          <a
            href="https://www.credential.net/3fade8c8-6e1a-4082-b6fe-3d9194e53642#gs.wii2vh"
            target="_blank"
            className="Link" rel="noreferrer"
          >
            Ver Credencial
          </a>
        </div>
        <button
          className="Button"
          onClick={() => handleDropdown('be')}
        >
          {arrow ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>

      <ul id="be-list" className={dropDown ? "DropdownList" : "DropdownList Hidden"}>
        {
          skillsBack.map(({ skillName }) => (
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

export default Backend
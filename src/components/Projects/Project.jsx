import { useState, useEffect } from 'react'
import Card from './Card'

import {
  RiArrowLeftSLine as ArrowLeft,
  RiArrowRightSLine as ArrowRight,
} from 'react-icons/ri'

import { getRepos, defaultValue } from '../../utils/apiGithub'


const Project = () => {
  const [repos, setRepos] = useState(defaultValue)

  useEffect(() => {
    async function fetchData() {
        const data = await getRepos();
        setRepos(data);
    } 
    fetchData();
  }, [])

  const handleClick = (reverse) => {
    let updated = repos.slice()

    if (reverse) updated.unshift(updated.pop())
    else updated.push(updated.shift())

    setRepos(updated)
  }

  return (
    <div className="Slide">
      <button
        id="btn-back"
        className="Button"
        onClick={() => handleClick(true)}
      >
        <ArrowLeft className="Icon" />
      </button>
      <div className="Cards--Container">
        {
          repos.map((repo, index) => {
            if ([0, 2].includes(index)) {
              return (
                <Card
                  key={repo.name}
                  repo={repo}
                  classlist={['Card', 'Visible']}
                />
              )
            } else if (index == 1) {
              return (
                <Card
                  key={repo.name}
                  repo={repo}
                  classlist={['Card', 'Visible', 'Center']}
                />
              )
            } else {
              return (
                <Card
                  key={repo.name}
                  repo={repo}
                  classlist={['Card']}
                />
              )
            }
          })
        }
      </div>
      <button
        id="btn-forward"
        className="Button"
        onClick={() => handleClick(false)}
      >
        <ArrowRight className="Icon" />
      </button>
    </div>
  )
}

export default Project
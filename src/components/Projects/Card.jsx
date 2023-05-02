import PropTypes from 'prop-types'

import { RiMedal2Line as Award } from 'react-icons/ri'

const Card = ({ repo, classlist }) => {
  const {
    name,
    language,
    description,
    topics,
    html_url,
  } = repo

  const topQuality = [
    'App-Receitas',
    'Trivia-Game',
    'Blogs-API',
  ]

  const isLanguage = (topic) => {
    if (language) {
      if (topic === language.toLowerCase()) {
        return 'Language'
      }
    }
  }

  return (
    <div className={classlist.map((c) => c).join(' ')}>
      <h1 className="RepoName">{name}</h1>
      <div className="Topics--Container">
        {
          topics.map((topic, index) => {
            if (index < 3) {
              return (
                <span
                  key={index}
                  className={`Topic ${isLanguage(topic)}`}
                >
                  {topic}
                </span>
              )
            }
          })
        }
      </div>
      <p className="RepoDescription">{description}</p>

      <a
        href={html_url}
        target="_blank"
        className="RepoBtn" rel="noreferrer"
      >
        Ir ao repositório
      </a>

      {
        topQuality.includes(name) && (
          <Award className="Icon" />
        )
      }
    </div>
  )
}

Card.propTypes = {
  repo: PropTypes.shape({
  name: PropTypes.string,
  language: PropTypes.string,
  description: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string),
  html_url: PropTypes.string,
  }).isRequired,
  classlist: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Card;
import axios from 'axios'

const excludeList = [
  'tomasavelino0',
  'CS-Exercises-Trybe',
  'app-receitas',
  'car-shop-mongoDb',
  'CS-exercises-trybe',
  'mongodb-commerce',
  'normalization-mysql',
  'React-hooks-context',
  'shopping-cart-vanillaJs',
  'trybe-backend--exercises',
  'trybe-exercicios',
  'Querys-Mysql',
  'ReactTunes',
  'store-manager',
]


const prettify = (nameStr) => {
  const removeHyphen = nameStr.replace(/-/g, ' ')
  const wordsArr = removeHyphen.split(' ')

  for (let i = 0; i < wordsArr.length; i += 1) {
    wordsArr[i] =
      wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
  }

  const formattedName = wordsArr.join(' ')
  return formattedName.trim()
}

const getRepos = async () => {
  const url = 'https://api.github.com/users/tomasavelino0/repos'
  const response = await axios.get(url)
  const data = response.data

  return data
      .filter((({ name, fork }) => (
        !excludeList.includes(name) && !fork
      )))
      .map(((
        {
          name,
          language,
          description,
          topics,
          html_url,
        }
      ) => (
        {
          name: prettify(name),
          language,
          description,
          topics,
          html_url,
        }
      )))
}

const defaultValue = [
  {
    name: '',
    language: '',
    description: '',
    topics: [''],
    html_url: '',
  },
]

export { defaultValue, getRepos }
import { URL_TABLE } from '../env'

// const service = (idPage) => {
//   return await fetch(URL_TABLE + idPage)
// }

const requestToServer = (idPage) => {
  let response = await fetch(`https://swapi.dev/api/people/?page=${idPage}`)

  if (response.ok) {
    let json = await response.json()
    return json
  } else {
    return 'Ошибка'
  }
}

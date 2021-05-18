import { URL_TABLE } from '../env'

// const service = (idPage) => {
//   return await fetch(URL_TABLE + idPage)
// }

const getToServer = async (idPage: number) => {
  return Promise.race([
    new Promise((_, reject) => {
      setTimeout(() => {
        reject('Error')
      }, 5000)
    }),
    await (await fetch(`${URL_TABLE}${idPage}`)).json(),
  ])
}

export { getToServer }

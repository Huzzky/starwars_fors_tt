import { URL_TABLE } from '../env'

const getToServer = async (nameFromUser: string, idPage: number) => {
  return Promise.race([
    new Promise((_, reject) => {
      setTimeout(() => {
        reject('Error connection')
      }, 10000)
    }),
    await (await fetch(`${URL_TABLE}${nameFromUser}&page=${idPage}`)).json(),
  ])
}
export { getToServer }

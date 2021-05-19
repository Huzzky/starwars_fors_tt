import {
  REQUEST_TO_SERVER_FROM_DATA,
  SUCCESS_TO_SERVER_FROM_DATA,
  ERROR_TO_SERVER_FROM_DATA,
} from '../../const'
import { getToServer } from '../../utils/request'

const requestToServerWithData = (pageId: number) => {
  return (dispatch: any) => {
    dispatch({
      type: REQUEST_TO_SERVER_FROM_DATA,
    })

    getToServer(pageId)
      .then((response) => {
        try {
          console.log(response)
          dispatch({
            type: SUCCESS_TO_SERVER_FROM_DATA,
            data: response.results,
            pagination: [response.next, response.previous],
          })
        } catch {
          dispatch({
            type: SUCCESS_TO_SERVER_FROM_DATA,
            data: [],
          })
        }
      })
      .catch((_) => {
        dispatch({
          type: ERROR_TO_SERVER_FROM_DATA,
        })
      })
  }
}

export { requestToServerWithData }

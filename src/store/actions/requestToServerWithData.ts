import {
  REQUEST_TO_SERVER_FROM_DATA,
  SUCCESS_TO_SERVER_FROM_DATA,
  ERROR_TO_SERVER_FROM_DATA,
} from '../../const'
import { getToServer } from '../../api/request'

const requestToServerWithData = (nameFromUser: string, pageId: number) => {
  return (dispatch: Function) => {
    dispatch({
      type: REQUEST_TO_SERVER_FROM_DATA,
    })

    getToServer(nameFromUser, pageId)
      .then((response) => {
        if (!response.hasOwnProperty('detail')) {
          if (response.count === 0) {
            dispatch({
              type: SUCCESS_TO_SERVER_FROM_DATA,
              data: [{ error: 'None similar to your request' }],
              pagination: [response.previous, response.next],
              pageId: 1,
            })
          } else {
            dispatch({
              type: SUCCESS_TO_SERVER_FROM_DATA,
              data: response.results,
              pagination: [response.previous, response.next],
              pageId: pageId,
            })
          }
        } else {
          dispatch({
            type: ERROR_TO_SERVER_FROM_DATA,
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

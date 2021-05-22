import { USER_RECORD_NAME_FOR_SEARCH } from '../../const'

const userRecordNameForSearch = (nameFromUser: string) => {
  return (dispatch: Function) => {
    dispatch({
      type: USER_RECORD_NAME_FOR_SEARCH,
      name: nameFromUser,
    })
  }
}

export { userRecordNameForSearch }

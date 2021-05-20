import { USER_RECORD_NAME_FOR_SEARCH } from '../../const'

const userRecordNameForSearch = (nameFromUser: string) => {
  return (dispatch: any) => {
    dispatch({
      type: USER_RECORD_NAME_FOR_SEARCH,
      name: nameFromUser,
    })
  }
}

export { userRecordNameForSearch }

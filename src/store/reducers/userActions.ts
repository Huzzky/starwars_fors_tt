import { USER_RECORD_NAME_FOR_SEARCH } from '../../const'

const initialState = {
  nameFromUser: '',
}

export const userActions = (
  state = initialState,
  {
    type,
    name,
  }: {
    type: string
    name: string
  },
) => {
  switch (type) {
    case USER_RECORD_NAME_FOR_SEARCH:
      return {
        ...state,
        nameFromUser: name,
      }
    default:
      return state
  }
}

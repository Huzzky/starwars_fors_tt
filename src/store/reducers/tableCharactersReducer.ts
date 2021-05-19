import {
  ERROR_TO_SERVER_FROM_DATA,
  REQUEST_TO_SERVER_FROM_DATA,
  SUCCESS_TO_SERVER_FROM_DATA,
} from '../../const'

const initialState = {
  dataOfTable: [],
  pagination: [],
  isLoading: false,
  isError: false,
}

export const tableCharactersReducer = (
  state = initialState,
  {
    type,
    data,
    pagination,
  }: { type: string; data: any[]; pagination: (string | null)[] },
) => {
  switch (type) {
    case REQUEST_TO_SERVER_FROM_DATA:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS_TO_SERVER_FROM_DATA:
      return {
        ...state,
        dataOfTable: data,
        pagination: pagination,
        isLoading: false,
        isError: false,
      }
    case ERROR_TO_SERVER_FROM_DATA:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

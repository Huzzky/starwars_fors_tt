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
  pageId: 1,
}

export const tableCharactersReducer = (
  state = initialState,
  {
    type,
    data,
    pagination,
    pageId,
  }: {
    type: string
    data: any[]
    pagination: (string | null)[]
    pageId: number
  },
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
        pageId: pageId,
      }
    case ERROR_TO_SERVER_FROM_DATA:
      return {
        ...state,
        dataOfTable: [],
        pagination: [],
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

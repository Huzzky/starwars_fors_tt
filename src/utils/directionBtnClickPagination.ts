import { paginationVariable } from '../const'

const directionBtnClickPagination = (
  pageId: number,
  func: any,
  pagination: null | string,
  direction: string,
) => {
  if (direction === paginationVariable[0]) {
    if (pagination !== null) {
      pageId++
      func(pageId)
    }
  } else {
    if (pagination !== null) {
      pageId--
      func(pageId)
    }
  }
}

export { directionBtnClickPagination }

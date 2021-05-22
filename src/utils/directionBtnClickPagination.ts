import { paginationVariable } from '../const'

const directionBtnClickPagination = (
  pageId: number,
  func: Function,
  pagination: null | string,
  direction: string,
  name: string,
) => {
  if (direction === paginationVariable[1]) {
    if (pagination !== null) {
      pageId++
      func(name, pageId)
    }
  } else {
    if (pagination !== null) {
      pageId--
      func(name, pageId)
    }
  }
}

export { directionBtnClickPagination }

const determinateDisableBtnPagination = (
  typePagination: string | null,
  isLoading: boolean,
  isError: boolean,
) => {
  if (isLoading || isError) {
    return true
  } else {
    if (typeof typePagination === 'object') {
      return true
    } else if (typeof typePagination === 'string') {
      return false
    }
  }
}

export { determinateDisableBtnPagination }

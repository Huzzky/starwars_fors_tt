const determinatePagination = (
  determinateWithDataPagination: string | null,
  isLoading: boolean,
  isError: boolean,
) => {
  if (isLoading || isError) {
    return true
  } else {
    if (typeof determinateWithDataPagination === 'object') {
      return true
    } else if (typeof determinateWithDataPagination === 'string') {
      return false
    }
  }
}

export { determinatePagination }

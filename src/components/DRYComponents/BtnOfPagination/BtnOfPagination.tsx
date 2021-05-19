import { memo } from 'react'
import { connect } from 'react-redux'
import { paginationVariable } from '../../../const'
import { requestToServerWithData } from '../../../store/actions/requestToServerWithData'
import { determinatePagination } from '../../../utils/determinateWithDataPagination'

const BtnOfPagination = ({
  typeBtnPagination,
  pagination,
  isLoading,
  isError,
  getToServerFromData,
  pageId,
}: {
  isLoading: boolean
  isError: boolean
  typeBtnPagination: string
  pagination: (string | null)[]
  getToServerFromData: any
  pageId: number
}) => {
  const prevPageClick = (
    pageId: number,
    func: any,
    pagination: null | string,
  ) => {
    if (pagination !== null) {
      pageId--
      func(pageId)
    }
  }
  const nextPageClick = (
    pageId: number,
    func: any,
    pagination: null | string,
  ) => {
    if (pagination !== null) {
      pageId++
      func(pageId)
    }
  }
  console.log(typeof pagination[1])
  return typeBtnPagination !== paginationVariable[0] ? (
    <button
      onClick={() => nextPageClick(pageId, getToServerFromData, pagination[0])}
      disabled={determinatePagination(pagination[0], isLoading, isError)}
    >
      {'>'}
    </button>
  ) : (
    <button
      onClick={() => prevPageClick(pageId, getToServerFromData, pagination[1])}
      disabled={determinatePagination(pagination[1], isLoading, isError)}
    >
      {'<'}
    </button>
  )
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  pagination: tableCharactersReducer.pagination,
  isLoading: tableCharactersReducer.isLoading,
  isError: tableCharactersReducer.isLoading,
  pageId: tableCharactersReducer.pageId,
})

const mapDispatchToProps = (dispatch: any) => ({
  getToServerFromData: (pageId: number) =>
    dispatch(requestToServerWithData(pageId)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(BtnOfPagination),
)

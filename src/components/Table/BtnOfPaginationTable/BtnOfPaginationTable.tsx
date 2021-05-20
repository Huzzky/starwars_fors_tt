import { memo } from 'react'
import { connect } from 'react-redux'
import { paginationVariable } from '../../../const'
import { requestToServerWithData } from '../../../store/actions/requestToServerWithData'
import { determinateDisableBtnPagination } from '../../../utils/determinateDisableBtnPagination'
import { directionBtnClickPagination } from '../../../utils/directionBtnClickPagination'

const BtnOfPaginationTable = ({
  pagination,
  isLoading,
  isError,
  getToServerFromData,
  pageId,
}: {
  isLoading: boolean
  isError: boolean
  pagination: (string | null)[]
  getToServerFromData: any
  pageId: number
}) => {
  const btnOfPaginationVariable = paginationVariable.map((value, index) => {
    return (
      <button
        key={index}
        onClick={() =>
          directionBtnClickPagination(
            pageId,
            getToServerFromData,
            pagination[index],
            value,
          )
        }
        disabled={determinateDisableBtnPagination(
          pagination[index],
          isLoading,
          isError,
        )}
      >
        {value === 'next' ? '>' : '<'}
      </button>
    )
  })

  return <div>{btnOfPaginationVariable}</div>
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  pagination: tableCharactersReducer.pagination,
  isLoading: tableCharactersReducer.isLoading,
  isError: tableCharactersReducer.isError,
  pageId: tableCharactersReducer.pageId,
})

const mapDispatchToProps = (dispatch: any) => ({
  getToServerFromData: (pageId: number) =>
    dispatch(requestToServerWithData(pageId)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(BtnOfPaginationTable),
)

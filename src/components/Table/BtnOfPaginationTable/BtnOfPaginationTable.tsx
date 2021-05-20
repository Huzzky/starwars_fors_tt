import { memo } from 'react'
import { connect } from 'react-redux'
import { paginationVariable } from '../../../const'
import { requestToServerWithData } from '../../../store/actions/requestToServerWithData'
import { determinateDisableBtnPagination } from '../../../utils/determinateDisableBtnPagination'
import { directionBtnClickPagination } from '../../../utils/directionBtnClickPagination'

type BtnOfPaginationTableProps = {
  isLoading: boolean
  isError: boolean
  pagination: (string | null)[]
  getToServerFromData: any
  pageId: number
  name: string
}

const BtnOfPaginationTable = ({
  pagination,
  isLoading,
  isError,
  getToServerFromData,
  pageId,
  name,
}: BtnOfPaginationTableProps) => {
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
            name,
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
  userActions,
}: {
  tableCharactersReducer: any
  userActions: any
}) => ({
  name: userActions.nameFromUser,
  pagination: tableCharactersReducer.pagination,
  isLoading: tableCharactersReducer.isLoading,
  isError: tableCharactersReducer.isError,
  pageId: tableCharactersReducer.pageId,
})

const mapDispatchToProps = (dispatch: any) => ({
  getToServerFromData: (nameFromUser: string, pageId: number) =>
    dispatch(requestToServerWithData(nameFromUser, pageId)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(BtnOfPaginationTable),
)

import { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { TablePage } from '../TablePage/index'
import { requestToServerWithData } from '../../../store/actions/requestToServerWithData'

const TablePageLoader = ({
  isLoading,
  data,
  isError,
  getToServerFromData,
}: {
  isLoading: boolean
  isError: boolean
  data: any[]
  getToServerFromData: any
}) => {
  useEffect(() => {
    if (data.length === 0 && !isLoading && !isError) getToServerFromData(1)
  })

  return isLoading ? (
    <h1>Загрузка</h1>
  ) : isError ? (
    <h1>Ошибка</h1>
  ) : (
    <TablePage />
  )
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  isLoading: tableCharactersReducer.isLoading,
  isError: tableCharactersReducer.isError,
  data: tableCharactersReducer.dataOfTable,
})

const mapDispatchToProps = (dispatch: any) => ({
  getToServerFromData: (pageId: number) =>
    dispatch(requestToServerWithData(pageId)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(TablePageLoader),
)

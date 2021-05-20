import { memo, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { requestToServerWithData } from '../../../store/actions/requestToServerWithData'
import { TableWithRows } from '../Row/TableWithRows'

type TablePageLoaderProps = {
  isLoading: boolean
  isError: boolean
  data: any[]
  getToServerFromData: any
}
const TablePageLoader = ({
  isLoading,
  data,
  isError,
  getToServerFromData,
}: TablePageLoaderProps) => {
  useLayoutEffect(() => {
    if (data.length === 0 && !isLoading && !isError) getToServerFromData('', 1)
  })

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h1>Bad connection with server. Reload page, please.</h1>
  ) : (
    <div>
      <TableWithRows />
    </div>
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
  getToServerFromData: (name: string, pageId: number) =>
    dispatch(requestToServerWithData(name, pageId)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(TablePageLoader),
)

import { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import TableWithRows from './TableWithRows'
import { requestToServerWithData } from '../../store/actions/requestToServerWithData'

const TablePage = ({
  isLoading,
  data,
  getToServerFromData,
}: {
  isLoading: boolean
  getToServerFromData: any
  data: any[]
}) => {
  useEffect(() => {
    if (data.length === 0 && !isLoading) getToServerFromData(1)
  })

  return isLoading ? <h1>Загрузка</h1> : <TableWithRows />
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  isLoading: tableCharactersReducer.isLoading,
  data: tableCharactersReducer.dataOfTable,
})

const mapDispatchToProps = (dispatch: any) => ({
  getToServerFromData: (pageId: number) =>
    dispatch(requestToServerWithData(pageId)),
})

export default memo(connect(mapStateToProps, mapDispatchToProps)(TablePage))

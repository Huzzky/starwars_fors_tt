import { memo, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { requestToServerWithData } from '../../../store/actions/requestToServerWithData'
import { TableWithRows } from '../Row/TableWithRows'
import styles from './_TablePageLoader.module.css'

type TablePageLoaderProps = {
  isLoading: boolean
  isError: boolean
  data: object[]
  getToServerFromData: Function
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
    <p className={styles['table-page__p-loader']}>Loading...</p>
  ) : isError ? (
    <p className={styles['table-page__p-loader']}>
      Bad connection with server. Reload page, please.
    </p>
  ) : (
    <div className={styles['table-page__container-rows']}>
      <TableWithRows />
    </div>
  )
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: {
    isLoading: boolean
    isError: boolean
    dataOfTable: object[]
  }
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

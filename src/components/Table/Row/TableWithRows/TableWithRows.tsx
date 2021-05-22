import { memo } from 'react'
import { connect } from 'react-redux'
import { NameRowInTable } from '../NameRowInTable'
import { RowInTable } from '../RowInTable/index'
import styles from './_TableWithRows.module.css'

type TableWithRowsProps = {
  data: {
    [index: string]: any
  }
}

const TableWithRows = ({ data }: TableWithRowsProps) => {
  const rowsWithDataOfPerson = data.map((value: any, index: number) => {
    if (value.hasOwnProperty('error')) {
      return ''
    } else {
      return <RowInTable key={index} values={value} />
    }
  })
  if (data.length !== 0 && data[0].hasOwnProperty('error')) {
    return <p className={styles['table-page__p-error']}>{data[0].error}.</p>
  } else {
    return (
      <table className={styles['table-page__table']}>
        <NameRowInTable />
        <tbody>{rowsWithDataOfPerson}</tbody>
      </table>
    )
  }
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  data: tableCharactersReducer.dataOfTable,
})

export default memo(connect(mapStateToProps)(TableWithRows))

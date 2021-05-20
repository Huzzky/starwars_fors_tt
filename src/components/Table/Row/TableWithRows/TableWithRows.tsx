import { memo } from 'react'
import { connect } from 'react-redux'
import { NameRowInTable } from '../NameRowInTable'
import { RowInTable } from '../RowInTable/index'

type TableWithRowsProps = {
  data: {
    [index: string]: any
  }
}

const TableWithRows = ({ data }: TableWithRowsProps) => {
  console.log(data)
  const rowsWithDataOfPerson = data.map((value: any, index: number) => {
    if (value.hasOwnProperty('error')) {
      return <></>
    } else {
      return (
        <tbody key={index}>
          <RowInTable values={value} />
        </tbody>
      )
    }
  })
  if (data.length !== 0 && data[0].hasOwnProperty('error')) {
    return <p>{data[0].error}.</p>
  } else {
    return (
      <table>
        <thead>
          <NameRowInTable />
        </thead>
        {rowsWithDataOfPerson}
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

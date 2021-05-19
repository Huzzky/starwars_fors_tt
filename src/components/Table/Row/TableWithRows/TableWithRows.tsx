import { memo } from 'react'
import { connect } from 'react-redux'
import { RowInTable } from '../RowInTable/index'

const TableWithRows = ({ data }: { data: any[] }) => {
  const rowsWithDataOfPerson = data.map((value, index) => {
    return (
      <div key={index} style={{ display: 'flex' }}>
        <RowInTable {...value} />
      </div>
    )
  })
  return <div>{rowsWithDataOfPerson}</div>
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  data: tableCharactersReducer.dataOfTable,
})

export default memo(connect(mapStateToProps)(TableWithRows))

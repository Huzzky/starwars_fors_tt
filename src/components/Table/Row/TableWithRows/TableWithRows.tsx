import { memo } from 'react'
import { connect } from 'react-redux'
import { RowInTable } from '../RowInTable/index'

const TableWithRows = ({ data }: { data: any[] }) => {
  const rowsWithDataOfPerson = data.map((value, index) => {
    return (
      <thead key={index}>
        <RowInTable values={value} />
      </thead>
    )
  })

  return <table>{rowsWithDataOfPerson}</table>
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  data: tableCharactersReducer.dataOfTable,
})

export default memo(connect(mapStateToProps)(TableWithRows))

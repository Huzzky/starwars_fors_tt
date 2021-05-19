import { memo } from 'react'
import { connect } from 'react-redux'

const TableWithRows = ({ data }: { data: any[] }) => {
  return <div>супер</div>
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  data: tableCharactersReducer.dataOfTable,
})

export default memo(connect(mapStateToProps)(TableWithRows))

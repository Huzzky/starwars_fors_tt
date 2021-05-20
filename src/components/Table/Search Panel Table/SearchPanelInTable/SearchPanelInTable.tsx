import { memo } from 'react'
import { connect } from 'react-redux'
import { SearchInputInTable } from '../SearchInputInTable'
import { SearchBtnInTable } from '../SearchBtnInTable'

const SearchPanelInTable = () => {
  return (
    <form>
      <SearchInputInTable />
      <SearchBtnInTable />
    </form>
  )
}

export default memo(connect()(SearchPanelInTable))

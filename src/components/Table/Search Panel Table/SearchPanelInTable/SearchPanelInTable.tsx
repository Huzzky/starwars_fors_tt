import { memo } from 'react'
import { connect } from 'react-redux'
import { SearchInputInTable } from '../SearchInputInTable'
import { SearchBtnInTable } from '../SearchBtnInTable'

const SearchPanelInTable = () => {
  return (
    <div>
      <SearchInputInTable />
      <SearchBtnInTable />
    </div>
  )
}

export default memo(connect()(SearchPanelInTable))

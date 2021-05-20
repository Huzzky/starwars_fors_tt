import { memo } from 'react'
import { connect } from 'react-redux'
import { SearchInputInTable } from '../SearchInputInTable'
import { SearchBtnInTable } from '../SearchBtnInTable'
import './_SearchPanelTable.css'

const SearchPanelInTable = () => {
  return (
    <form className="table-page__form">
      <SearchInputInTable />
      <SearchBtnInTable />
    </form>
  )
}

export default memo(connect()(SearchPanelInTable))

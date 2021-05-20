import { memo } from 'react'
import { connect } from 'react-redux'

const SearchBtnInTable = () => {
  return <button>Search</button>
}

export default memo(connect()(SearchBtnInTable))

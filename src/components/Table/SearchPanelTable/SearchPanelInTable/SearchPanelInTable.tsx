import { memo } from 'react'
import { SearchInputInTable } from '../SearchInputInTable'
import { SearchBtnInTable } from '../SearchBtnInTable'
import styles from './_SearchPanelTable.module.css'

const SearchPanelInTable = () => {
  return (
    <form className={styles['table-page__form']}>
      <SearchInputInTable />
      <SearchBtnInTable />
    </form>
  )
}

export default memo(SearchPanelInTable)

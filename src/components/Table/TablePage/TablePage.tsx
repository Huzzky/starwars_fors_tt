import { memo } from 'react'
import { BtnOfPaginationTable } from '../BtnOfPaginationTable'
import { SearchPanelInTable } from '../SearchPanelTable/SearchPanelInTable'
import { TablePageLoader } from '../TablePageLoader'
import styles from './_TablePage.module.css'

const TablePage = () => {
  return (
    <div className={styles['table-page']}>
      <SearchPanelInTable />
      <TablePageLoader />
      <div className={styles['table-page__btn-pagination-container']}>
        <BtnOfPaginationTable />
      </div>
    </div>
  )
}

export default memo(TablePage)

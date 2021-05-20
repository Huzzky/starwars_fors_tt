import { memo } from 'react'
import { BtnOfPaginationTable } from '../BtnOfPaginationTable'
import { TablePageLoader } from '../TablePageLoader'
import { SearchPanelInTable } from '../Search Panel Table/SearchPanelInTable'
import './_TablePage.css'

const TablePage = () => {
  return (
    <div className="table-page">
      <SearchPanelInTable />
      <TablePageLoader />
      <div className="table-page__btn-pagination-container">
        <BtnOfPaginationTable />
      </div>
    </div>
  )
}

export default memo(TablePage)

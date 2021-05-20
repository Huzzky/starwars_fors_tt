import { memo } from 'react'
import { BtnOfPaginationTable } from '../BtnOfPaginationTable'
import { TablePageLoader } from '../TablePageLoader'
import { SearchPanelInTable } from '../Search Panel Table/SearchPanelInTable'

const TablePage = () => {
  return (
    <div>
      <SearchPanelInTable />
      <TablePageLoader />
      <div style={{ display: 'flex' }}>
        <BtnOfPaginationTable />
      </div>
    </div>
  )
}

export default memo(TablePage)

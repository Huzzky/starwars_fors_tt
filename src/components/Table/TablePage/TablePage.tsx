import { memo } from 'react'
import { BtnOfPagination } from '../../DRYComponents/BtnOfPagination'
import { TablePageLoader } from '../TablePageLoader'

const TablePage = () => {
  return (
    <div>
      <TablePageLoader />
      <div style={{ display: 'flex' }}>
        <BtnOfPagination />
      </div>
    </div>
  )
}

export default memo(TablePage)

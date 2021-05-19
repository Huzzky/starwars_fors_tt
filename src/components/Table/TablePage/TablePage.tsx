import { memo } from 'react'
import { BtnOfPagination } from '../../DRYComponents/BtnOfPagination'
import { paginationVariable } from '../../../const'
import { TablePageLoader } from '../TablePageLoader'

const TablePage = () => {
  const arrayBtnOfPagination = paginationVariable.map((value, index) => {
    return (
      <div key={index}>
        <BtnOfPagination typeBtnPagination={value} />
      </div>
    )
  })
  return (
    <div>
      <TablePageLoader />
      <div style={{ display: 'flex' }}>{arrayBtnOfPagination}</div>
    </div>
  )
}

export default memo(TablePage)

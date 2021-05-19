import { memo } from 'react'
import { connect } from 'react-redux'
import { paginationVariable } from '../../../const'

const BtnOfPagination = ({
  typeBtnPagination,
  pagination,
}: {
  typeBtnPagination: string
  pagination: (string | null)[]
}) => {
  return typeBtnPagination === paginationVariable[0] ? (
    <button disabled={pagination[0] ? true : false}>{'<'}</button>
  ) : (
    <button disabled={pagination[1] ? true : false}>{'>'}</button>
  )
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  pagination: tableCharactersReducer.pagination,
})

export default memo(connect(mapStateToProps)(BtnOfPagination))

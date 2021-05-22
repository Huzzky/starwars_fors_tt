import { memo } from 'react'
import { connect } from 'react-redux'
import { userRecordNameForSearch } from '../../../../store/actions/userRecordNameForSearch'
import styles from './_SearchInputInTable.module.css'

type SearcgInputInTable = {
  recordName: any
  isLoading: boolean
  isError: boolean
}

const SearchInputInTable = ({
  recordName,
  isLoading,
  isError,
}: SearcgInputInTable) => {
  let determinateDisabledInputSearch = () => {
    return isLoading || isError
  }
  return (
    <input
      className={styles['form__search-input']}
      disabled={determinateDisabledInputSearch()}
      onChange={(e) => {
        recordName(e.currentTarget.value)
      }}
    ></input>
  )
}

const mapStateToProps = ({
  tableCharactersReducer,
}: {
  tableCharactersReducer: any
}) => ({
  isLoading: tableCharactersReducer.isLoading,
  isError: tableCharactersReducer.isError,
})

const mapDispatchToProps = (dispatch: any) => ({
  recordName: (name: string) => dispatch(userRecordNameForSearch(name)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(SearchInputInTable),
)

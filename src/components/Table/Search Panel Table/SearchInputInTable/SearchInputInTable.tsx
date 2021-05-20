import { memo } from 'react'
import { connect } from 'react-redux'
import { userRecordNameForSearch } from '../../../../store/actions/userRecordNameForSearch'

const SearchInputInTable = ({
  recordName,
  isLoading,
  isError,
}: {
  recordName: any
  isLoading: boolean
  isError: boolean
}) => {
  let determinateDisabledInputSearch = () => {
    return isLoading || isError
  }
  return (
    <input
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

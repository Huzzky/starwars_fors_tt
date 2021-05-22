import { memo } from 'react'
import { connect } from 'react-redux'
import { requestToServerWithData } from '../../../../store/actions/requestToServerWithData'
import styles from './_SearchBtnTable.module.css'

type SearchBtnInTableProps = {
  name: string
  searchName: any
  isLoading: boolean
  isError: boolean
}

const SearchBtnInTable = ({
  name,
  searchName,
  isLoading,
  isError,
}: SearchBtnInTableProps) => {
  let determinateDisabledBtnSearch = () => {
    return isLoading || isError
  }
  return (
    <button
      className={styles['form__btn-search']}
      disabled={determinateDisabledBtnSearch()}
      onClick={() => {
        searchName(name, 1)
      }}
    >
      Search
    </button>
  )
}

const mapStateToProps = ({
  userActions,
  tableCharactersReducer,
}: {
  userActions: any
  tableCharactersReducer: any
}) => ({
  name: userActions.nameFromUser,
  isLoading: tableCharactersReducer.isLoading,
  isError: tableCharactersReducer.isError,
})

const mapDispatchToProps = (dispatch: any) => ({
  searchName: (name: string, pageId: number) =>
    dispatch(requestToServerWithData(name, pageId)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(SearchBtnInTable),
)

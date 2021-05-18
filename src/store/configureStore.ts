import { combineReducers } from 'redux'
import { tableCharactersReducer } from './reducers/tableCharactersReducer'
export const allReducers = combineReducers({
  tableCharactersReducer,
})

import { applyMiddleware, compose, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { allReducers } from './configureStore'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const ext = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const devtoolMiddleware =
  ext && process.env.NODE_ENV === 'development' ? ext() : (f: Function) => f

export const store = createStore(
  allReducers,
  compose(applyMiddleware(thunk, logger), devtoolMiddleware),
)

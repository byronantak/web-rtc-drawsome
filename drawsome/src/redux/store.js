import { createStore } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { localStorageKey } from './storageKey'

const initialState = {
  messages: JSON.parse(localStorage.getItem(localStorageKey))
}

const store = createStore(reducer, initialState, composeWithDevTools())

export default store

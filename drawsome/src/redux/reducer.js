import { combineReducers } from 'redux';
import localStorageKey from './storageKey';
import connectionStatusReducer from './connectionStatuses/reducer';

export const rootReducer = combineReducers({
  messages: messageReducer,
  connectionStatus: connectionStatusReducer
});

export default function messageReducer (state = [], action) {
  switch (action.type) {
    case 'messages/clearMessages':
      localStorage.setItem(localStorageKey, JSON.stringify([]));
      return [];
    case 'messages/loadMessages':
      return JSON.parse(localStorage.getItem(localStorageKey));
    case 'messages/addMessage':
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(state.concat(action.payload.message))
      );
      return state.concat(action.payload.message);
    default:
      return state;
  }
}

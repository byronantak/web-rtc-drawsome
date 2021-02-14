import { combineReducers } from 'redux';
import connectionReducer from './connection/reducer';
import connectionStatusReducer from './connectionStatuses/reducer';
import messageReducer from './messages/reducer';

export const rootReducer = combineReducers({
  messages: messageReducer,
  connectionStatus: connectionStatusReducer,
  connection: connectionReducer
});

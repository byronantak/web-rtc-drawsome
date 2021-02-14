import localStorageKey from '../storageKey';

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

import localStorageKey from "./storageKey";

export default function reducer(state = { messages: [] }, action) {
  switch (action.type) {
    case "messages/clearMessages":
      localStorage.setItem(localStorageKey, JSON.stringify([]));
      return {
        ...state,
        messages: [],
      };
    case "messages/loadMessages":
      return {
        ...state,
        messages: JSON.parse(localStorage.getItem(localStorageKey)),
      };
    case "messages/addMessage":
      localStorage.setItem(localStorageKey, JSON.stringify(state.messages));
      return {
        ...state,
        messages: state.messages.concat(action.payload.message),
      };
    default:
      return state;
  }
}

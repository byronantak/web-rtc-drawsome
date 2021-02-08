import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  messages: [],
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;

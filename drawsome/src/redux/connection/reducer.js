const { connectionActions } = require('./actions');

const connectionReducer = (state = {}, action) => {
  switch (action.type) {
    case connectionActions.openConnection:
      return {};
    case connectionActions.sendFlag:
      return {};
    case connectionActions.sendMessage:
      return {};
    default:
      return state;
  }
};

export default connectionReducer;

import { actions } from './actions';
import { connectionStatus } from './enums/connectionStatus';

export const connectionStatusReducer = (state = connectionStatus.none, action) => {
  switch (action.type) {
    case actions.updateStatus:
      return action.status;
    default:
      return state;
  }
};

export default connectionStatusReducer;

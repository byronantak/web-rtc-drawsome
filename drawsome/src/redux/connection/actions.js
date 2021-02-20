import { connectionActionStrings } from './action.constants';

const openConnection = (id) => (
  {
    type: connectionActionStrings.openConnection,
    payload: {
      id
    }
  }
);

const hostConnection = () => (
  {
    type: connectionActionStrings.hostConnection
  }
);

const sendMessage = (message) => ({
  type: 'connection/send',
  payload: {
    message
  }
});

const sendFlag = (flag) => ({
  type: 'connection/flag',
  payload: {
    flag
  }
});

export const connectionActions = {
  openConnection,
  hostConnection,
  sendFlag,
  sendMessage
};

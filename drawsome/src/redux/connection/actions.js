
const openConnection = () => (
  {
    type: 'connection/open'
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
  sendFlag,
  sendMessage
};

const addMessage = (message) => ({
  type: 'messages/addMessage',
  payload: {
    message
  }
});

const loadMessages = () => ({
  type: 'messages/loadMessages'
});

const clearMessages = () => ({
  type: 'messages/clearMessages'
});

export const messages = {
  addMessage,
  loadMessages,
  clearMessages
};

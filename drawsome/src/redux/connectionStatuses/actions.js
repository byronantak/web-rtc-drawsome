const updateStatus = (status) => ({
  type: 'status/update',
  payload: {
    status: status
  }
});

export const actions = {
  updateStatus
};

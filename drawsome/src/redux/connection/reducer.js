import { webRtcUtils } from '../../webRtc/webRtcManager';
import { connectionActionStrings } from './action.constants';

const { connectionActions } = require('./actions');

const connectionReducer = (state = {}, action) => {
  switch (action.type) {
    case connectionActionStrings.openConnection:
      return { peer: webRtcUtils.receiver.connectById('test') };
    case connectionActionStrings.hostConnection:
      return { peer: webRtcUtils.sender.connectById('test') };
    case connectionActions.sendFlag:
      return {};
    case connectionActions.sendMessage:
      return {};
    default:
      return state;
  }
};

export default connectionReducer;

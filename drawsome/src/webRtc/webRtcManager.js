import Peer from 'peerjs';

function receiverConnectById (id) {
  const peer = new Peer(id);

  peer.on('connection', function (conn) {
    conn.on('data', function (data) {
      console.log(data);
    });
  });

  return peer;
}

function senderConnectById (id) {
  const peer = new Peer();
  const conn = peer.connect(id);
  conn.on('open', function () {
    console.log('connection', conn);
    console.log('peer', peer);
    conn.send('hi!');
  });

  return conn;
}

export const webRtcUtils = {
  receiver: {
    connectById: receiverConnectById
  },
  sender: {
    connectById: senderConnectById
  }
};

export default webRtcUtils;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { connectionActions } from '../../redux/connection/actions';
import { messages } from '../../redux/messages/actions';

const mapDispatchToProps = {
  openConnection: connectionActions.openConnection,
  hostConnection: connectionActions.hostConnection,
  clearMessages: messages.clearMessages
};

const mapStateToProps = (state, _) => {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    peer: state.connection.peer
  };
};

export class ConnectionManager extends React.Component {
  constructor ({ openConnection, clearMessages, hostConnection, peer }) {
    super();
    this.state = {
      connectionId: '',
      isHost: false,
      openConnection,
      hostConnection,
      clearMessages
    };
    this.handleConnect = this.handleConnect.bind(this);
    this.handleConnectionIdChange = this.handleConnectionIdChange.bind(this);
  }

  handleConnect () {
    console.log('HandleConnect');
    this.state.openConnection(this.state.connectionId);
  }

  handleConnectionIdChange (value) {
    this.setState({
      ...this.state,
      connectionId: value
    });
  }

  handleHostClick () {
    // eslint-disable-next-line no-debugger
    debugger;
    this.setState({
      ...this.state,
      isHost: true
    });
    this.state.hostConnection();
  }

  render () {
    let connectionContent;
    if (!this.state.isHost) {
      connectionContent = (
        <div>
          <div>
            <h4>Create a session</h4>
            <button className='btn btn-primary' onClick={(e) => this.handleHostClick()}>Host</button>
          </div>

          <div>
            <h4>Connect to session</h4>
            <label htmlFor='connectionId'>Connection ID:</label>
            <input type='text' id='connectionId' value={this.state.connectionId} onChange={(e) => this.handleConnectionIdChange(e.target.value)} />
            <button type='button' className='btn btn-primary' onClick={(e) => this.handleConnect()}>Connect</button>
          </div>
        </div>
      );
    } else {
      connectionContent = (
        <div>
          <h4>You are hosting</h4>
          <span>Your Connection ID: {this.props.peer.connectionId} </span>
        </div>
      );
    }

    return (
      <div>
        {connectionContent}
      </div>
    );
  }
}

ConnectionManager.propTypes = {
  openConnection: PropTypes.func,
  clearMessages: PropTypes.func,
  hostConnection: PropTypes.func,
  peer: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionManager);

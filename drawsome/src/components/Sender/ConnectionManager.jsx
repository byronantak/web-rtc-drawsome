import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { messages } from '../../redux/messages/actions';
import { connectionActions } from '../../redux/connection/actions';

const mapDispatchToProps = {
  sendMessage: connectionActions.sendMessage,
  clearMessages: messages.clearMessages
};

export class ConnectionManager extends React.Component {
  constructor (a) {
    const { openConnection, clearMessages } = a;
    super();
    this.state = {
      connectionId: '',
      openConnection,
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

  render () {
    return (
      <div>
        <label htmlFor='connectionId'>Connection ID:</label>
        <input type='text' id='connectionId' value={this.state.connectionId} onChange={(e) => this.handleConnectionIdChange(e.target.value)} />
        <button type='button' className='btn btn-primary' onClick={(e) => this.handleConnect()}>Connect</button>
      </div>
    );
  }
}

ConnectionManager.propTypes = {
//   openConnection: PropTypes.func,
//   a: PropTypes.func
};

export default connect(null, mapDispatchToProps)(ConnectionManager);

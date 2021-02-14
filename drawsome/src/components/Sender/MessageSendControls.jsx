import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { messages } from '../../redux/messages/actions';
import { connectionActions } from '../../redux/connection/actions';

const mapDispatchToProps = {
  sendMessage: connectionActions.sendMessage,
  clearMessages: messages.clearMessages
};

export class MessageSendControls extends React.Component {
  constructor ({ sendMessage, clearMessages }) {
    super();
    this.state = {
      value: '',
      sendMessage,
      clearMessages
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleClearMessage = this.handleClearMessage.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  handleSendMessage () {
    this.state.sendMessage({
      text: this.state.value,
      time: new Date()
    });
    this.setState({
      ...this.state,
      value: ''
    });
  }

  handleClearMessage () {
    this.state.clearMessages();
  }

  updateValue (value) {
    this.setState({
      ...this.state,
      value
    });
  }

  render () {
    return (
      <div>
        <input
          id='text'
          name='text'
          onChange={(e) => this.updateValue(e.target.value)}
          value={this.state.value}
          autoComplete='off'
        />
        <div className='d-flex justify-content-between mt-1'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.handleSendMessage}
          >
            Send
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={this.handleClearMessage}
          >
            Clear Messages
          </button>
        </div>
      </div>
    );
  }
}

MessageSendControls.propTypes = {
  sendMessage: PropTypes.func,
  clearMessages: PropTypes.func
};

export default connect(null, mapDispatchToProps)(MessageSendControls);

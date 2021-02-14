import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { messages } from '../../redux/messages/actions';

const mapDispatchToProps = {
  addMessage: messages.addMessage,
  clearMessages: messages.clearMessages
};

export class MessageControls extends React.Component {
  constructor ({ addMessage, clearMessages }) {
    super();
    this.state = {
      value: '',
      addMessage,
      clearMessages
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleClearMessage = this.handleClearMessage.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  handleSendMessage () {
    this.state.addMessage({
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

MessageControls.propTypes = {
  addMessage: PropTypes.func,
  clearMessages: PropTypes.func
};

export default connect(null, mapDispatchToProps)(MessageControls);

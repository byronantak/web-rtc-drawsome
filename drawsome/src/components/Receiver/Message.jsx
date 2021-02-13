import React from 'react';
import PropTypes from 'prop-types';

export class Message extends React.Component {
  constructor ({ message }) {
    super();
    this.state = {
      message
    };
  }

  getTimeString (dateString) {
    const date = new Date(dateString);
    if (date instanceof Date && !isNaN(date)) {
      return new Intl.DateTimeFormat('default', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      }).format(date.getTime());
    }
    return '';
  }

  render () {
    return (
      <div>
        <span className='message-time'>
          {this.getTimeString(this.state?.message?.time)}:{' '}
        </span>
        <span className='message-text'>{this.state?.message?.text}</span>
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.object
};

export default Message;

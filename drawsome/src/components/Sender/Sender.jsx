import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MessageDisplay } from './../Shared/MessageDisplay';
import MessageSendControls from './MessageSendControls';
import ConnectionManager from './ConnectionManager';

const mapStateToProps = (state, _) => {
  return {
    messages: state.message
  };
};

export class Sender extends React.Component {
  constructor ({ messages }) {
    super();
    this.state = {
      messages
    };
  }

  render () {
    return (
      <div>
        <ConnectionManager />
        <MessageDisplay messages={this.props.messages} />
        <MessageSendControls />
      </div>
    );
  }
}

Sender.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, null)(Sender);

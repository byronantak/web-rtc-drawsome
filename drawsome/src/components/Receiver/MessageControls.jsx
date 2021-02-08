import React from "react";
import { connect } from "react-redux";
import { messages } from "../../redux/messages/actions";

const mapDispatchToProps = {
  addMessage: messages.addMessage,
  clearMessages: messages.addMessage,
};

export class MessageControls extends React.Component {
  value = "";

  constructor() {
    super();
    this.state = {};
    this.sendMessage = this.sendMessage.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  sendMessage() {
    this.props.store.dispatch(
      messages.addMessage({
        text: this.value,
        time: new Date(),
      })
    );
  }

  clearMessage() {
    this.props.store.dispatch(messages.clearMessages());
  }

  updateValue(value) {
    this.value = value;
  }

  render() {
    return (
      <div>
        <input
          id="text"
          name="text"
          onChange={(e) => this.updateValue(e.target.value)}
        ></input>
        <div className="d-flex justify-content-between mt-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.sendMessage}
          >
            Send
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.clearMessage}
          >
            Clear Messages
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MessageControls);

import React from "react";
import { connect } from "react-redux";
import { messages } from "../../redux/messages/actions";

const mapDispatchToProps = {
  addMessage: messages.addMessage,
  clearMessages: messages.clearMessages,
};

export class MessageControls extends React.Component {
  constructor({ addMessage, clearMessages }) {
    super();
    this.state = {
      value: "",
      addMessage,
      clearMessages,
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  sendMessage() {
    this.state.addMessage({
      text: this.state.value,
      time: new Date(),
    });
    this.setState({
      ...this.state,
      value: "",
    });
  }

  clearMessage() {
    this.state.clearMessages();
  }

  updateValue(value) {
    this.setState({
      ...this.state,
      value,
    });
  }

  render() {
    return (
      <div>
        <input
          id="text"
          name="text"
          onChange={(e) => this.updateValue(e.target.value)}
          value={this.state.value}
          autoComplete={"off"}
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

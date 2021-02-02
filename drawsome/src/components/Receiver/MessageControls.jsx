import React from "react";

export class MessageControls extends React.Component {
  storageKey = "KEY";

  constructor() {
    super();
    this.state = {};
    this.sendMessage = this.sendMessage.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
  }

  sendMessage() {
    console.log("send");
    const input = document.getElementById("text");
    const message = {
      text: input.value,
      time: new Date(),
    };
    const messages = JSON.parse(localStorage.getItem(this.storageKey)) ?? [];
    messages.push(message);
    localStorage.setItem(this.storageKey, JSON.stringify(messages));
  }

  clearMessage() {
    console.log("clear");
    localStorage.setItem(this.storageKey, JSON.stringify([]));
  }

  render() {
    return (
      <div>
        <input id="text" name="text"></input>
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

export default MessageControls;

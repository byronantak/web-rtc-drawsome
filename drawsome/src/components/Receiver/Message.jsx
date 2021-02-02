import React from "react";

export class Message extends React.Component {
  constructor({ message }) {
    super();
    this.state = {
      message,
    };
  }

  getTimeString(date) {
    return new Intl.DateTimeFormat("default", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).format(date);
  }

  render() {
    return (
      <div>
        <span className={"message-time"}>
          {this.getTimeString(this.state.message.time)}:{" "}
        </span>
        <span className={"message-text"}>{this.state.message.text}</span>
      </div>
    );
  }
}

export default Message;
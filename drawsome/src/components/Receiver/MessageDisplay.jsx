import React from "react";
import Message from "./Message";

export class MessageDisplay extends React.Component {
  constructor() {
    super();
    this.storageKey = "KEY";
    const storageValue = localStorage.getItem(this.storageKey);
    this.state = {
      messages: JSON.parse(storageValue || "[]"),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateMessages(), 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateMessages() {
    const storageValue = localStorage.getItem(this.storageKey);
    this.setState({
      messages: JSON.parse(storageValue || "[]"),
    });
  }

  render() {
    return (
      <div>
        <div>Messages:</div>
        <div className="p-1">
          {this.state.messages.map((msg, i) => {
            return <Message message={msg} key={i}></Message>;
          })}
        </div>
      </div>
    );
  }
}

export default MessageDisplay;

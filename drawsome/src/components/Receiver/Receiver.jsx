import React from "react";
import Status from "./Status";
import MessageDisplay from "./MessageDisplay";
import MessageControls from "./MessageControls";

const testMessages = [
  {
    text: "test1",
    time: new Date(),
  },
  {
    text: "test2",
    time: new Date(),
  },
];

export class Receiver extends React.Component {
  constructor({ status }) {
    super();
    this.state = {
      status,
    };
  }

  render() {
    return (
      <div>
        <Status status={this.state.status}></Status>
        <MessageDisplay messages={testMessages}></MessageDisplay>
        <MessageControls></MessageControls>
      </div>
    );
  }
}

export default Receiver;

import React from "react";
import Message from "./Message";
import { connect } from "react-redux";

const mapStateToProps = (state, _) => {
  return {
    messages: state,
  };
};
export class MessageDisplay extends React.Component {
  constructor({ messages }) {
    super();
    this.state = messages;
  }

  render() {
    return (
      <div>
        <div>Messages:</div>
        <div className="p-1">
          {(this.state?.messages ?? []).map((msg, i) => {
            return <Message message={msg} key={i}></Message>;
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MessageDisplay);

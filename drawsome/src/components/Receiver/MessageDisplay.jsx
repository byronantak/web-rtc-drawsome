import React from "react";
import Message from "./Message";
import { connect } from "react-redux";

const mapStateToProps = (state, _) => {
  console.log(state);
  return {
    messages: state,
  };
};
export class MessageDisplay extends React.Component {
  constructor({ state }) {
    console.log("messages", state);
    super();
    this.state = state;
  }

  render() {
    console.log(this.state);
    // console.log(`props`, this.props);
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

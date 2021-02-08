import React from "react";
// import Status from "./Status";
import MessageDisplay from "./MessageDisplay";
import MessageControls from "./MessageControls";
import { Grid } from "./Grid";
import { messages } from "../../redux/messages/actions";
import { connect } from "react-redux";

const mapDispatchToProps = {
  loadMessages: messages.loadMessages,
};

export class Receiver extends React.Component {
  constructor() {
    super();
    // console.log("this.props", this.props);
    // console.log("this.state", this.state);
    // this.props.store.dispatch(messages.loadMessages());
  }

  render() {
    return (
      <div>
        {/* <Status status={this.state.status}></Status> */}
        <MessageDisplay store={this.props.store}></MessageDisplay>
        <MessageControls store={this.props.store}></MessageControls>
        <Grid></Grid>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Receiver);

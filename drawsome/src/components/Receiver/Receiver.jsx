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
  constructor({ store }) {
    super();
    this.state = {
      store,
    };
    this.state.store.dispatch(messages.loadMessages());
  }

  render() {
    return (
      <div>
        {/* <Status status={this.state.status}></Status> */}
        <MessageDisplay store={this.state.store}></MessageDisplay>
        <MessageControls store={this.state.store}></MessageControls>
        <Grid></Grid>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Receiver);

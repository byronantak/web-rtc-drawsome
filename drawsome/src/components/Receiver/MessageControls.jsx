import React from "react";

export class MessageControls extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input name="text"></input>
        <div className="d-flex justify-content-between mt-1">
          <button type="button" className="btn btn-primary">
            Send
          </button>
          <button type="button" className="btn btn-secondary">
            Clear Messages
          </button>
        </div>
      </div>
    );
  }
}

export default MessageControls;

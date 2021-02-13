import React from 'react'
// import Status from "./Status";
import MessageDisplay from './MessageDisplay'
import MessageControls from './MessageControls'
import { Grid } from './Grid'
import { messages as messageActions } from '../../redux/messages/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapDispatchToProps = {
  loadMessages: messageActions.loadMessages
}

const mapStateToProps = (state, _) => {
  return {
    messages: [...state?.messages]
  }
}

export class Receiver extends React.Component {
  constructor ({ messages, loadMessages }) {
    super()
    this.state = {
      messages
    }
    loadMessages()
  }

  render () {
    return (
      <div>
        {/* <Status status={this.state.status}></Status> */}
        <MessageDisplay messages={this.props.messages} />
        <MessageControls />
        <Grid />
      </div>
    )
  }
}

Receiver.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  loadMessages: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Receiver)

import React from 'react'
import Message from './Message'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class MessageDisplay extends React.Component {
  render () {
    return (
      <div>
        <div>Messages:</div>
        <div className='p-1'>
          {(this.props?.messages ?? []).map((msg, i) => {
            return <Message message={msg} key={i} />
          })}
        </div>
      </div>
    )
  }
}

MessageDisplay.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
}

export default connect(null, null)(MessageDisplay)

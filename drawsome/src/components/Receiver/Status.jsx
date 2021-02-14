import React from 'react';
import PropTypes from 'prop-types';

export class Status extends React.Component {
  constructor ({ status }) {
    super();
    this.state = {
      status
    };
  }

  getClass (status) {
    switch (status?.toLocaleLowerCase() ?? '') {
      case 'test':
        return 'test-status';
      default:
        return '';
    }
  }

  render () {
    return (
      <div>
        Status: &nbsp;
        <span className={this.getClass(this.state.status)}>
          {this.state.status}
        </span>
      </div>
    );
  }
}

Status.propTypes = {
  status: PropTypes.string
};

export default Status;

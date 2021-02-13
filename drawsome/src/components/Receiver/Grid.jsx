import React from 'react';

export class Grid extends React.Component {
  constructor () {
    super();
    this.state = {
      standby: false,
      go: false,
      fade: false,
      allOff: false
    };
    this.getClass = this.getClass.bind(this);
    this.toggleTile = this.toggleTile.bind(this);
  }

  getClass (key) {
    if (this.state[key]) {
      return 'tile active';
    }
    return 'tile';
  }

  toggleTile (key) {
    return function () {
      this.setState({ ...this.state, [key]: !this.state[key] });
    }.bind(this);
  }

  render () {
    return (
      <div>
        <div>
          <span
            className={this.getClass('standby')}
            onClick={this.toggleTile('standby')}
          >
            Standby
          </span>
          <span className={this.getClass('go')} onClick={this.toggleTile('go')}>
            Go
          </span>
        </div>
        <div>
          <span
            className={this.getClass('fade')}
            onClick={this.toggleTile('fade')}
          >
            Fade
          </span>
          <span
            className={this.getClass('allOff')}
            onClick={this.toggleTile('allOff')}
          >
            All Off
          </span>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const {isSwitchOn} = this.props;
    const {onClick} = this.props;
    let button = isSwitchOn ? "OFF" : "ON";
    return (
      <div className="Button">
        <button className="btn" onClick={onClick}>{button}</button>
      </div>
    )
  }
}

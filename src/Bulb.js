import React, { Component } from 'react';

export default class Bulb extends Component {
  render() {
    const bulbOff = '/pic_bulboff.gif';
    const bulbOn = '/pic_bulbon.gif';
    const {isSwitchOn} = this.props;
    let imageURL = isSwitchOn ? bulbOn : bulbOff;
    return (
      <div>
        <img src={imageURL} alt={imageURL} />
      </div>
    )
  }
}

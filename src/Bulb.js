import React, { Component } from 'react';

export default class Bulb extends Component {
  render() {
    const bulbOff = process.env.PUBLIC_URL+'/pic_bulboff.gif';
    const bulbOn = process.env.PUBLIC_URL+'/pic_bulbon.gif';
    const {isSwitchOn} = this.props;
    let imageURL = isSwitchOn ? bulbOn : bulbOff;
    return (
      <div>
        <img src={imageURL} alt={imageURL} />
      </div>
    )
  }
}

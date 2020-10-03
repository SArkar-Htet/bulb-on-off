import React, { Component } from 'react';
import Bulb from './Bulb';
import Button from './Button';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isSwitchOn : false,
    };
  }

  switchControl = () => {
    this.setState((state) => ({
      isSwitchOn : !state.isSwitchOn,
    }));
  }
  
  render() {
    const {isSwitchOn} = this.state;
    return (
      <div className="App">
        <div className="App__box">
          <Bulb isSwitchOn={isSwitchOn} />
          <br/>
          <Button isSwitchOn={isSwitchOn} onClick={this.switchControl} />
        </div>
      </div>
    )
  }
}

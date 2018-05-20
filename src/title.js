import React, { Component } from 'react';
import logo from './assets/logo.png';

export class Title extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Websocket Relay</h1>
        </header>

        <p className="App-intro">
          help me hook up a socket hnnggggg
        </p>

      </div>
    );
  }
}

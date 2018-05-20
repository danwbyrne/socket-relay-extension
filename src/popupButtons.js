import React, { Component } from 'react';
var Button = require('react-bootstrap').Button;

const wellStyles = { maxWidth: 200, maxHeight: 400, margin: '0 auto 10px' };

export class PopupButtons extends Component {

  render() {

    const buttonsInstance = (
      <Button
        bsStyle="primary"
        bsSize="large"
        block
        onClick={buttonClick}>

        Boop Button
      </Button>
    )

    function buttonClick () {
      console.log('boop');
    }

    return (
      <div className="Test-Button" style={wellStyles}>
        {buttonsInstance}
      </div>
    )
  }
}

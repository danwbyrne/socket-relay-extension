import React, { Component } from 'react';

import { PopupButtons } from './popupButtons'
import { Title } from './title'

class App extends Component {
  render() {
    return (
      <div>
        < Title />
        < PopupButtons />
      </div>
    );
  }
}

export default App;

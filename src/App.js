import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Time from './Time/Time';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <p>This is the app Component</p>
          <User onRender={() => this.whenSubComponentRender()} />
          <p>This is the time, press the button to update <Time /></p>
        </div>
      </div>
    );
  }

  whenSubComponentRender() {
    console.log('sub component rendered');
  }

}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDisplay from './containers/userdisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserDisplay/>
      </div>
    );
  }
}

export default App;

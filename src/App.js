import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button primary>
          Click Here
        </Button>
      </div>
    );
  }
}

export default App;

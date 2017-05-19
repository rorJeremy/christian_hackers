import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <h3>
          Hello Hackers
        </h3>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

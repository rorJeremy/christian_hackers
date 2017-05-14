import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import { Input, Menu, Container } from 'semantic-ui-react'
import {Menu, Segment, Icon } from 'semantic-ui-react'

class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Navbar></Navbar>
    )
  }
}

export default App;

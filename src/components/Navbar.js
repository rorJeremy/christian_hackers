import React from "react";
import { render } from "react-dom";
import {Menu, Segment, Icon } from 'semantic-ui-react'

class Navbar extends React.Component {
  render() {
    return (
      <Segment>
        <div>
          <Menu inverted color={"blue"}>
            <Menu.Item position='left'  name='Christian Hackers'/>
            <Menu.Item  name='profile' icon>
              <Icon name='user' size='large'/>
            </Menu.Item>
            <Menu.Item  name='home'/>
            <Menu.Item  name='Login'/>
          </Menu>
        </div>
        <div>
          <Menu compact secondary>
            <Menu.Item name='Create Account'/>
            <Menu.Item name='View Jobs'/>
            <Menu.Item name='Post Job'/>
          </Menu>
        </div>
      </Segment>

    );
  }
}
export default Navbar;
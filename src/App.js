import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar';
import LeftDrawer from './components/LeftDrawer';
import {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from './components/theme-default';
import Data from './data';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {

    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 80px 20px 80px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>
        <Navbar styles={styles.header} handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
        <LeftDrawer navDrawerOpen={navDrawerOpen}
                    menus={Data.menus}
                    username="Current User"/>
        <div style={styles.container}>
        </div>        
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

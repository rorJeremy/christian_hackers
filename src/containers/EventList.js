// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectEvent } from '../actions/index';
// import { bindActionCreators } from 'redux';
import {List, ListItem} from 'material-ui/List';


class EventList extends Component {

  renderList() {
    return this.props.events.map((event) => {
      return (
        <ListItem
          key={event.title}
          primaryText={event.title} 
         />
      );
    });
  }

  render() {
    return (
	    <List>
      	{this.renderList()}
	    </List>
    )
  }
}

function mapStateToProps(state) {
  // Whatever object returned will show up as props
  // inside of EventList
  return {
    events: state.events
  };
}

// the connect function takes a function and a component and produces a container
export default connect(mapStateToProps)(EventList);

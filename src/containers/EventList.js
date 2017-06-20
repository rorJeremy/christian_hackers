// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectEvent } from '../actions/index';
import { bindActionCreators } from 'redux';
import {List, ListItem} from 'material-ui/List';


class EventList extends Component {

  renderList() {
    return this.props.events.map((event) => {
      return (
        <ListItem
          key={event.title}
          primaryText={event.title} 
          onClick={() => this.props.selectEvent(event)}
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

// If our state ever changes, this Container will instantly re-render with the new list of Events
// Also, whenever the app state changes, the object in the 'mapStateToProps' function will be assigned as props to the Component/Container as this.props.events
function mapStateToProps(state) {
  // Whatever object returned will show up as props
  // inside of EventList
  return {
    events: state.events
  };
}

// This function takes the 'selectEvent' ActionCreator and makes it available to be called from within this container
// Anything returned from this function will end up as props
// on the EventList container
function mapDispatchToProps(dispatch) {
  // Whenever selectEvent is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectEvent: selectEvent }, dispatch);
}

// the connect function takes a function and a component and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(EventList);



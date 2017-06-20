import React, { Component } from "react";
import { connect } from "react-redux";

class EventDetail extends Component {
  render() {
    if (!this.props.event) {
      return <div>Select an event for more information.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.event.title}</div>
        <div>Description: {this.props.event.description}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: state.activeEvent
  };
}

export default connect(mapStateToProps)(EventDetail);
// A Reducer is just a function that returns a piece of the application’s state.
import _ from "lodash";
import { FETCH_EVENTS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS:
    	console.log(action.payload.data); // [event1, event2]
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
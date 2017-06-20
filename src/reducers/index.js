import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';
import ActiveEvent from "./reducer_active_event";

const rootReducer = combineReducers({
	// We use the name of the piece of state 'events' as the key
	// We use the reducer 'EventsReducer' as the value
  events: EventsReducer,
  activeEvent: ActiveEvent
});

export default rootReducer;
import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';

const rootReducer = combineReducers({
	// We use the name of the piece of state 'events' as the key
	// We use the reducer 'EventsReducer' as the value
  events: EventsReducer
});

export default rootReducer;
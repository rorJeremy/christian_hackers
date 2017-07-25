import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from './components/HomePage';
import EventList from './containers/EventList';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';
import promise from 'redux-promise';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route } from 'react-router-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render((
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<App />
				<Route exact path="/" component={HomePage} />
				<Route path="/events" component={EventList} />
				<Route path="/home" component={HomePage} />
			</div>
  	</BrowserRouter>
  </Provider>
  ), document.getElementById('root')
);

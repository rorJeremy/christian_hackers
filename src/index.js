import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from './components/HomePage';
import EventList from './containers/EventList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route } from 'react-router-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render((
	<Provider store={createStore(reducers)}>
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

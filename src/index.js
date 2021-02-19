import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
//import Card from './Card';
//import CardList from './CardList';
// import creatstore & middleware application from redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
//create a logger using redux-logger
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// Reducer requests robots
// Importing tachyons CSS kit for working
import 'tachyons';
//import {robots} from './robots';

import App from './containers/App';

//getting searchrobots module from reducers file
import { searchRobots, requestRobots } from "./reducers";

//Thunk middleware from redux thunk file
import thunkMiddleware from 'redux-thunk';
// middleware logger
const logger = createLogger();

// combined reducers const file
const rootReducer = combineReducers({searchRobots, requestRobots})

//use createStore as object name with searchRobots & middleware as the parameters
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
		, document.getElementById('root'));
registerServiceWorker();


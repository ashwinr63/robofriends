import React, { Component } from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll'

import { setSearchField, requestRobots } from '../action'
// use a predefined keyword like 'mapStateToProps' and assign searchField and its state.
const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}
// MapDispatchToProps uses dispatch to provide SearchChange Event and this will call the value need.
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		// Request Robots reducers with action as dispatch
		onRequestRobots: () => dispatch(requestRobots())
	}
}

//App class extends the component which calls the super
class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: []
	// 		//	searchField:''
	// 	}
	// 	//	console.log('constructor');
	// }



	componentDidMount() {
		//console.log(this.props.store.getState())
		//	console.log('check');
		this.props.onRequestRobots();
		//Async request from API and setting to the state called robots
		// fetch('https://jsonplaceholder.typicode.com/albums')
		// 	.then(response => response.json())
		// 	.then(albums => this.setState({ robots: albums }));

		//console.log('componentDidMount');
	}

	render() {
		//const { robots } = this.state;
		// eslint-disable-next-line
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filterRobots = robots.filter(robots => {
			return robots.title.toLowerCase().includes(searchField.toLowerCase());
		})
		return (!robots.length) ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className="f2">Robo Friends</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filterRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll'


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField:''
		}
	//	console.log('constructor');
	}
	
	

	componentDidMount() {
	//	console.log('check');
		fetch('https://jsonplaceholder.typicode.com/albums')
		.then(response => response.json())
		.then(albums => this.setState({ robots: albums}));
	
	//console.log('componentDidMount');
	}
	
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
		
	}
	render() {
		const { robots, searchField } = this.state;
		const filterRobots = robots.filter(robots => {
			return robots.title.toLowerCase().includes(searchField.toLowerCase());
		})
		return (!robots.length) ?
			<h1>Loading</h1> :
			(
				<div className='tc'>
					<h1 className="f2">Robo Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
					<ErrorBoundry>
						<CardList robots={filterRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}

}
export default App;
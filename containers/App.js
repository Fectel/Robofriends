import React, { Component } from 'react';
import CardList from '../components/CardList';
import { challenges } from '../components/challenges'
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
// const state = {
// 	challenges: challenges,
// 	searchfield:''
// }

class App extends Component  {
		constructor() {
			super()
			this.state = {
				challenges: [],
				searchfield: ''
			}
		}

		componentDidMount() {
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ challenges: challenges}));
		}

		onSearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
		}

		render() {
			const { challenges, searchfield } = this.state;
			const filteredChallenges = challenges.filter(challenge => {
				return challenge.challengeName.toLowerCase().includes(searchfield.toLowerCase());
			})
				return !challenges.length ?
				<h1 className='tc'>Loading</h1>:
				(
						<div className='tc'>
							<h1 className='f1'>Challenges</h1>
							<SearchBox searchChange={this.onSearchChange}/>
							<Scroll>
							<CardList challenges={filteredChallenges}/>
							</Scroll>
						</div>
					);
				}
			}
		
	


export default App;

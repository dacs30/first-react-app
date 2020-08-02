import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

// using state because of the search bar
class App extends React.Component {
    constructor() { // search here
        super(); // calling the super
        this.state = { // this is what can change and affect the app
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => { // filtering the array
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots}/>
            </div>
        )
    }
};

export default App;
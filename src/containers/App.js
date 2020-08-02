import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// using state because of the search bar
class App extends React.Component {
    constructor() { // search here
        super(); // calling the super
        this.state = { // this is what can change and affect the app
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => { // users = the json file
            this.setState({robots: users}); //users array = the json
        })
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => { // filtering the array
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
};

export default App;
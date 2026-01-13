import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Spinner from '../components/Spinner';
import './App.css';

// using state because of the search bar
class App extends React.Component {
    constructor() { // search here
        super(); // calling the super
        this.state = { // this is what can change and affect the app
            robots: [],
            searchfield: '',
            error: null
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch robots');
                }
                return response.json();
            })
            .then(users => { // users = the json file
                this.setState({robots: users}); //users array = the json
            })
            .catch(error => {
                this.setState({error: error.message});
            });
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { robots, searchfield, error } = this.state;
        const filterRobots = robots.filter(robot => { // filtering the array
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        if(error){
            return (
                <div className='tc'>
                    <h1>ROBOFRIENDS</h1>
                    <h2 className='red'>Oops! Something went wrong.</h2>
                    <p>{error}</p>
                </div>
            )
        }

        if(robots.length === 0){
            return <Spinner />
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
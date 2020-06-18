import React, {Component} from 'react';
import CardList from './cardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';
import NavBar from './NavBar';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state= {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users})
        )}

    onSearchChange = (event)=>{
        this.setState({searchField: event.target.value})
    }

    
   
    render(){

        const filteredRobots = this.state.robots.filter( robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
        
            <div className='tc'>
                <NavBar />
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
               
    
            </div>
        )
    }
   
}

export default App;
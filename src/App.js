import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:robots,
            searchfiled: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfiled: event.target.value})
 
    }
    render(){
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })       
        return (
            <div className = 'tc'>
            <h1 className='f1'> RobotFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardList robots = {filteredrobots}/>
            </div>
        );
    }
}
export default App;
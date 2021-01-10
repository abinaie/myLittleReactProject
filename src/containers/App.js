import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfiled: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json()
        }).then(users => {
            this.setState({robots: users})
        });
    }
    onSearchChange = (event) => {
        this.setState({searchfiled: event.target.value})
 
    }
    render(){
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
        })  
        
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else{
            return (
               <div className = 'tc'>
                <h1 className='f1'> RobotFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredrobots}/>
                </Scroll>    
               </div>
            );
        }
    }
}
export default App;
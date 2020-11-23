import React from 'react';
import RoboCards from './RoboCards';
import RoboSearch from './RoboSearch';
import CustBg from './CustBg';

class App extends React.Component
{  
    constructor(){
        super();
        this.state={
            robots : [],
            filteredRobots:[]
        }
    }

    //refer here for react life cycle hooks - https://reactjs.org/docs/react-component.html
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{return response.json()})
            .then(users=>this.setState({robots:users,filteredRobots:users}));
    }
    
    searchRobots = (event)=>{
        let searchTerm = event.target.value;
        let filteredRobots = [];
        if(typeof searchTerm == "undefined" || searchTerm.length===0)
        {
            filteredRobots = this.state.robots;
        }
        else
        {
            filteredRobots = this.state.filteredRobots.filter(robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        this.setState({filteredRobots:filteredRobots});
    }
    
    render = ()=>{
        if(this.state.filteredRobots.length===0)
        {
            return (
                <div className="tc">
                    <h1>Loading...</h1>
                </div>
            );
        }
        else
        {
            return (
                <div className="tc">
                    <h1>ROBOFRIENDS</h1>
                    <RoboSearch searchRobots={this.searchRobots}></RoboSearch>  
                    <CustBg>
                        <RoboCards robots={this.state.filteredRobots}></RoboCards>
                    </CustBg>      
                </div>
            );
        }
    }
}

export default App;
import { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Users from './components/Users';





class App extends Component {
  state = {
    users : [
      {
        id:1,
        name:"Iftixar",
        salary:"5000",
        branch:"IT"
      },
      {
        id:2,
        name:"Iftixar",
        salary:"5000",
        branch:"IT"
      },
      {
        id:3,
        name:"Iftixar",
        salary:"5000",
        branch:"IT"
      }
    ]
  }
  render(){
    return(
      <div className="container">
        <Navbar title="WORKER APP"/>
        <Users users={this.state.users}/>
  
  
      </div>
    );
  }
 
}

export default App;
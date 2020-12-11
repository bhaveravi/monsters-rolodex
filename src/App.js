import React,{ Component } from 'react';

import {CardList} from './Components/card-list/card-list.component';
import {SearchBox} from './Components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters:users}))
  }
  
  handleChange = (e) =>{
    this.setState({searchField : e.target.value});
  } 

  render(){

    const{monsters,searchField} = this.state;
    var filterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
      <h1>Monsters Rolodex</h1>
       <SearchBox 
       placeholder='Search Monster'
       handleChange={this.handleChange}
       />           
       <CardList monsters={filterdMonsters} /> 
    </div>
    )
  }
}
export default App;

import React, { Component } from 'react';
import Search from  './Components/Search.jsx';
import './App.css';
import Header from './Components/Header.jsx';


class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
          
          <Search />
    );
  }
}

export default App;
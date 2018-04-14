import React, { Component } from 'react';

import Map from './Map.jsx';

import Search from  './Components/Search.jsx'
import Header from './Components/Header.jsx'
import TableList from './Components/TableList.jsx'

import './App.css';


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

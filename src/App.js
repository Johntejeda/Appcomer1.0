import React, { Component } from 'react';
import Search from  './Components/Search.jsx';
import Header from './Components/Header.jsx';
import Map from './Components/Map.jsx';
import TableList from './Components/TableList.jsx';
import './App.css';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {

  return (

      <div>
          <Header />
          <Search />
          <Map />
          <TableList />
      </div>
    );
  }
}

export default App;

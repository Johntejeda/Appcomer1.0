import React, { Component } from 'react';
import Header from './Components/Header.jsx';
import Map from './Components/Map.jsx';
import TableList from './Components/TableList.jsx';
import './App.css';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {ColumnAlignTable} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {

  return (

      <div className="container">
        <div className="row">
          <Header />
          <div>
            <div>
          <Map />
          <TableList />
          <share />
            </div>
        </div>
       </div>
      </div>
    );
  }
}


export default App;

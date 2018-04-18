import React, { Component } from 'react';
<<<<<<< HEAD
import Header from './Components/Header.jsx';
import Map from './Components/Map.jsx';
import TableList from './Components/TableList.jsx';
import './App.css';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {ColumnAlignTable} from 'react-bootstrap';
=======
import Search from  './Components/Search.jsx';
import './App.css';
import Header from './Components/Header.jsx';
>>>>>>> e556e78269310a409c6d534b8d5393f115068b70

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
<<<<<<< HEAD

  return (

      <div className="container">
        <div className="row">
          <Header />
          <div>
            <div>
          <Map />
          <TableList />
            </div>
        </div>
       </div>
      </div>
=======
    return (
          
          <Search />
>>>>>>> e556e78269310a409c6d534b8d5393f115068b70
    );
  }
}


export default App;

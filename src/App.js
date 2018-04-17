import React, { Component } from 'react';
import Header from './Components/Header.jsx';
import TableList from './Components/TableList.jsx';
import './App.css';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <Grid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col md={8}>
          <Map />
          </Col>
          <Col md={4}>
            <TableList />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

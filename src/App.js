import React, { Component } from 'react';
<<<<<<< 9b56d1d6b08c656d26a08fc0f8f1c552c549c947

import Map from './Map.jsx';

import Search from  './Components/Search.jsx'
import Header from './Components/Header.jsx'
import TableList from './Components/TableList.jsx'

=======
import Search from  './Components/Search.jsx';
import Header from './Components/Header.jsx';
import Map from './Components/Map.jsx';
import TableList from './Components/TableList.jsx';
>>>>>>> Finished rendering the MAP
import './App.css';


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

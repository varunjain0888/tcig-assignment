import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import HotelListItemComponent from './Components/HotelListItemComponent';
class App extends Component {
 
  render() {
    return (
      <div style={{}}>
        <HotelListItemComponent/>
      </div>
    );
  }
}
export default App;

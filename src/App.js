import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Outcomeslist from './components/Outcomeslist';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Outcomeslist />
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import Home from  './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form/form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Form />
        </header>
      </div>
    );
  }
}

export default App;

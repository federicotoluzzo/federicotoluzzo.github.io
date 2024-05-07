import React from 'react';
import {Cell} from "./cell";
import logo from './logo.svg';
import './App.css';
import "./cells.css";

function App() {
  let app = <div className="grid"></div>;
  for(let i = 0; i < 50; i++){
    for (let j = 0; j < 50; j++) {
      app.
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

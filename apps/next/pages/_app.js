import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

import React from 'react';
import { DatePicker, Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'

function App() {
  let date = null;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <main>
        <DatePicker onChange={(v) => date = v} />
        <Button onClick={() => window.alert(`you have submmited ${date}.`)}>确定</Button>
      </main>
    </div>
  );
}

export default App;

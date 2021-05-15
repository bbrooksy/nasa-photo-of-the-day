import React from "react";
import "./App.css";
import Body from './Components/Body'
import Head from './Components/Head'
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <p>
      <Head />
      <Body />
      </p>
    </div>
  );
}

export default App;

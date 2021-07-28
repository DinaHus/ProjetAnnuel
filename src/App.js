import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Tweets from "./Tweets";
import About from "./About";
import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/tweets" component={Tweets} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;

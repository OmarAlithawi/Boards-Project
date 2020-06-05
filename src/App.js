import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login/Login";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
    </div>
);
}

export default App;

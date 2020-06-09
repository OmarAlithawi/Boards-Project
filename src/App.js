import React, {useState, useEffect} from 'react';
import Home from "./components/Home/Home";
import About from "./components/About";
import Login from "./components/Login/Login";
import Contact from "./components/Contact"; 
import Signup from "./components/Login/Signup";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from "../src/components/firebase"

import './App.css';

function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(value => {
      setFirebaseInitialized(value)
    })
  })

  return firebaseInitialized !== false ? (
    <div className="App">
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
       <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} /> 
    </Router>
    </div>
) : <div id="loader"></div>
}

export default App;

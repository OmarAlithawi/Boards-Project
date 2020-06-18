import React, { useState, useEffect } from "react";
import Home from "../components/home/Home";
import About from "../components/about/About";
import BoardRender from "./BoardRender";
import Login from "../components/auth/login/Login";
import Contact from "../components/contact/Contact";
import Signup from "../components/auth/login/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "../components/auth/firebase";
import "../App.css";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((value) => {
      setFirebaseInitialized(value);
    });
  });

  return firebaseInitialized !== false ? (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/board" component={BoardRender} />
      </Router>
    </div>
  ) : (
    <div id="loader"></div>
  );
}

export default App;

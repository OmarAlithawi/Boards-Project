import React, { useState, useEffect } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import BoardRender from "./container/BoardRender";
import Login from "./components/auth/login/Login";
import Contact from "./components/contact/Contact";
import Signup from "./components/auth/login/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "./components/auth/firebase";
import "./App.css";

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
        <Route exact path="/Boards-project/" component={Home} />
        <Route path="/Boards-Project/about" component={About} />
        <Route path="/Boards-Project/contact" component={Contact} />
        <Route path="/Boards-Project/login" component={Login} />
        <Route path="/Boards-Project/signup" component={Signup} />
        <Route path="/Boards-Project/board" component={BoardRender} />
      </Router>
    </div>
  ) : (
    <div id="loader"></div>
  );
}

export default App;

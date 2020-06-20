import React from "react";
import Appbar from "../bars/Appbar";
import "../../index.css";

export default function About() {
  return (
    <div className="aboutPage">
      <Appbar />
      <div className="aboutUsGif">
      <img src={require('./contact.png')} className="programmers" />
      </div>
      <div className="aboutUsText">
        <h2>Who are we?</h2>
        <span>
          We are web designers/developers based in Istanbul,Turkey. 
          We build scalable intelligent web & mobile applications that
          simplify people's lives. <br/> <br/>
          We do not miss any opportunity to communicate with 
          industry experts and to get new knowledge and perspectives of tech collaborations.
        </span>
        
      </div>
    </div>
  );
}
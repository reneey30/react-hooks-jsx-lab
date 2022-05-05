import React from "react";
import { image } from "../data/data";

function About() {
  return(
  <div id="about">
  <h2>About Me</h2>
  <p> Hello I am a react programmer</p>
  <img src = {image} alt = "I Made this"/>
      </div>
    ); 
}

export default About;

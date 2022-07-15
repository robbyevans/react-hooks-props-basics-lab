import React from "react";
import user from "../data/user";
import Links from "./Links";


function About(props) {

  // const bioTrue=props.bio;
  // const size=((props.bio).length)
  // if((bioTrue)&&size>1){


    
    return (
      <div id="about">
      <h2>About Me</h2>
   
     {props.bio && props.bio.length>0?<p>{props.bio}</p>:null}
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
       <Links github= {props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}



export default About;

import React from "react";
import user from "../data/user";
import Links from "./Links";


function About(props) {

  const bioTrue=props.bio;
  const size=((props.bio).length)
  if((bioTrue)&&size>1){


    
    return (
      <div id="about">
      <h2>About Me</h2>
   
      <p>{props.bio}</p>
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
       <Links github= {props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}
return (
 null
);
}

export default About;

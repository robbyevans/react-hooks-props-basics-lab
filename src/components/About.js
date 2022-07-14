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
      
       <Links {...props}/>
    </div>
  );
}
return (
  <div id="about">
  <h2>About Me</h2>
  <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  
   <Links{...props}/>
</div>
);
}

export default About;

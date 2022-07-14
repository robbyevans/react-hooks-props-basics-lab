import React from 'react'

function Links(props) {
  return (
    <div>

      <h3>Links</h3>

      <a href={props.links}>{props.links.github}</a>
        <a href={props.links}>{props.links.linkedin}</a>
        
      
    </div>
  )
}

export default Links
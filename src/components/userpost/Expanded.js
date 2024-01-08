import React from 'react'
import upvote from "./upvote.svg"

function expanded({ups}) {
  return (
    <div style={{display: "flex", justifyContent: "center", columnGap: "50px", marginTop: "80px"}}>
        <img width="50px" height="50px" src={upvote}/>
        <p>upvotes: {ups}</p>
        
    </div>
  )
}

export default expanded
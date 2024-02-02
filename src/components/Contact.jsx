import React from 'react'
import { useState } from 'react';

function Contact() {

    

    let [state,setState]=useState('mahtab')
  return (
    <div className="contact">
        <input className="" type='text' placeholder='UserName' onChange={(e)=>setState(e.target.value)} value={state}/>
        
        <input type='email' placeholder='Enter Email'/>
        <button onClick={()=>console.log(state)}>Submit</button>
        <p></p>
        <button className="" onClick={()=>console.log(state)}>{state}</button>
    </div>
  )
}

export default Contact
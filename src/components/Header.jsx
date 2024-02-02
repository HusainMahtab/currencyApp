import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
     <>
       <div className="container">
        <Link to='/' className="">Home</Link>
        <Link  to= '/about' className="">About</Link>
        <Link to='/contact' className="">Contact</Link>
       </div>
        
        
       
     </>
  )
}

export default Header
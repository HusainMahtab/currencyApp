import React from 'react'
import '../styles/product.css'
const Coin=({name,symbol,imgSrc,current_price})=> {
 
  return (
   <div className="body">
     <div className='coin'>
      <img className="img" src={imgSrc} alt={name}/>
      <h1 className="">{name}</h1>
      <p className="">{symbol}</p>
      <h2 className="">₹ {current_price}</h2>
     </div>
   </div>
    
  )
}

export default Coin
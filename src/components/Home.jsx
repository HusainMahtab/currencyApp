import React from 'react'
import Coin from './Product'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'

const Home=()=> {
     
const [coin,setCoin]=useState([])
const [loader,setLoader]=useState(true)

 useEffect(()=>{
    
    const fetchAllCoin=async()=>{
      try {
        const {data}= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=2000")
         setCoin(data);
         setLoader(false)
         console.log(data)
      } catch (error) {
        console.log("fetching data error",error)
      }   
    }
    
    fetchAllCoin()
    
 },[])

  return (
    <div className="home">

     {
      loader ? (<Loader/>) 
      : ( 
       coin.map((i)=>(
           <Coin name={i.name} symbol={i.symbol} key={i.id} imgSrc={i.image} current_price={i.current_price}/> 
       ))
      )
     }
    
     </div>
   
     
     
    
    
  )
}

export default Home
import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import './styles/header.css'
import "./styles/contact.css"

function App() {
 

  return (
     <Router>
        <Header/> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
     </Router>
  )
}

export default App

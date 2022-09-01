import { useState,useEffect } from 'react'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Header from  './components/Header.jsx'
import './App.css'

import {userInfo} from './services/userinfo.js'

function App() {
  const [user,setUser]=useState([])

  useEffect(()=>{
    userInfo.then(data=>{
        setUser(data)
    })
  },[])

  return (
    <div className="App">
      <div className='container'>
        <Header
          name={user.name}
          coins={user.points}
        />
        <Hero/>
        <Products          
          coins={user.points}
        />
      </div>
    </div>
  )
}

export default App

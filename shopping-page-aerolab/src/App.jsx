import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Header from  './components/Header.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Hero/>
        <Products/>
      </div>
    </div>
  )
}

export default App

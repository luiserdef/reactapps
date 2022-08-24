import React from 'react';
import './App.css';
import portal from './img/portal.gif'

function App() {

const [dataResults,setDataResults]=React.useState([])

React.useEffect(()=>{
  fetch('https://rickandmortyapi.com/api/character')
  .then(response=>response.json())
  .then(response=> setDataResults(response.results))
},[])



const images = dataResults[0].image

  return (
    <main>
      <div className='container'>
        <div className='game-area'>
            <img className='character-img' src={images}></img>


          <div className='portals'>
            <div className='portal-container'>
                <img src={portal}></img>
                <h3>Rick Sanchez</h3>
            </div>
            <div className='portal-container'>
                <img src={portal}></img>
                <h3>Rick Sanchez</h3>
            </div>
            <div className='portal-container'>
                <img src={portal}></img>
                <h3>Rick Sanchez</h3>
            </div>
            <div className='portal-container'>
                <img src={portal}></img>
                <h3>Rick Sanchez</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

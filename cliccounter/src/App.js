import './App.css';
import freeCodeCAmpLogo from './img/FreeCodeCamp_logo.svg.png'
import Boton from './components/Button'
import Contador from './components/Contador'
import {useState} from 'react'

function App() {

    const [numClics,setNumClics]=useState(0)
    const manejarClic=()=>{
      setNumClics(numClics+1)
    }

    const reiniciarContador=()=>{
      setNumClics(0)
    }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo' 
        src={freeCodeCAmpLogo}
        alt='logo de freeCodeCamp'/>
      </div>
      <div className='contendor-principal'>
        <Contador numClics={numClics}/>
        <Boton
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

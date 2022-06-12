import './App.css';
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import {useState} from 'react'
import {evaluate} from 'mathjs'
import LogoCalc from './components/LogoCalc'

function App() {
  const[input,setInput]=useState('');

  const agregarInput=(valor)=>{
    setInput(input+valor)
  }

  const clearButton=()=>{
    setInput('')
}

const calcularResultado=()=>{
  if(input){
    setInput(evaluate(input))
  }else{
    setInput('Ingrese valores')
  }
  // console.log(evaluate(input))
}



  return (
    <div className="App">
      <LogoCalc/>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>          
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={agregarInput}>4</Boton>          
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={agregarInput}>7</Boton>          
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={calcularResultado}>=</Boton>          
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear clearButton={clearButton}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

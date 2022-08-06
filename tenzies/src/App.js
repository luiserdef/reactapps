import Dice from './components/Dice.js'
import React from 'react';
import Confetti from 'react-confetti';
import { useStopwatch } from 'react-timer-hook';
import './App.css';

function App() {
  const totalDices=10
  const[dices,setDices]=React.useState(createDices)
  const[rolls,setRolls]=React.useState(0)
  const[dicesCompleted,setDicesCompleted]=React.useState(0)
  const [winSize,setWinSize]=React.useState({width:0,height:0})
  const [bestTime,setBestTime]=React.useState(()=>{
      const getItems=localStorage.getItem('TenzieData')
      return JSON.parse(getItems) || {
        minutes:0,
        seconds:0
      }
  })

  const {
    seconds, minutes,isRunning,
    start,pause,reset,
  } = useStopwatch({ autoStart: false });

  React.useEffect(()=>{
      setWinSize({width:window.innerWidth,height:window.innerHeight})
      window.addEventListener('resize',()=>setWinSize({width:window.innerWidth,height:window.innerHeight}))
  },[])

  //check if the game is completed
  React.useEffect(()=>{
    let count=1
    let oldNumber=-1
    dices.forEach(dice =>{ 
      if(dice.selected){
        if(oldNumber===dice.value){
          count++
        }        
       oldNumber=dice.value
      }
    })
    setDicesCompleted(count) 
  },[dices])


//Update best time counter
  React.useEffect(()=>{
    if(isGameCompleted()){
      pause()
      let getItems=JSON.parse(localStorage.getItem('TenzieData'))
      const bestTime= {
        minutes:minutes,
        seconds:seconds
      }

      if(!getItems){
        localStorage.setItem('TenzieData',JSON.stringify(bestTime))
        setBestTime(bestTime)
      }else{
        const actualTime= `00:${minutes}:${seconds}`
        const lastTime= `00:${getItems.minutes}:${getItems.seconds}`
  
        if(actualTime<lastTime){
          localStorage.setItem('TenzieData',JSON.stringify(bestTime))
          setBestTime(bestTime)
        }
      }
    }
  },[dicesCompleted])

  function createDices(){
    const newDices=[]

    for(let a=0;a<totalDices;a++){
      let number= Math.floor(Math.random()* (6-1+1)+1)
      newDices.push(
          {
            id:a,
            value:number,
            selected:false
          }
        )
    }
    return newDices
  }

  function holdDice(id){
    if(!isRunning){
      start()
    }
    setDices(oldices=>{
      let newArrayDices= oldices.map(element=>{
        let selElement=element.selected
       return element.id===id ? {...element,selected:!selElement} : element
      })
      return newArrayDices
    })
  }

  function roll(){
    if(isGameCompleted()){
      setDicesCompleted(0)
      setDices(createDices())
      setRolls(0)         

      const stopwatchOffset = new Date(); 
      stopwatchOffset.setSeconds(stopwatchOffset.getSeconds())
      reset(stopwatchOffset,false)  

    }else{
      if(!isRunning){
        start()
      }

      setRolls(oldRoll=>oldRoll+1)
      setDices(oldices=>{
        const newroll=oldices.map(element=>{
          let selElement=element.selected
          let number= Math.floor(Math.random()* (6-1+1)+1)
          let newValue={}
          if (selElement===false){
              newValue = {...element,value:number}
          }else{
            newValue = element
          }
          return newValue
      })
      return newroll
    })
  }
  }

  function isGameCompleted(){ 
    return dicesCompleted === totalDices ? true :false
  }

  return (
    <div className='car-dice'>
      {isGameCompleted() &&
        <Confetti 
          width={winSize.width}
          height={winSize.height}
        />
      }
      <h1>10 FullDice</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <Dice 
        dices={dices}
        holdDice={holdDice}
      />
      <button onClick={roll}className='bt-roled'>{isGameCompleted() ? 'New Game' : 'Roll'}</button>
      <p><strong>Total Rolls:</strong> {rolls}</p>
      <p style={{color:'red'}}><strong>Time:</strong> {minutes}:{seconds}</p>
      <p style={{color:'green'}} ><strong >Best Time:</strong> {bestTime.minutes}:{bestTime.seconds} </p>
    </div>
  );
}

export default App;

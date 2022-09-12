import { useState,useEffect } from 'react'
import './App.css'
import { Task } from './components/Task'
import {v4 as uuid} from 'uuid'

function App() {

  const [input,setInput]=useState('')
  const [todo,setTodo]=useState([])

const addTask=()=>{
  const taskInput={
    id:uuid(),
    text:input,
    isCompleted:false
  }
  setTodo(task=>[...task,taskInput])
  setInput('')
}

const completeTask=(id)=>{
  setTodo(tasks=>tasks.map(task=>{
    if(task.id===id){
      return {...task,isCompleted:!task.isCompleted}
    }
    return task
  }))
}
const deleteTask=(id)=>{
  const elementIndex=todo.map(task=>task.id).indexOf(id)
  const todoCopy=todo.map(e=>e)
  todoCopy.splice(elementIndex,1)
  
  setTodo(todoCopy)
}

const taskList=todo.map((task)=>{
  return(
    <Task key={task.id}
      text={task.text}
      isCompleted={task.isCompleted}      
      completeTask={()=>completeTask(task.id)}
      deleteTask={()=>deleteTask(task.id)}
    />
  )
})

  return (
    <div className="App">
        <h1>Has completado 1 de 1 todos</h1>
        <input className='input' onChange={(e)=>setInput(e.target.value)} value={input} placeholder='ingrese Nombre'></input>
        <button onClick={addTask}>Agregar</button>
        <div className="container-task">
          {taskList}
        </div>
    </div>
  )
}

export default App

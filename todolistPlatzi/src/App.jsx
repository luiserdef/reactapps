import { useState,useEffect } from 'react'
import './App.css'
import { Task } from './components/Task'
import { useLocalStorage } from './Hooks/useLocalStorage'
import {v4 as uuid} from 'uuid'
import {TodoCounter} from './components/TodoCounter'
import { InputData } from './components/InputData'

function App() {
  const localName='TODO_V1'
  const [input,setInput]=useState('')
  const {todo,saveTodo,loading}=useLocalStorage(localName,[])

  const addTask=()=>{
    const taskInput={
      id:uuid(),
      text:input,
      isCompleted:false
    }
    const finalArrayTodo = [...todo,taskInput]
  
    saveTodo(finalArrayTodo)
    setInput('')
  }

const completeTask=(id)=>{
    const newTodoChange = todo.map(task=>{
        if(task.id===id){
        return {...task,isCompleted:!task.isCompleted}
        }
        return task
    })
    
    saveTodo(newTodoChange)
}

const deleteTask=(id)=>{
    const elementIndex=todo.map(task=>task.id).indexOf(id)
    const todoCopy=todo.map(e=>e)
    todoCopy.splice(elementIndex,1)
    
    saveTodo(todoCopy)
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
       <TodoCounter
        todoData={todo}
       />
      <InputData
        input={input}
        setInput={setInput}
        addTask={addTask}
      />
          {(loading && <p>CARGANDO DATOS...</p>)}
          {(!todo.length && !loading && <h3>INGRESA UNA TAREA!</h3>)}
          <div className="container-task">
              {taskList}
            </div>
    </div>
  )
}

export default App

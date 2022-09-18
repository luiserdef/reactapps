import { useState,useEffect } from 'react'
import './App.css'
import { Task } from './components/Task'
import { useLocalStorage } from './Hooks/useLocalStorage'
import {v4 as uuid} from 'uuid'
import {TodoCounter} from './components/TodoCounter'
import { InputData } from './components/InputData'
import addIcon from './assets/addIcon.png'
import { Modal } from './components/Modal'

function App() {
  const localName='TODO_V1'
  const [inputSearch,setInputSearch]=useState('')
  const [inputTodo,setInputTodo]=useState('')
  const {todo,saveTodo,loading}=useLocalStorage(localName,[])
  const [openModal,setOpenModal]= useState(false)


  const addTask=()=>{
    const taskInput={
      id:uuid(),
      text:inputTodo,
      isCompleted:false
    }
    const finalArrayTodo = [...todo,taskInput]
  
    saveTodo(finalArrayTodo)
    setOpenModal(false)
    setInputTodo('')
  }

  const cancelModal= () =>{
    if(openModal){
      setInputTodo('')
      setOpenModal(false)
    }else{
      setOpenModal(true)
    }

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

let searchTodoArray = []
  if(inputSearch.length<=0){
    searchTodoArray = todo
  }else{
    const textLower=(text)=>text.toLowerCase()
    const tasksFinded = todo.filter(task=>textLower(task.text).includes(textLower(inputSearch)))
    searchTodoArray = tasksFinded
  }

const taskList=searchTodoArray.map((task)=>{
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
  <>
    <div className="App">
       <TodoCounter
        todoData={todo}
       />
      <InputData
        input={inputSearch}
        setInput={setInputSearch}
      />
          {(loading && <p>CARGANDO DATOS...</p>)}
          {(!todo.length && !loading && <h3>INGRESA UNA TAREA!</h3>)}
          <div className="container-task">
              {taskList}
            </div>
      <img onClick={cancelModal} className='addIcon' src={addIcon}/>
    </div>

    {openModal &&
      <Modal>
        <div className='modal-content'>
          <h2>Escribe el nuevo TODO</h2>
          <textarea onChange={(e)=>setInputTodo(e.target.value)} value={inputTodo} placeholder='Ingrese el texto'></textarea>
          <div className='modal-buttons'>
            <button onClick={cancelModal} >Cancelar</button>
            <button onClick={addTask}>Añadir</button>
          </div>
        </div>
      </Modal>     
    }
 </>)
}

export default App

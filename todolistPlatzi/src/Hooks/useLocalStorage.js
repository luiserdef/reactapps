import { useState,useEffect} from 'react'

export const useLocalStorage = (localName='',localValue)=>{

    const[loading,setLoading]=useState(true)
    const localNameStorage = localName
    const [todo,setTodo]=useState(localValue)

    useEffect(()=>{
        setTimeout(()=>{
            const getTodoLocal= localStorage.getItem(localNameStorage)
            let localStorageValue
        
            if(!getTodoLocal){
                localStorage.setItem(localNameStorage,JSON.stringify(localValue))
                localStorageValue = getTodoLocal
                console.log(getTodoLocal)
            }else{
                localStorageValue = JSON.parse(getTodoLocal)
            }
        
            setTodo(localStorageValue)
            setLoading(false)
        },2000)
    },[])

      
    const saveTodo=(item)=>{
        localStorage.setItem(localNameStorage,JSON.stringify(item))
        setTodo(item)
    }      

    return({todo,saveTodo,loading})

}
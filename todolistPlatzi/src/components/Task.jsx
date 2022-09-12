import { BsCheckCircle } from 'react-icons/bs';
import { FcCancel } from "react-icons/fc";

export const Task=({text,isCompleted,completeTask,deleteTask})=>{
    return(
    <div className='task'>
        <BsCheckCircle className='yesIcon'size='2em' color='green' onClick={completeTask}/>
        <div className={`taskName ${isCompleted ?'task-completed':''}`}>{text}</div>
        <FcCancel size='2em' className='cancelIcon' onClick={deleteTask}/>
    </div>   
    )
}
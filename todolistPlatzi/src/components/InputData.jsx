

export const InputData = (props) =>{

return(
    <>
    <input className='input' 
        onChange={(e)=>props.setInput(e.target.value)} 
        value={props.input} 
        placeholder='ingrese el nombre de una tarea'>
    </input>
    </>
 )


}
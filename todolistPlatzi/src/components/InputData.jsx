

export const InputData = (props) =>{

const isEmpty = props.input.length <=0 ? true : false

return(
    <>
    <input className='input' 
        onChange={(e)=>props.setInput(e.target.value)} 
        value={props.input} 
        placeholder='ingrese Nombre'>
    </input>
    <button onClick={props.addTask} disabled={isEmpty}> Agregar</button>
    </>
 )


}
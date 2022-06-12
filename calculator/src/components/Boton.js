import React from "react";
import '../styles/Boton.css'

function Boton(props){

    const esOperador=valor=>{
        return isNaN(valor) && (valor !='.') && (valor!='=')
    }

    return(
        <div
            onClick={()=>props.manejarClick(props.children)}
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
            {props.children}
        </div>


    )
}

export default Boton
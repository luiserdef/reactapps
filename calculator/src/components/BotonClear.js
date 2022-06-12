import React from "react";
import '../styles/BotonClear.css'

const BotonClear=(props)=>(

    <div className='boton-clear' onClick={props.clearButton}>
        {props.children}
    </div>
)

export default BotonClear
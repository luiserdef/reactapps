import React from 'react';
import '../styles/Testimony.css'


function Testimony(props){
    return(
            <div className='contenedor-testimonio'>
                <img 
                className='imagen-testimonio'
                src={require(`../img/testimony-${props.imagen}.png`)}
                alt='Emma-photography'
                />
                <div className='contenedor-texto-testimonio'>
                    <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                    <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
                    <p className='texto-testimonio'>"{props.testimonio}"</p>
                </div>   
            </div>
    );
}

export default Testimony
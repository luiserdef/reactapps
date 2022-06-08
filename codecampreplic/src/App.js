import Testimony from './components/Testimony.js'
import { testimonyData } from './data/testimony-data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        {testimonyData.map((testimony,index) => {
            return(
              <Testimony key={index}
              nombre={testimony.nombre}
              pais={testimony.pais}
              imagen={testimony.imagen}
              cargo={testimony.cargo}
              empresa={testimony.empresa}
              testimonio={testimony.testimonio}
            />
            )
            console.log(testimony)
         })}
      </div>
    </div>
  );
}

export default App;

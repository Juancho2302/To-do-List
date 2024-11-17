import { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';

function CrearActividad(props) {
  const [title, setTitle] = useState();
  const [activity, setActivity] = useState();
  const [dateAct, setDateAct] = useState();

  return(<div className="actividad-crear">
      <div>
        <label htmlFor="title">Titulo</label>
        <input style={{borderRadius:"8px", padding:"3px", margin:"10px"}} id='title' type="text" placeholder="Título de la actividad" 
        value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor="activity">Actividad</label>
        <input style={{borderRadius:"8px", padding:"3px", margin:"10px"}} id="activity" type="text" placeholder="Agrega una descripción"
        value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor="date" >Fecha</label>
        <input style={{borderRadius:"8px", padding:"3px", margin:"10px"}} id="date" type="date" value={dateAct} onChange={(e)=>{setDateAct(e.target.value)}}/>
      </div>
      <button onClick={() => {
        let nuevo = {"id":props.dato.length + 1, "nombre":title,
            "descripcion":activity, "estado":false, "fecha":dateAct};
        const nuevasActividades = [...props.dato, nuevo];
        props.agregar(nuevasActividades);
      }}>Agregar</button>
    </div>);
};

CrearActividad.propTypes = {
  dato: PropTypes.array.isRequired,
  agregar: PropTypes.func.isRequired,
};

export default CrearActividad;
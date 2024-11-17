import './styles.css';
import Incomplete from './assets/uncomplet.png'
import Complete from './assets/complet.png'
import PropTypes from 'prop-types';

function DetalleActividad(props) {
  const {id, nombre, descripcion, fecha, estado} = props.itemData;
    return(<div className="actividad-detalle">
        <h2>Detalle de la actividad</h2>
        <div>
          <p>{props.itemData.nombre}</p>
          <p>{props.itemData.descripcion}</p>
          <p>{props.itemData.fecha}</p>
          <div className='imgContainer'>
            <img src={props.itemData.estado ? Complete : Incomplete} className='imgStyle' />
          </div>
          <div className="buttonContainer">
            <button onClick={() => {
                const newData = { id, nombre, descripcion, fecha, estado: !estado };
                props.changeActivity(newData);
              }}>Cambiar estado
            </button>

            <button onClick={() => {
                const newData = { id, nombre, descripcion, fecha, estado: !estado };
                props.deleteActivity(newData);
              }}>Eliminar 
            </button>
          </div>
        </div>
      </div>);
}

DetalleActividad.propTypes= {
  changeActivity: PropTypes.func.isRequired,
  deleteActivity: PropTypes.func.isRequired,
  itemData: PropTypes.object.isRequired,
};

export default DetalleActividad;
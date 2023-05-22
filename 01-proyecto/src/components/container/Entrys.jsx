import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../pure/Modal';
import Entrys from '../pure/tables/Entrys';
import AddEntrada from '../pure/forms/Crear/Entradas';
import DatePicker from 'react-datepicker';
const EntrysC = ({handleFechaInicial,handleFechaFinal}) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [fechaInicial, setFechaInicial] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');
    function handleFechaInicial(date) {
    setFechaInicial(date);
  }

     function handleFechaFinal(date) {
    setFechaFinal(date);
  }
    const abrirModal = () => {
      setMostrarModal(true);
    };
  
    const cerrarModal = () => {
      setMostrarModal(false);
    };


const Tabla = ()=>{
    return(
       
        <table className='table table-striped table-bordered m-5' style={{width:"100%"}}>
        <thead>
            <tr>
                <th scope='col'>Prodructo</th>
                <th scope='col'>Cantidad</th>
                <th scope='col'>Precio Unitario</th>
                <th scope='col'>Total</th>
                <th scope='col'>Fecha</th>
                <th scope='col'>Accion</th>
                
            </tr>
        </thead>
        <tbody>
           <Entrys handleFechaInicial={fechaInicial} handleFechaFinal={fechaFinal}></Entrys>
        </tbody>
        
    </table>
    )
}


    return (
        <>
        
        
        {mostrarModal? (
        <Modal onClose={cerrarModal}>

        <AddEntrada></AddEntrada>
      <div className="float-end">
        <button type="button" className="btn btn-outline-danger " onClick={cerrarModal}>Cerrar</button>
        
      </div>
        </Modal>
      ):((<div > 
       <div  className='d-flex m-3 gap-3 ms-5'>
        <div>
        <label htmlFor="fecha-inicial">Fecha inicial:</label>
        <DatePicker id="fecha-inicial" selected={fechaInicial} onChange={handleFechaInicial} />
      </div>
      <div>
        <label htmlFor="fecha-final">Fecha final:</label>
        <DatePicker id="fecha-final" selected={fechaFinal} onChange={handleFechaFinal} />
      </div>
        </div>
        <button className='btn btn-dark float-start mb-2 ms-5' onClick={abrirModal}>Comprar</button>
            
                      
                        <Tabla></Tabla>
           
        </div>))
        }</>
    );
};


EntrysC.propTypes = {

};


export default EntrysC;
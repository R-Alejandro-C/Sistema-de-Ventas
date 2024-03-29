import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Provedores from '../pure/tables/Provedores';
import AddProvedor from '../pure/forms/Crear/ProvedoresForm';
import { GetProvider } from '../../services/axiosProviders';
import Modal from '../pure/Modal';
import EditProvedor from '../pure/forms/Editar/ProvedoresForm';

const ProvedoresC = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModal2, setMostrarModal2] = useState(false);

    const abrirModal = () => {
      setMostrarModal(true);
    };
  
    const cerrarModal = () => {
      setMostrarModal(false);
    };

    const abrirModal2 = () => {
      setMostrarModal2(true);
    };
  
    const cerrarModal2 = () => {
      setMostrarModal2(false);
    };

const Tabla = ()=>{
    return(
       
        <table className='table table-striped table-bordered m-5' style={{width:"100%"}}>
        <thead>
            <tr>
                <th scope='col'>Ruc</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Celular</th>
                <th scope='col'>Correo</th>
                <th scope='col'>Accion</th>
                
            </tr>
        </thead>
        <tbody>
           <Provedores></Provedores>
        </tbody>
        
    </table>
    )
}


    return (
        <>
        
        
        {mostrarModal? (
        <Modal onClose={cerrarModal}>

        <AddProvedor></AddProvedor>
      <div className="float-end">
        <button type="button" className="btn btn-outline-danger " onClick={cerrarModal}>Cerrar</button>
        
      </div>
        </Modal>
      ):((<div >
        <h1> Provedores</h1>
        <button className='btn btn-dark float-start mb-2 ms-5' onClick={abrirModal}>Añadir Provedor</button>
        
<button className="btn btn-warning ms-2 float-start" onClick={abrirModal2}>Editar</button>
            <div className=''>
            {mostrarModal2 &&(
                      
                      <Modal onClose={cerrarModal2}>
                      <EditProvedor></EditProvedor>
                <div className="float-end">
                  <button type="button" className="btn btn-outline-danger " onClick={cerrarModal2}>Cerrar</button>
                  
                </div>
                  </Modal>
                  )}   
                    
                      
                        <Tabla></Tabla>
                      
            </div>
           
        </div>))
        }</>
    );
};


ProvedoresC.propTypes = {

};


export default ProvedoresC;
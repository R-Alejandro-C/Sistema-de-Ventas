import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Provedores from '../pure/tables/Provedores';
import AddProvedor from '../pure/forms/Crear/ProvedoresForm';
import { GetProvider } from '../../services/axiosProviders';
import Modal from '../pure/Modal';
import EditProvedor from '../pure/forms/Editar/ProvedoresForm';
import AddVentas from '../pure/forms/Crear/Ventas';
import {Navigate, Link} from "react-router-dom"
import Reporte from '../pure/Reporte';
import Sales from '../pure/tables/Sales';
const SalesC = () => {
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
                <th scope='col'>Prodructo</th>
                <th scope='col'>Cantidad</th>
                <th scope='col'>Precio de venta</th>
                <th scope='col'>Total</th>
                <th scope='coo'>Accion</th>
            </tr>
        </thead>
        <tbody>
           <Sales></Sales>
        </tbody>
        
    </table>
    )
}


    return (
        <>
        
        
        {mostrarModal? (
        <Modal onClose={cerrarModal}>

        <AddVentas></AddVentas>
      <div className="float-end">
        <button type="button" className="btn btn-outline-danger " onClick={cerrarModal}>Cerrar</button>
        
      </div>
        </Modal>
      ):((<div>
        <Reporte></Reporte>
        <button className='btn btn-success float-start mb-2 ms-5' onClick={abrirModal}>Añadir Venta</button>
        
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


SalesC.propTypes = {

};


export default SalesC;
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
import { isSwitchCase } from '@babel/types';
import SalesD from '../pure/tables/SalesD';
import SalesS from '../pure/tables/SalesS';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
const SalesC = ({handleFechaInicial,handleFechaFinal}) => {
  const [mostrarModal, setMostrarModal] = useState(false); 
  const [mostrarModal2, setMostrarModal2] = useState(false);   
  const [reporte, setReporte] = useState(null)   
  const [ventas, setVentas] = useState([]);
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
                <th scope='col'>Precio de venta</th>
                <th scope='col'>Total</th>
                <th scope='col'>Fecha</th>
                <th scope='coo'>Accion</th>
            </tr>
        </thead>
        <tbody>
           <Sales  handleFechaInicial={fechaInicial} handleFechaFinal={fechaFinal} ></Sales>
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
        <button className='btn btn-success float-start mb-2 ms-5' onClick={abrirModal}>Añadir Venta</button>
        
            <div className=''>

                    
                      
                        <Tabla></Tabla>
                      
            </div>
           
        </div>))
        }</>
    );
};


SalesC.propTypes = {

};


export default SalesC;
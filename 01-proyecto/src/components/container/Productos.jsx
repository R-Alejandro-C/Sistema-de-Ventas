import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Prodructs from '../pure/tables/Products';
import "../../styles/product.css"
import Modal from '../pure/Modal';
import AddProduct from '../pure/forms/Products';
const Productos = () => {
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => {
      setMostrarModal(true);
    };
  
    const cerrarModal = () => {
      setMostrarModal(false);
    };


const Tabla = ()=>{
    return(
       
        <table className='table table-striped table-bordered m-5 ' style={{width:"130%"}}>
        <thead>
            <tr>
                <th scope='col'>Nombre</th>
                <th scope='col'>Categoria</th>
                <th scope='col'>Cantidad</th>
                <th scope='col'>Accion</th>
            </tr>
        </thead>
        <tbody>
           <Prodructs></Prodructs>
        </tbody>
        
    </table>
    )
}


    return (
        <>
         {mostrarModal? (
        <Modal onClose={cerrarModal}>
            <AddProduct></AddProduct>
      <div className="float-end">
        <button type="button" className="btn btn-outline-danger " onClick={cerrarModal}>Cerrar</button>
        
      </div>
        </Modal>
      ):(
        <div className=''>
        <h1 className='categoria'>  Productos</h1>
        <button className='btn btn-dark float-start mb-2 ms-5' onClick={abrirModal}>Añadir Prodructo</button>
 
            <div className='col-12'>
                    
                      
                        <Tabla></Tabla>
                      
            </div>
            
        </div>)}
        </>
    );
};


Productos.propTypes = {

};


export default Productos;
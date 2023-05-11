import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Prodructs from '../pure/tables/Products';
import "../../styles/product.css"
import Modal from '../pure/Modal';
import AddProduct from '../pure/forms/Crear/Products';
import EditProducts from '../pure/forms/Editar/Products';
import EditCategorias from '../pure/forms/Editar/Categories';
const Productos = () => {
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
       
        <table className='table table-striped table-bordered ms-5 ' style={{width:"130%"}}>
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
        <div>
        <h1 style={{marginLeft:"50vh"}}>  Productos</h1>
        <button className='btn btn-dark float-start mb-2 ms-5' onClick={abrirModal}>Añadir Prodructo</button>
        <button className="btn btn-warning ms-2 float-start" onClick={abrirModal2}>Editar</button>
            <div className=''>
            {mostrarModal2 &&(
                      
                      <Modal onClose={cerrarModal2}>
                      <EditProducts></EditProducts>
                <div className="float-end">
                  <button type="button" className="btn btn-outline-danger " onClick={cerrarModal2}>Cerrar</button>
                  
                </div>
                  </Modal>
                  )}   
                      
                        <Tabla></Tabla>
                      
            </div>
            
        </div>)}
        </>
    );
};


Productos.propTypes = {

};


export default Productos;
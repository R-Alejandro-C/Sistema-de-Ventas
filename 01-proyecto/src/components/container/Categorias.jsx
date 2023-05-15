import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Categories from '../pure/tables/Categories';
import Modal from '../pure/Modal';
import AddCategorias from '../pure/forms/Crear/Categories';
import "../../styles/product.css"
import EditCategorias from '../pure/forms/Editar/Categories';
import { switchCase } from '@babel/types';
const Categorias = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModal2, setMostrarModal2] = useState(false);
    const [Filtro, setMostrarFiltro] = useState(0);
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
    const mensual = () => {
      setMostrarFiltro(1);
    };
    const semanal = () => {
      setMostrarFiltro(2);
    };
    const diario = () => {
      setMostrarFiltro(3);
    };
const Tabla = ()=>{
    return(
       
        <table className='table table-striped table-bordered ms-5' style={{width:"300%"}}>
        
        <thead>
            <tr>
            
                <th scope='col'>Nombre</th>
                
            </tr>
        </thead>
        
        <tbody>
        
           <Categories></Categories>
        </tbody>
        
    </table>
    )
}


    return (
        <>
        
        
        {mostrarModal? (
        <Modal onClose={cerrarModal}>
            <AddCategorias></AddCategorias>
      <div className="float-end">
        <button type="button" className="btn btn-outline-danger " onClick={cerrarModal}>Cerrar</button>
        
      </div>
        </Modal>
      ):((<div>
      <h1 className='position-relative start-100 categoria' > Categorias</h1>
        
        <button className='btn btn-dark float-start mb-2 ms-5' onClick={abrirModal}>Añadir Categorias</button>
        <button className="btn btn-warning ms-2" onClick={abrirModal2}>Editar</button>
       
            <div className=''>
                     {mostrarModal2 &&(
                      <div className=''>
            <Modal onClose={cerrarModal2}>
            <EditCategorias></EditCategorias>
      <div className="float-end">
        <button type="button" className="btn btn-outline-danger " onClick={cerrarModal2}>Cerrar</button>
        
      </div>
        </Modal>
        </div>)}
                      
                        <Tabla></Tabla>
                      
            </div>
           
        </div>))
        }</>
    );
};


Categorias.propTypes = {

};


export default Categorias;

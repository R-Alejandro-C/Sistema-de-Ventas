import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Categories from '../pure/tables/Categories';
import Modal from '../pure/Modal';
import AddCategorias from '../pure/forms/Categories';
import "../../styles/product.css"
const Categorias = () => {
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => {
      setMostrarModal(true);
    };
  
    const cerrarModal = () => {
      setMostrarModal(false);
    };


const Tabla = ()=>{
    return(
       
        <table className='table table-striped table-bordered ms-5' style={{width:"350%"}}>
        <thead>
            <tr>
                <th scope='col'>Nombre</th>
                <th scope='col'>Accion</th>
                
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
      ):((<div >
      <h1 className='position-relative start-100 categoria' > Categorias</h1>
        
        <button className='btn btn-dark float-start mb-2 ms-5' onClick={abrirModal}>Añadir Provedor</button>
 
            <div className='col-12'>
                    
                      
                        <Tabla></Tabla>
                      
            </div>
           
        </div>))
        }</>
    );
};


Categorias.propTypes = {

};


export default Categorias;

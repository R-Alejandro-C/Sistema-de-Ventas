import "../../../styles/product.css"
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { GetCategories, DeleteCategories,GetDetailsCategories,EditCategories } from '../../../services/axiosCategoriesService';
import Modal from "../Modal";
import EditCategorias from "../forms/Editar/Categories";
const Categories = (props) => {
    const [Categories, setCategories] = useState([]);
    const [selectedCategories, setselectedCategories] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const refName = useRef()
    const abrirModal = () => {
      setMostrarModal(true);
    };
  
    const cerrarModal = () => {
      setMostrarModal(false);
    };

    useEffect(() => {

        getAllCategoriess();
    }, []);

    const getAllCategoriess = () => {
        GetCategories()
            .then((response) => {
                setCategories(response.data)
                console.log(Categories);
            })
            .catch((error) => {
                alert("ocurrio un error")
                console.log(error);
            })
    }
    const obtainDetailsCategories = (id) => {
        GetDetailsCategories(id)
            .then((response) => {
                setselectedCategories(response.data)
                console.log(setselectedCategories);
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
            .finally(() => {
                console.log("Final de obtencion de details datos");
                console.log("select", setselectedCategories);
            })
    }

    const editCategories = (name,id) => {
        EditCategorias(name,id)
            .then((response) => {
                setCategories(Categories.filter(Categories => Categories.id === id))
                console.log(id);
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
    }


    const deleteCategories = (id) => {
        DeleteCategories(id)
            .then((response) => {
                setCategories(Categories.filter(Categories => Categories.id !== id))
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
    }

    
    return (
        <>
       
            {Categories.map((Categories, index) =>
                ( <tr key={index} Categoriess={GetDetailsCategories(Categories.id)}>

       <th scope="row">
           <span className="ms-2">
           {Categories.name}
                      
                       
           </span>
       </th>
        
         {mostrarModal && (
        <Modal onClose={cerrarModal}>
            <EditCategorias></EditCategorias>
      <div className="float-end">
        <button type="button" className="btn btn-outline-danger " onClick={cerrarModal}>Cerrar</button>
        
      </div>
        </Modal>
      )}
     </tr>)
               ) }
                             
        </>
       
    );
};


Categories.propTypes = {

};


export default Categories;

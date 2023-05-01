import "../../../styles/product.css"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GetCategories, DeleteCategories,GetDetailsCategories } from '../../../services/axiosCategoriesService';

const Categories = () => {
    const [Categories, setCategories] = useState([]);
    const [selectedCategories, setselectedCategories] = useState([]);
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
     <td className="aling-middle">
     
     <span className="">  
     <div className='center'>  
     <button className='btn btn-warning ms-2' >Editar</button>
     </div>
     </span> 
     </td>
 </tr>)
           ) }
    </>
    );
};


Categories.propTypes = {

};


export default Categories;

import "../../../styles/product.css"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GetDetailsProduct, DeleteProduct, GetProduct } from '../../../services/axiosProductService';
const Products = () => {
    const [products, setproducts] = useState([]);
    const [selectedProduct, setselectedProduct] = useState([]);
    useEffect(() => {

        getAllproducts();
    }, []);

    const getAllproducts = () => {
        GetProduct()
            .then((response) => {
                setproducts(response.data)
                console.log(products);
            })
            .catch((error) => {
                alert("ocurrio un error")
                console.log(error);
            })
    }
    const obtainDetailsProduct = (id) => {
        GetDetailsProduct(id)
            .then((response) => {
                setselectedProduct(response.data)
                console.log(setselectedProduct);
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
            .finally(() => {
                console.log("Final de obtencion de details datos");
                console.log("select", setselectedProduct);
            })
    }

    const deleteProduct = (id) => {
        DeleteProduct(id)
            .then((response) => {
                setproducts(products.filter(products => products.id !== id))
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
    }

    return (
        <>
        {products.map((products, index) =>
            ( <tr key={index} products={GetDetailsProduct(products.id)}>
   
   <th scope="row">
       <span className="ms-2">
       {products.name}
                  
                   
       </span>
   </th>
   <td className="aling-middle">
       <span className="ms-2"> 
       {products.category.name}        
       </span>
   </td>
   <td className="aling-middle">
       
   <span className="ms-2">   
   {products.quantity}
     </span>
   </td>
     <td className="aling-middle">
     
     <span className="">  
     <div className='center'>  
     <button className='btn btn-danger' onClick={()=> deleteProduct(products.id)}>Eliminar</button>
     <button className='btn btn-warning ms-2' >Editar</button>
     </div>
     </span> 
     </td>
 </tr>)
           ) }
    </>
    );
};


Products.propTypes = {

};


export default Products;
import React from 'react';
import PropTypes from 'prop-types';
const Products = ({vender, eliminar, Productos}) => {
    return (
        <tr>
            <th scope="row"> 
        <span>Nombre</span>
            </th>
            <td className="aling-middle">Categoria</td>
            <td className="aling-middle">Cantidad</td>
            <td className="aling-middle">Imagen</td> 
        </tr>
    );
}

Products.propTypes = {
    
}

export default Products;

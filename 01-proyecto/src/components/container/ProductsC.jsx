import React from 'react';
import Products from '../pure/tables/Products';

const ProductsC = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Categoria</th>
                    <th scope='col'>Cantidad</th>
                    <th scope='col'>IMG</th>
                </tr>
            </thead>
            <tbody>
                <Products></Products>
            </tbody>
        </table>
    );
}

export default ProductsC;

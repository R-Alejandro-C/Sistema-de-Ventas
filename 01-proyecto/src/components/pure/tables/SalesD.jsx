import "../../../styles/product.css"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GetDetailsSales, GetSales, DeleteSales, EditSales } from '../../../services/axiosSalesServices';

const SalesD = () => {
    const [Sales, setSales] = useState([]);
    const [selectedProduct, setselectedProduct] = useState([]);
    useEffect(() => {

      getAllSales();
     
    }, []);
   const dia = new Date()
    const getAllSales = () => {
          GetSales()
            .then((response) => {
                const sales =  response.data;
                sales.sort((a, b) => b.id - a.id);
                setSales(sales);
                console.log(Sales);
            })
            .catch((error) => {
                alert("ocurrio un error")
                console.log(error);
            })
    }
    const obtainDetailsSale = (id) => {
        GetDetailsSales(id)
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

    const DeleteSale = (id) => {
        DeleteSales(id)
            .then((response) => {
                setSales(Sales.filter(Sales => Sales.id !== id))
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
    }

    return (
        <> 
      {Sales
      .filter((Sales)=>{
        if(dia.getDate() === new Date(Sales.dateSale).getDate()){
          return true
        } 
      })
      .map((Sales, index) =>
            ( <tr key={index} Sales={GetDetailsSales(Sales.id)}>
   {Sales.sale.dateSale? <><th scope="row">
       <span className="ms-2">
       {Sales.product.name}
                  
                   
       </span>
   </th>
   <td className="aling-middle">
       <span className="ms-2"> 
       {Sales.quantity}        
       </span>
   </td>
   <td className="aling-middle">
       
   <span className="ms-2">   
   {Sales.unitPrice}
     </span>
   </td>
   <td className="aling-middle">
       
       <span className="ms-2">   
       {Sales.subTotal}
         </span>
       </td> 
         <td className="aling-middle">
       
       <span className="ms-2">   
       {new Date(Sales.dateSale).toLocaleString()}
         </span>
       </td>
     <td className="aling-middle">
     
     <span className="">  
     <div className='center'>  
         
     <button className='btn btn-danger' onClick={()=> DeleteSale(Sales.id)}>Eliminar</button>
     
     </div>
     </span> 
     </td></>:<>Fecha no correcta</>}
   
 </tr>)
           ) }
    </>
    );
};


SalesD.propTypes = {

};


export default SalesD;
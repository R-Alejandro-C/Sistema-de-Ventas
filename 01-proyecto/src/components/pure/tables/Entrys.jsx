import "../../../styles/product.css"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GetDetailsEntrys, GetEntrys, DeleteEntrys, EditEntrys } from '../../../services/axiosEntryService';
const Entrys = () => {
    const [Entrys, setEntrys] = useState([]);
    const [selectedProduct, setselectedProduct] = useState([]);
    useEffect(() => {

        getAllEntrys();
    }, []);

    const getAllEntrys = () => {
        GetEntrys()
            .then((response) => {
                setEntrys(response.data)
                console.log(Entrys);
            })
            .catch((error) => {
                alert("ocurrio un error")
                console.log(error);
                
            })
    }
    const obtainDetailsEntry = (id) => {
        GetDetailsEntrys(id)
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
        DeleteEntrys(id)
            .then((response) => {
                setEntrys(Entrys.filter(Entrys => Entrys.id !== id))
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
    }

    return (
        <>
        {Entrys.map((Entrys, index) =>
            ( <tr key={index} Entrys={GetDetailsEntrys(Entrys.id)}>
            <th scope="row">
       <span className="ms-2">
       {Entrys.product.name}
                  
                   
       </span>
   </th>
   <td className="aling-middle">
       <span className="ms-2"> 
       {Entrys.quantity}        
       </span>
   </td>
   <td className="aling-middle">
       
   <span className="ms-2">   
   {Entrys.unitPrice}
     </span>
   </td>
   <td className="aling-middle">
       
       <span className="ms-2">   
       {Entrys.subTotal}
         </span>
       </td>
       <td className="aling-middle">
       
       <span className="ms-2">   
       {Entrys.dateEntry}
         </span>
       </td>
     <td className="aling-middle">
     
     <span className="">  
     <div className='center'>  
     <button className='btn btn-danger' onClick={()=> DeleteSale(Entrys.id)}>Eliminar</button>
     
     </div>
     </span> 
     </td>   
 </tr>)
           ) }
    </>
    );
};


Entrys.propTypes = {

};


export default Entrys;
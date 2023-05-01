import "../../../styles/product.css"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GetProvider, GetDetailsProviders, DeleteProviders } from '../../../services/axiosProviders';
const Provedores = () => {
    const [providers, setproviders] = useState([]);
    const [selectedProvider, setselectedProvider] = useState([]);
    useEffect(() => {

        getAllProviders();
    }, []);

    const getAllProviders = () => {
        GetProvider()
            .then((response) => {
                setproviders(response.data)
                console.log(providers);
            })
            .catch((error) => {
                alert("ocurrio un error")
                console.log(error);
            })
    }
    const obtainDetailsProvider = (id) => {
        GetDetailsProviders(id)
            .then((response) => {
                setselectedProvider(response.data)
                console.log(setselectedProvider);
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
            .finally(() => {
                console.log("Final de obtencion de details datos");
                console.log("select", setselectedProvider);
            })
    }

    const deleteProvider = (id) => {
        DeleteProviders(id)
            .then((response) => {
                setproviders(providers.filter(providers => providers.id !== id))
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
    }

    return (
        <>
        {providers.map((providers, index) =>
            ( <tr key={index} providers={GetDetailsProviders(providers.id)}>
   
   <th scope="row">
       <span className="ms-2">
       {providers.RUC}
                  
                   
       </span>
   </th>
   <td className="aling-middle">
       <span className="ms-2"> 
       {providers.name}        
       </span>
   </td>
   <td className="aling-middle">
       
   <span className="ms-2">   
   {providers.phone}
     </span>
   </td>
   <td className="aling-middle">  
   <span className="ms-2">
   {providers.email}
       </span> 
   </td>
     <td className="aling-middle">
     
     <span className="">  
     <div className='center'>  
     <button className='btn btn-danger' onClick={()=> deleteProvider(providers.id)}>Eliminar</button>
     <button className='btn btn-warning ms-2' >Editar</button>
     </div>
     </span> 
     </td>
 </tr>)
           ) }
    </>
    );
};


Provedores.propTypes = {

};


export default Provedores;
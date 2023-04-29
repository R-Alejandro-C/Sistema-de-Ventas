import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { GetUser, GetDetailsUser, DeleteUser } from '../../../services/axiosUsers';

const Users = () => {
    const [User, setUser] = useState([]);
    const [selectedUser, setselectedUser] = useState([]);

    useEffect(() => {
    getAllUsers()  
    }, [])
    
    const getAllUsers =()=>{
        GetUser()
        .then((response)=>{
            setUser(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
        alert("ocurrio un error")
        console.log(error);
        })
    }

    const obtainDetailsUser = (id) => {
        GetDetailsUser(id)
            .then((response) => {
                setselectedUser(response.data)
                console.log(setselectedUser);
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
            .finally(() => {
                console.log("Final de obtencion de details datos");
                console.log("select", setselectedUser);
            })
    }

    const DeleteUsers =(id)=>{
        DeleteUser(id)
        .then((response)=>{
            setUser(User.filter(User => User.id !== id))
        })
        .catch((error)=>{
            alert("ALGO SALIO MAL");
            console.log(error)
        })
    }

    const EditUsers =(id)=>{
        DeleteUser(id)
        .then((response)=>{
            setUser(User.filter(User => User.id !== id))
        })
        .catch((error)=>{
            alert("ALGO SALIO MAL");
            console.log(error)
        })
    }




    return (
        <>
        {User.map((User, index) =>
            ( <tr key={index} User={GetDetailsUser(User.id)}>
   
   <th scope="row">
       <span className="ms-2">
       { User.name}
                  
                   
       </span>
   </th>
   <td className="aling-middle">
       <span className="ms-2">         
       { User.lastname} </span>
   </td>
   <td className="aling-middle">
       
   <span className="ms-2">     { User.DNI} </span>
   </td>
   <td className="aling-middle">
     
   <span className="ms-2">       { User.email}</span> 
   </td>
   <td className="aling-middle">
     
     <span className="ms-2">     { User.roleId}</span> 
     </td>
     <td className="aling-middle">
     
     <span className="ms-2">  { User.roleId} </span> 
     </td>
     <td className="aling-middle">
     
     <span className="ms-2"> 
      {User.password ? (<p>*****</p>):(<p>Sin contraseña</p>)}
      </span> 
     </td>
     <td className="aling-middle">
     
     <span className="">  
     <div className='center mt-3'>  
     <button className='btn btn-danger ' onClick={()=>DeleteUsers(User.id)}>Eliminar</button>
     <button className='btn btn-warning ms-2' onClick={()=>EditUsers(User.id)}>Editar</button>
     </div>
     </span> 
     </td>
 </tr>)
           ) }
    </>
    );
};


Users.propTypes = {

};


export default Users;

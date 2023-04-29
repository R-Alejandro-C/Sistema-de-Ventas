import React,{ useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Users from '../pure/tables/Users';
import {GetUser,DeleteUser,GetDetailsUser} from "../../services/axiosUsers"

const UsuariosC = () => {
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
        DeleteUser()
        .then((response)=>{

        })
    }
    const Tabla = ()=>{
        return(
           
            <table className='table table-striped table-bordered m-5' style={{width:"100%"}}>
            <thead>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Apellido</th>
                    <th scope='col'>DNI</th>
                    <th scope='col'>email</th>
                    <th scope='col'>Rol</th>
                    <th scope='col'>Trabajo</th>
                    <th scope='col'>Contraseña</th>
                    <th scope='col'>Accion</th>
                </tr>
            </thead>
            <tbody> 
<Users></Users>
            </tbody>
        </table>
        )
    }
    return (
        <div >
        <h1>Usuarios</h1>
        <div className='col-12'>
                
                  
                    <Tabla></Tabla>
                  
        </div>

    </div>
    );
};


UsuariosC.propTypes = {

};


export default UsuariosC;

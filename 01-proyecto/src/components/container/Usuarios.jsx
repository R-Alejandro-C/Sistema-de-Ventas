import React,{ useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Users from '../pure/tables/Users';
import {GetUser,DeleteUser,GetDetailsUser} from "../../services/axiosUsers"
import Register from '../pure/register/register';
import Modal from '../pure/Modal';
const UsuariosC = () => {
    const [User, setUser] = useState([]);
    const [selectedUser, setselectedUser] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => {
      setMostrarModal(true);
    };
  
    const cerrarModal = () => {
      setMostrarModal(false);
    };
    const Tabla = ()=>{
        return(
           
            <table className='table table-striped table-bordered m-3 mt-5' style={{width:"100%"}}>
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
      
        {mostrarModal? (
        <Modal onClose={cerrarModal}>

        <Register></Register>
      <div className="float-end">
        <button type="button" className="btn btn-outline-danger " onClick={cerrarModal}>Cerrar</button>
        
      </div>
        </Modal>
      ):(<div>  <h1>Usuarios</h1>
<button className='btn btn-dark float-start mb-2 ms-3' onClick={abrirModal}>Añadir Usuario</button>
        
        <div className='col-12'>
                
                  
                    <Tabla></Tabla>
                  
        </div>
        </div>)}
    </div>
    );
};


UsuariosC.propTypes = {

};


export default UsuariosC;

import React,{ useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Users from '../pure/tables/Users';
import Register from '../pure/register/register';
import Modal from '../pure/Modal';
import EditUsers from '../pure/forms/Editar/User';
const UsuariosC = () => {
    const [User, setUser] = useState([]);
    const [selectedUser, setselectedUser] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    const [selectedUser2, setselectedUser2] = useState([]);
    const [mostrarModal2, setMostrarModal2] = useState(false);

    const abrirModal = () => {
      setMostrarModal(true);
    };
  
    const cerrarModal = () => {
      setMostrarModal(false);
    };
    const abrirModal2 = () => {
      setMostrarModal2(true);
    };
  
    const cerrarModal2 = () => {
      setMostrarModal2(false);
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
<button className="btn btn-warning ms-2 float-start" onClick={abrirModal2}>Editar</button>
            <div className=''>
            {mostrarModal2 &&(
                      
                      <Modal onClose={cerrarModal2}>
                      <EditUsers></EditUsers>
                <div className="float-end">
                  <button type="button" className="btn btn-outline-danger " onClick={cerrarModal2}>Cerrar</button>
                  
                </div>
                  </Modal>
                  )}   
                    <Tabla></Tabla>
                  
        </div>
        </div>)}
    </div>
    );
};


UsuariosC.propTypes = {

};


export default UsuariosC;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { tareas } from '../../models/Prodructs';
import { NIVEL } from '../../models/Level';
import Provedores from '../pure/tables/Provedores';
import AddProvedor from '../pure/forms/ProvedoresForm';
import { GetProvider } from '../../services/axiosProviders';

const ProvedoresC = () => {

 
function eliminarProvedor(){

}

function agregarProvedor(){
   
}



const Tabla = ()=>{
    return(
       
        <table className='table table-striped table-bordered m-5' style={{width:"100%"}}>
        <thead>
            <tr>
                <th scope='col'>Ruc</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Celular</th>
                <th scope='col'>Correo</th>
                <th scope='col'>Accion</th>
                
            </tr>
        </thead>
        <tbody>
           <Provedores></Provedores>
        </tbody>
        
    </table>
    )
}


    return (
        <>

        <div >
        <h1> Provedores</h1>
            <div className='col-12'>
                    
                      
                        <Tabla></Tabla>
                      
            </div>
            {/**
                                 //?   <TaskForm add={agregarTarea} length={tarea.length}></TaskForm> */}
                                 <AddProvedor></AddProvedor>
        </div>
        </>
    );
};


ProvedoresC.propTypes = {

};


export default ProvedoresC;
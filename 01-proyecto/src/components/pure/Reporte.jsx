import React from 'react';
import { Link } from 'react-router-dom';
const Reporte = () => {
    return (
        <div>
                    <div className='d-flex m-3 gap-3 ms-5'>
        <p style={{fontSize:"25px"}}>Ver reporte:</p>
        <div> <Link className='btn btn-outline-primary' to={"/providers"}>Semanal</Link></div>
        <div> <Link className='btn btn-outline-primary' to={"/providers"}>Mensual</Link></div>
        <div> <Link className='btn btn-outline-primary' to={"/providers"}>Diario</Link></div>
        
        </div>
        </div>
    );
}

export default Reporte;

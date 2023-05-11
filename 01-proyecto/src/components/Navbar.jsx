import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import "../styles/barStyles.css"
const Navbar = ({close}) => {
    const Close = ()=>{
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("RoleId")
      
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <Link className="navbar-brand"> <h1 className='fst-italic fw-bold' style={{color:"#FF9D1A"}}>Zorzal</h1></Link>
    <div className="align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav text-end align-items-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>

        <li className="nav-item">   
          <button className="btn" onClick={()=>Close()}>Cerrar sesion</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;

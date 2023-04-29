import React from 'react';
import {Link, useNavigate} from "react-router-dom"
import "../styles/barStyles.css"
const Navbar = () => {
    
    const Close = ()=>{
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("RoleId")
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <Link className="navbar-brand" >Zorzal</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Mi perfil</Link>
        </li>
        <li className="nav-item">
          <button type='button' className="btn " onClick={()=>{Close()}}>Cerrar sesion</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;

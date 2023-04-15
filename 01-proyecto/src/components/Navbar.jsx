import React from 'react';
import {useNavigate} from "react-router-dom"
import "../styles/barStyles.css"
const Navbar = () => {
    
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <a className="navbar-brand" >Zorzal</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Usuario</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;

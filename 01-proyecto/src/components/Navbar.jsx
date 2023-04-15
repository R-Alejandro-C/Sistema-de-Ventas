import React from 'react';
import {useNavigate} from "react-router-dom"
const Navbar = () => {
    
    
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  
    <a class="navbar-brand" >Zorzal</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Usuario</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;

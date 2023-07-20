import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import "../styles/barStyles.css"
import { GetDetailsUser } from '../services/axiosUsers';
const Navbar = ({close}) => {
  const [selectedUser, setselectedUser] = useState([]);
    const Close = ()=>{
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("RoleId")
        localStorage.removeItem("Id")
        localStorage.removeItem("Nombre")
          setInterval(window.location.reload(), 500  );
     
    }
    let id= localStorage.getItem("Id");
    let idNumer = parseInt(id)
    console.log(idNumer.valueOf);  
useEffect(() => {
  if (localStorage.getItem("Id")) {
   
obtainDetailsUser(idNumer) 
  }
}, [])

    const obtainDetailsUser = (id) => {
      GetDetailsUser(id)
          .then((response) => {
            let data= response.data
            let Nombre = data.name
              setselectedUser(Nombre)
              console.log(Nombre);
          })
          .catch((error) => {
              alert(`algo va mal ${error}`)
          })
          .finally(() => {
              console.log("Final de obtencion de details datos");
              console.log("select", setselectedUser);
          })
  }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <Link className="navbar-brand"> <h1 className='fst-italic fw-bold' style={{color:"red"}}>Footlose</h1></Link>
    <div className="align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav text-end align-items-center">
      <li className="nav-item">
          <Link className="nav-link active" style={{color:"red", marginTop:"1px"}} aria-current="page" href="#">{selectedUser}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"to={"/"}>Inicio</Link>
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

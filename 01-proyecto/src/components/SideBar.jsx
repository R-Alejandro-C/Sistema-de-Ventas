import React, {useState} from 'react';
import {Navigate, Link} from "react-router-dom"
import "../styles/barStyles.css"

const SideBar = () => {
    
    return (
        <div className='sidebar'>
            <ul>
                <li>
                <Link  to={"/"}>Inicio</Link>
                </li>
                <li>
                <Link  to={"/providers"}>Provedores</Link>
                </li>
                <li>
                <Link  to={"/users"}>Usuarios</Link>
                </li>
                <li>
                <Link  to={"/categories"}>Categorias</Link>
                </li>
                <li>
                <Link  to={"/products"}>Productos</Link>
                </li>
   
            </ul>
        </div>
    );
}

export default SideBar;

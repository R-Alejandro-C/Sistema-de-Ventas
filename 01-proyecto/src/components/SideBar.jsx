import React from 'react';
import {Navigate, Link} from "react-router-dom"
import "../styles/barStyles.css"
const SideBar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                <Link  to={"/products"}>Productos</Link>
                </li>
                <li>
                <Link  to={"/products"}>Productos</Link>
                </li>
                <li>
                <Link  to={"/products"}>Productos</Link>
                </li>
                <li>
                <Link  to={"/products"}>Productos</Link>
                </li>
               
                
            </ul>
        </div>
    );
}

export default SideBar;

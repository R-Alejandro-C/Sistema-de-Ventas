import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, Navigate, redirect} from "react-router-dom"
import ProtectedPages from './protectedPages';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/registerPage';
import { ROLES } from '../models/Roles';
import Homepage from '../pages/home/homepage';
import Login from '../components/pure/login/login';
import PropTypes from 'prop-types';
import ProductsC from '../components/container/Provedores';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Provedores from '../components/container/Provedores';
import ProvedoresC from '../components/container/Provedores';
import UsuariosC from '../components/container/Usuarios';
import Categorias from '../components/container/Categorias';
import Productos from '../components/container/Productos';
﻿import { useContext } from "react"
import { UserContext } from '../components/pure/login/login';
const MainRoutes = () => {
    
    console.log(!!localStorage.getItem("TOKEN"));
    const isLoged = useContext(UserContext)
console.log("User "+ isLoged);
    return (
        <Router>
        
        <div>
        
       <Navbar></Navbar>
          <div className='d-flex'>
            <SideBar></SideBar>
            

            <Routes>
     
             <Route element={<ProtectedPages isLogin={!!localStorage.getItem("TOKEN")} redirectTo='/login'></ProtectedPages>}>
                <Route path='/' element={<Homepage></Homepage>}></Route>
                <Route path='/providers' element={<ProvedoresC></ProvedoresC>}></Route>
                <Route path='/users' element={<UsuariosC></UsuariosC>}></Route>
                <Route path='/products' element={<Productos></Productos>}></Route>
                <Route path='/categories' element={<Categorias></Categorias>}></Route>
                </Route>
                <Route element={<ProtectedPages isLogin={!localStorage.getItem("TOKEN")} redirectTo='/'></ProtectedPages>}>
                 <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                 </Route>
                 <Route element={<ProtectedPages isLogin={!!localStorage.getItem("TOKEN") && localStorage.getItem("RoleId")==="1"} redirectTo='/'></ProtectedPages>}>
                 <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                 </Route>
             
            </Routes>
             </div>
          </div>
          
        </Router>
    );
}
MainRoutes.propTypes ={
}
export default MainRoutes;

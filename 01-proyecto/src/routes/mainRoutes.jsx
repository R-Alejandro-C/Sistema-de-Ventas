import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, Navigate, redirect} from "react-router-dom"
import ProtectedPages from './protectedPages';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/registerPage';
import { ROLES } from '../models/Roles';
import Homepage from '../pages/home/homepage';
import Login from '../components/pure/login/login';
import PropTypes from 'prop-types';
import ProductsC from '../components/container/ProductsC';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
const MainRoutes = () => {

    console.log(!!localStorage.getItem("TOKEN"));
   
    return (
        <Router>
        <div>
       <Navbar></Navbar>
          <div className='d-flex'>
            <SideBar></SideBar>
            <div className='content'>

            <Routes>
     
             <Route element={<ProtectedPages isLogin={!!localStorage.getItem("TOKEN")} redirectTo='/login'></ProtectedPages>}>
                
                <Route path='/' element={<Homepage></Homepage>}></Route>
                <Route path='/products' element={<ProductsC></ProductsC>}></Route>
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
          </div>
        </Router>
    );
}
MainRoutes.propTypes ={
}
export default MainRoutes;

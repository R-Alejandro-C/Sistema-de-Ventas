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
const MainRoutes = () => {

    console.log(!!localStorage.getItem("TOKEN"));
   
    return (
        <Router>
            <Routes>
             <Route element={<ProtectedPages isLogin={!!localStorage.getItem("TOKEN")} redirectTo='/login'></ProtectedPages>}>
                <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                <Route path='/' element={<Homepage></Homepage>}></Route>
                <Route path='/products' element={<ProductsC></ProductsC>}></Route>
                </Route>
                 <Route path='/login' element={<LoginPage></LoginPage>}></Route>
             
            </Routes>
        </Router>
    );
}
MainRoutes.propTypes ={
}
export default MainRoutes;

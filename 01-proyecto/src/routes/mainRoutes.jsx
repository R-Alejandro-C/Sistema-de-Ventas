import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, Navigate, redirect} from "react-router-dom"
import ProtectedPages from './protectedPages';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/registerPage';
import { ROLES } from '../models/Roles';
import Homepage from '../pages/home/homepage';
import Login from '../components/pure/login/login';
import PropTypes from 'prop-types';
const MainRoutes = () => {


    let isLogedIn = true


    return (
        <Router>
            <Routes>
   
                <Route element={<Login redirectTo='/login'></Login>}>
                <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                <Route path='/' element={<Homepage></Homepage>}></Route>

                </Route>
            </Routes>
        </Router>
    );
}
MainRoutes.propTypes ={
loger: PropTypes.bool.isRequired
}
export default MainRoutes;

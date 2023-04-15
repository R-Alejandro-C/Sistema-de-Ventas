import React, { useState, useEffect } from 'react';
import { login } from '../services/axiosLoginService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email("Formato de mail invalido").required("Email es requerido"),
        password: Yup.string().required("Contraseña es requirda")
    }
)
const AxiosCrudExample = () => {

const authUser = (username, password)=>{
    login("72926903","123")
    .then((response)=>{
        alert(JSON.stringify(response.headers))
    })
    .catch((error)=>{
        alert(error)
    })
    .finally(()=>{
        console.log("Login completed");
    })
}




    return (
        <div> <button onClick={authUser}>hoas</button></div>
    
    );
}

export default AxiosCrudExample;

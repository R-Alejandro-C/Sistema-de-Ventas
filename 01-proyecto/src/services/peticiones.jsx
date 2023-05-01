import React, { useState, useEffect } from 'react';
import { login } from '../services/axiosLoginService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { registerProduct } from './axiosProductService';
const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email("Formato de mail invalido").required("Email es requerido"),
        password: Yup.string().required("Contraseña es requirda")
    }
)
const AxiosCrudExample = () => {

    const createProduct = (name, categoriesId, quantity) => {
        registerProduct(name, categoriesId, quantity)
            .then((response) => {
                console.log("usuario creado", response.data);
                alert("Usuario creado")
            })
            .catch((error) => {
                alert("Ocurrio un error, ");
                console.log(error);
               
            })
            .finally(() => {
                console.log("Fin de creacion de usuario");
            })
    }





    return (
        <div> <button onClick={()=>createProduct("Inca Cola", 1, 10)}>hoas</button></div>
    
    );
}

export default AxiosCrudExample;

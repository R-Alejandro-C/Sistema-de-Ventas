import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Navigate, Outlet, useNavigate} from "react-router-dom"
import { login } from '../../../services/axiosLoginService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import RegisterPage from '../../../pages/auth/registerPage';
import Homepage from '../../../pages/home/homepage';



const Login = ({isLogin, children, redirectTo="/", ROL}) => {
const [isLoged, setisLoged] = useState(false);

const authUser = (values)=>{
    login(values.username, values.password)
    .then((response)=>{
        console.log(JSON.stringify(response.status));
        if (JSON.stringify(response.data.token)) {
            setisLoged(!isLoged)
            console.log(response.data);
            localStorage.setItem("TOKEN", JSON.stringify(response.data.token))
            sessionStorage.setItem("TOKEN", JSON.stringify(response.data.token))
            alert(JSON.stringify(response.data.token))
            localStorage.setItem("RoleId", JSON.stringify(response.data.user.roleId))
            sessionStorage.setItem("RoleId", JSON.stringify(response.data.user.roleId))
            
        } else {
            alert("Usuario y/o contraseña incorrecta");
        }

    })
    .catch((error)=>{
        alert("ocurrio un error", error)
        console.log(values.username);
        console.log(values.password);
        console.log("----------------------");
        console.log(error);
        
    })
    .finally((response)=>{
        console.log("Login completed");
        
    })
    
console.log(isLoged);
}


const Navigate = useNavigate()

console.log(localStorage.getItem("TOKEN"));
const initialCredentials = {
    username: "",
    password: ""
}

    
    return (

        isLoged ? (Navigate("/")):(<div>
        <div className='d-flex justify-content-center align-align-items-center'>
            

        <Formik initialValues={initialCredentials} 
        
        onSubmit={async (values) => {
            authUser(values)

        }}>
{/** 
*             { props =>{
            const{
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handBluer
            } = props
            return(...
*/}
 
{({      values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handBluer})=>(
                    <div className='justify-content-center d-flex card m-5 p-5'> 
                    <div className='d-flex justify-content-center'>
                   
                    </div>
                    <div className='card-body d-flex justify-content-center align-items-center'>
                    <Form>
                        <div  className="mb-3">
                    <label htmlFor='username' className='form-label'>Correo electronico</label>
                    <Field id="username" type="text" name="username" placeholder="prueba@gmail.com"  className="form-control" />
                    {
                        errors.username && touched.username && (
           
                            <ErrorMessage name="username" component={"div"}></ErrorMessage>
                        )
                    }
                    </div>
                    <label htmlFor='password'  className='form-label'>Email</label>
                    <Field id="password" type="password" name="password" placeholder="password" className="form-control"/>
                    {
                        errors.password && touched.password && (
                            <div className='error'>
                                <p>{errors.password}</p>
                            </div>
                        )
                    }
                    
                    <button type="submit" className='btn btn-primary mt-3 w-100'>
                        Ingresar
                    </button>
                </Form>
                </div>
                </div>
                )}
         
        </Formik>
        </div>
        </div>)
    );
}


Login.propTypes = {
};


export default Login;

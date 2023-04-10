import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/axiosLoginService';
import { Formik, Field, Form, ErrorMessage } from 'formik';



const Login = () => {

const authUser = (values)=>{
    login(values.email, values.password)
    .then((response)=>{
        alert(JSON.stringify(response.data))
    })
    .catch((error)=>{
        alert("ocurrio un error", error)
    })
    .finally(()=>{
        console.log("Login completed");
    })
}

const initialCredentials = {
    email: "",
    password: ""
}
    return (
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
                    <img src='https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454' style={{width:"6rem"}}/> 
                    </div>
                    <div className='card-body p-5 d-flex justify-content-center align-items-center'>
                    <Form>
                        <div  class="mb-3">
                    <label htmlFor='email' className='form-label'>Correo electronico</label>
                    <Field id="email" type="email" name="email" placeholder="prueba@gmail.com"  className="form-control" />
                    {
                        errors.email && touched.email && (
           
                            <ErrorMessage name="email" component={"div"}></ErrorMessage>
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
                    <button type="submit" className='btn btn-primary m-2 w-100'>
                        Submit
                    </button>
                    {isSubmitting? (<p>Loguea tus credenciales</p>):null}
                    <p>¿No tienes cuenta?</p>
                     <p>Crear cuenta</p>
                </Form>
                </div>
                </div>
                )}
         
        </Formik>
        </div>
    );
};


Login.propTypes = {

};


export default Login;

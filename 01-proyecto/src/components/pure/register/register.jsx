import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../services/axiosRegisterService';
import { Formik, Field, Form, ErrorMessage } from 'formik';



const Register = () => {

    const createUser = (values) => {
        register( values.DNI, values.password, values.name, values.lastname, values.email,ROLREF.current.value,values.job)
            .then((response) => {
                console.log("usuario creado", response.data);
                console.log(values.name +" "+ROLREF.current.value+" "+values.job+"");
                alert("Usuario creado")
            })
            .catch((error) => {
                alert("Ocurrio un error, ");
                console.log(error);
                console.log(values.name + " " +values.DNI+" "+ values.password+" "+values.email+" "+values.Rol+" "+values.job+"");
            })
            .finally(() => {
                console.log("Fin de creacion de usuario");
            })
    }


    const ROLREF = useRef(null)

    const initialCredentials = {
        name: "",
        lastname: "",
        DNI: "",
        email: "",
        password: "",
        Rol: 1,
        job: ""
    }
    return (
        <div className='d-flex justify-content-center align-align-items-center m-lg-2'>


            <Formik initialValues={initialCredentials}

                onSubmit={async (values) => {
                    createUser(values)

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

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handBluer }) => (
                    <div className='justify-content-center d-flex card p-lg-2 m-lg-3'>
                        <div className='d-flex justify-content-center'>
                    
                        </div>
                        <div className='card-body p-lg-2 d-flex justify-content-center align-items-center'>
                            <Form>
                                <div className="mb-lg-3 d-flex align-items-center g-5">
                                    <div className='mb-lg-3 me-lg-2'>
                                        <label htmlFor='name' className='form-label m-lg-2'>Nombre</label>
                                        <Field id="name" type="text" name="name" placeholder="Nombre" className="form-control" />
                                        {
                                            errors.name && touched.name && (

                                                <ErrorMessage name="name" component={"div"}></ErrorMessage>
                                            )
                                        }
                                    </div>
                                    <div className='mb-lg-3 me-lg-2'>
                                        <label htmlFor='lastname' className='form-label m-2'>Apellido</label>
                                        <Field id="lastname" type="text" name="lastname" placeholder="Apellido" className="form-control" />
                                        {
                                            errors.lastname && touched.lastname && (

                                                <ErrorMessage name="lastname" component={"div"}></ErrorMessage>
                                            )
                                        }
                                        </div>
                                        <div className='mb-lg-3 me-lg-2'>
                                            <label htmlFor='email' className='form-label m-2'>Correo</label>
                                            <Field id="email" type="text" name="email" placeholder="Correo" className="form-control" />
                                            {
                                                errors.email && touched.email && (

                                                    <ErrorMessage name="email" component={"div"}></ErrorMessage>
                                                )
                                            }
                                        </div>
                                        
                                        </div>
                                        <div className="mb-lg-3 d-flex align-items-center justify-content-center">
                                            <div className='mb-lg-3 me-lg-2'>
                                                <label htmlFor='DNI' className='form-label m-lg-2'>DNI</label>
                                                <Field id="DNI" type="text" name="DNI" placeholder="DNI" className="form-control" />
                                                {
                                                    errors.DNI && touched.DNI && (

                                                        <ErrorMessage name="DNI" component={"div"}></ErrorMessage>
                                                    )
                                                }
                                            </div>
                                            <div className='mb-lg-3 me-lg-2'>
                                                <label htmlFor='ROL' className='form-label m-2'>Rol</label>
                                                <select id="ROL" type="text" name="ROL" className="form-select" ref={ROLREF}>
                                                <option selected value={2}>
                                                Vendedor
                                                </option>
                                                <option value={1}>
                                                ADMIN
                                                </option>

                                                </select>
                                                {
                                                    errors.ROL && touched.ROL && (

                                                        <ErrorMessage name="ROL" component={"div"}></ErrorMessage>
                                                    )
                                                }
                                            </div>
                                            <div className='mb-lg-3'>
                                                <label htmlFor='password' className='form-label m-2'>Contraseña</label>
                                                <Field id="password" type="password" name="password" placeholder="Contraseña" className="form-control" />
                                                {
                                                    errors.password && touched.password && (

                                                        <ErrorMessage name="password" component={"div"}></ErrorMessage>
                                                    )
                                                }
                                            </div>
                                        </div>
                                <label htmlFor='job' className='form-label'>Trabajo</label>
                                <Field id="job" type="text" name="job" placeholder="Trabajo" className="form-control" />
                                {
                                    errors.job && touched.job && (
                                        <div className='error'>
                                            <p>{errors.password}</p>
                                        </div>
                                    )
                                }
                                <button type="submit" className='btn btn-primary m-2 w-100'>
                                    Crear nuevo usuario
                                </button>
                            </Form>
                        </div>
                    </div>
                )}

            </Formik>
        </div>
    );
};


Register.propTypes = {

};


export default Register;

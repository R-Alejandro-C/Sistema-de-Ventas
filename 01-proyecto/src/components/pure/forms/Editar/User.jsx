import React, { useRef, useState, useEffect } from 'react';
import { EditUser, GetDetailsUser, GetUser } from '../../../../services/axiosUsers';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const EditUsers = () => {
    const [User, setUser] = useState([]);
    const [selectedUser, setselectedUser] = useState([]);

    useEffect(() => {
    getAllUsers()  
    }, [])
    
    const getAllUsers =()=>{
        GetUser()
        .then((response)=>{
            setUser(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
        alert("ocurrio un error")
        console.log(error);
        })
    }

    const obtainDetailsUser = (id) => {
        GetDetailsUser(id)
            .then((response) => {
                setselectedUser(response.data)
                console.log(setselectedUser);
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
            .finally(() => {
                console.log("Final de obtencion de details datos");
                console.log("select", setselectedUser);
            })
    }

    const editUser = (values, id) => {
        EditUser( values.DNI, values.password, values.name, values.lastname, values.email,ROLREF.current.value,true,IDREF.current.value)
            .then((response) => {
                console.log("usuario creado", response.data);
                console.log(values.name +" "+ROLREF.current.value+" "+values.job+"");
                alert("Usuario modificado")
            })
            .catch((error) => {
                alert("Ocurrio un error, ");
                console.log(error);
                console.log(values.name + " " +values.DNI+" "+ values.password+" "+values.email+" "+IDREF.current.value+"");
            })
            .finally(() => {
                console.log("Fin de creacion de usuario");
            })
    }


    const ROLREF = useRef(null)
    const IDREF = useRef(null)
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
                    editUser(values)

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
                    <div className=' card justify-content-center d-flex p-lg-2 m-lg-3'>
                        <div className='d-flex justify-content-center'>
                    
                        </div>
                        <div className=' p-lg-2 d-flex justify-content-center align-items-center'>
                            <Form>
                                
                            <label htmlFor='ID' className='form-label m-2'>Editar</label>
                                        <select id="ID" type="text" name="ID" className="form-select" ref={IDREF}>
                                            {User.map((User, index) => (

                                                <option key={index} products={GetDetailsUser(User.id)} value={User.id}>
                                                    {User.DNI}
                                                </option>

                                            ))}
                                        </select>
                                
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
                                
                                <button type="submit" className='btn btn-primary w-100'>
                                    Editar Usuario
                                </button>
                            </Form>
                        </div>
                    </div>
                )}

            </Formik>
        </div>
    );
};


EditUsers.propTypes = {

};


export default EditUsers;

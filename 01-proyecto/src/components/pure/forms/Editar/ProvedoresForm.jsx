import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { CreateProvider, EditProvider, GetProvider, GetDetailsProviders } from '../../../../services/axiosProviders';

const EditProvedor = () => {
    const [providers, setproviders] = useState([]);
    const [selectedProvider, setselectedProvider] = useState([]);
    useEffect(() => {

        getAllProviders();
    }, []);

    const getAllProviders = () => {
        GetProvider()
            .then((response) => {
                setproviders(response.data)
                console.log(providers);
            })
            .catch((error) => {
                alert("ocurrio un error")
                console.log(error);
            })
    }
    const obtainDetailsProvider = (id) => {
        GetDetailsProviders(id)
            .then((response) => {
                setselectedProvider(response.data)
                console.log(setselectedProvider);
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
            .finally(() => {
                console.log("Final de obtencion de details datos");
                console.log("select", setselectedProvider);
            })
    }

   const  editProvider =(values)=>{
    EditProvider(values.RUC, values.name, values.phone, values.email, true, IDREF.current.value)
    .then((response)=>{
        console.log(response.data);
        alert("Provedor creado")
    })
    }
    const initialCredentials = {
        RUC: "",
        name: "",
        phone: "",
        email: ""
    }
    const IDREF = useRef()
    return (

        <div className='d-flex justify-content-center align-align-items-center m-lg-2'>


        <Formik initialValues={initialCredentials}

            onSubmit={async (values) => {
                editProvider(values)

            }}>
            

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
                                            {providers.map((providers, index) => (

                                                <option key={index} products={GetDetailsProviders(providers.id)} value={providers.id}>
                                                    {providers.RUC}
                                                </option>

                                            ))}
                                        </select>
                            <div className="mb-lg-3 d-flex align-items-center g-5">
                            <div className='mb-lg-3 me-lg-2'>
                                    <label htmlFor='RUC' className='form-label m-lg-2'>RUC</label>
                                    <Field id="RUC" type="text" name="RUC" placeholder="RUC" className="form-control" />
                                    {
                                        errors.RUC && touched.RUC && (

                                            <ErrorMessage name="RUC" component={"div"}></ErrorMessage>
                                        )
                                    }
                                </div>
                                <div className='mb-lg-3 me-lg-2'>
                                    <label htmlFor='name' className='form-label m-lg-2'>Nombre</label>
                                    <Field id="name" type="text" name="name" placeholder="Nombre" className="form-control" />
                                    {
                                        errors.name && touched.name && (

                                            <ErrorMessage name="name" component={"div"}></ErrorMessage>
                                        )
                                    }
                                </div>
                                
                                    
                                    </div>
                                    <div className="mb-lg-3 d-flex align-items-center g-5">
                                <div className='mb-lg-3 me-lg-2'>
                                    <label htmlFor='phone' className='form-label m-2'>phone</label>
                                    <Field id="phone" type="text" name="phone" placeholder="phone" className="form-control" />
                                    {
                                        errors.phone && touched.phone && (

                                            <ErrorMessage name="phone" component={"div"}></ErrorMessage>
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
                            <button type="submit" className='btn btn-primary w-100'>
                                Crear nuevo usuario
                            </button>
                        </Form>
                    </div>
                </div>
            )}

        </Formik>
    </div>
);
}
EditProvedor.propTypes = {
    EditTarea: PropTypes.func.isRequired
};

export default EditProvedor;
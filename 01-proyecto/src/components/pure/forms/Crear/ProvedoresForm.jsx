import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CreateProvider } from '../../../../services/axiosProviders';

const AddProvedor = () => {

   const  CreateProviders =(values)=>{
    CreateProvider(values.RUC, values.name, values.phone, values.email)
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

    return (

        <div className='d-flex justify-content-center align-align-items-center m-lg-2'>


        <Formik initialValues={initialCredentials}

            onSubmit={async (values) => {
                CreateProviders(values)

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
AddProvedor.propTypes = {
    addTarea: PropTypes.func.isRequired
};

export default AddProvedor;
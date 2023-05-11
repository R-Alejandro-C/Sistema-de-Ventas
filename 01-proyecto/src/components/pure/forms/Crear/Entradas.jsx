import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { registerCategories } from '../../../../services/axiosCategoriesService';
import { Formik, Field, Form, ErrorMessage } from 'formik';



const AddEntrada = () => {

    const createCategories = (values) => {
        registerCategories(values.name)
            .then((response) => {
                console.log("usuario creado", response.data);
                console.log(values.name);
                alert("Categoria creada")
            })
            .catch((error) => {
                alert("Ocurrio un error, ");
                console.log(error);
              })
    }


    const initialCredentials = {
        name: "",
    }


    return (
        <div className='m-5  '>


            <Formik initialValues={initialCredentials}

                onSubmit={async (values) => {
                    createCategories(values)

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
                                                   </div>
                                
                                <button type="submit" className='btn btn-primary m-2 w-100'>
                                    Crear nuevo categoria
                                </button>
                            </Form>
                        </div>
                    </div>
                )}

            </Formik>
        </div>
    );
};


AddEntrada.propTypes = {

};


export default AddEntrada;

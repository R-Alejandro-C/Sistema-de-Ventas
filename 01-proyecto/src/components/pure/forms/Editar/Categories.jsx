import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { EditCategories, GetCategories, GetDetailsCategories } from '../../../../services/axiosCategoriesService';
import { Formik, Field, Form, ErrorMessage } from 'formik';



const EditCategorias = (props) => {
const IDREF = useRef()
const [Categories, setCategories] = useState([]);
    const [selectedCategories, setselectedCategories] = useState([]);
    useEffect(() => {

        getAllCategoriess();
    }, []);

    const getAllCategoriess = () => {
        GetCategories()
            .then((response) => {
                setCategories(response.data)
                console.log(Categories);
            })
            .catch((error) => {
                alert("ocurrio un error")
                console.log(error);
            })
    }
    const obtainDetailsCategories = (id) => {
        GetDetailsCategories(id)
            .then((response) => {
                setselectedCategories(response.data)
                console.log(setselectedCategories);
            })
            .catch((error) => {
                alert(`algo va mal ${error}`)
            })
            .finally(() => {
                console.log("Final de obtencion de details datos");
                console.log("select", setselectedCategories);
            })
    }

    const editCategories = (values, id) => {
        EditCategories(values.name, IDREF.current.value)
            .then((response) => {
                console.log("usuario creado", response.data);
                console.log(values.name);
                alert("Categoria creada")
            })
            .catch((error) => {
                alert("Ocurrio un error, ");
                console.log(""+values.name+ " "+ IDREF.current.value);
                console.log(error);
              })
    }


    const initialCredentials = {
        name: "",
    }


    return (
        <div className='m-5'>
            <Formik initialValues={initialCredentials}

                onSubmit={async (values) => {
                    editCategories(values)

                }}>
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
                                        <label htmlFor='name' className='form-label m-lg-2'>Nuevo</label>
                                        <Field id="name" type="text" name="name" placeholder="Nombre" className="form-control" />
                                        {
                                            errors.name && touched.name && (

                                                <ErrorMessage name="name" component={"div"}></ErrorMessage>
                                            )
                                        }
                                    </div>
                                    <div className='mb-lg-3 me-lg-2'>
                                        <label htmlFor='ID' className='form-label m-2'>Actual</label>
                                            <select  id="ID" type="text" name="ID" className="form-select" ref={IDREF}>
                                        {Categories.map((Categories, index) => (
                                          
                                                <option  key={index} products ={GetDetailsCategories(Categories.id)} value={Categories.id}>
                                                    {Categories.name}
                                                </option>
                                            
                                        ))}
                                            </select>

                                        {
                                            errors.ROL && touched.ROL && (

                                                <ErrorMessage name="ROL" component={"div"}></ErrorMessage>
                                            )
                                        }
                                    </div>
                                                   </div>
                                
                                <button type="submit" className='btn btn-primary m-2 w-100'>
                                    Editar categoria
                                </button>
                            </Form>
                        </div>
                    </div>
                )}

            </Formik>
        </div>
    );
};


EditCategorias.propTypes = {

};


export default EditCategorias;

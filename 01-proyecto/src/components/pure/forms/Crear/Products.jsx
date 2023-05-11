import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { registerProduct} from '../../../../services/axiosProductService';
import { GetCategories, GetDetailsCategories } from '../../../../services/axiosCategoriesService';
import { Formik, Field, Form, ErrorMessage } from 'formik';


const AddProduct = () => {
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

    const createProduct = (values) => {
        registerProduct(values.name, IDREF.current.value, values.quantity)
            .then((response) => {
                console.log("usuario creado", response.data);
                console.log(values.name + " " + IDREF.current.value + ""+values.quantity);
                alert("Producto creado")
            })
            .catch((error) => {
                alert("Ocurrio un error, ");
                console.log(error);
                console.log(values.name + " id " + IDREF.current.value + " cantidad"+values.quantity);
               
            })
            .finally(() => {
                console.log("Fin de creacion de usuario");
            })
    }


    const IDREF = useRef(null)

    const initialCredentials = {
        name: "",
        categoriesId: null,
        quantity: 0,
    }
    return (
        <div className='d-flex justify-content-center align-align-items-center m-lg-2'>


            <Formik initialValues={initialCredentials}

                onSubmit={async (values) => {
                    createProduct(values)

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
                                <div className="mb-lg-3  align-items-center row g-0 text-center">
                                    <div className='me-2 col-sm-6 col-md-9'>
                                        <label htmlFor='name' className='form-label m-lg-2'>Nombre</label>
                                        <Field id="name" type="text" name="name" placeholder="Nombre" className="form-control" />
                                        {
                                            errors.name && touched.name && (

                                                <ErrorMessage name="name" component={"div"}></ErrorMessage>
                                            )
                                        }
                                    </div>
                                    <div className='col-6 col-md-2'>
                                        <label htmlFor='quantity' className='form-label m-2'>Cantidad</label>
                                        <Field id="quantity" type="text" name="quantity" placeholder="####" className="form-control" />
                                        {
                                            errors.quantity && touched.quantity && (

                                                <ErrorMessage name="quantity" component={"div"}></ErrorMessage>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="mb-lg-3 align-items-center justify-content-center">

                                    <div className='mb-lg-3 me-lg-2'>
                                        <label htmlFor='ID' className='form-label m-2'>Categoria</label>
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

                                <button type="submit" className='btn btn-primary w-100'>
                                    Crear producto
                                </button>
                            </Form>
                        </div>
                    </div>
                )}

            </Formik>
        </div>
    );
};


AddProduct.propTypes = {

};


export default AddProduct;

import React, { useRef, useState, useEffect } from 'react';
import { RegisterEntrys } from '../../../../services/axiosEntryService';
import { Formik, Form, ErrorMessage } from 'formik';
import { GetProduct, GetDetailsProduct } from '../../../../services/axiosProductService'; 


const AddEntrada = () => {
const IDREF = useRef()
const [products, setproducts] = useState([]);
const [selectedProduct, setselectedProduct] = useState([]);
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resultadoRef = useRef(null);
  
    useEffect(() => {
      const multiplicar = () => {
        const num1 = parseFloat(num1Ref.current.value);
        const num2 = parseFloat(num2Ref.current.value);
        resultadoRef.current.innerText = num1 * num2;
      };
  
      num1Ref.current.addEventListener('input', multiplicar);
      num2Ref.current.addEventListener('input', multiplicar);
  
      return () => {

      };
    }, []);

useEffect(() => {

    getAllproducts();
}, []);


const getAllproducts = () => {
    GetProduct()
        .then((response) => {
            setproducts(response.data)
            console.log(products);
        })
        .catch((error) => {
            alert("ocurrio un error")
            console.log(error);
        })
}
const obtainDetailsProduct = (id) => {
    GetDetailsProduct(id)
        .then((response) => {
            setselectedProduct(response.data)
            console.log(setselectedProduct);
        })
        .catch((error) => {
            alert(`algo va mal ${error}`)
        })
        .finally(() => {
            console.log("Final de obtencion de details datos");
            console.log("select", setselectedProduct);
        })
}
    const createEntrys = (values) => {
        RegisterEntrys(1,IDREF.current.value, parseFloat(num1Ref.current.value), parseFloat(num2Ref.current.value), resultadoRef.current.innerText)
            .then((response) => {
                console.log("usuario creado", response.data);
                console.log(values.name);
                alert("Compra realizada con exito")
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            })
    }


    const initialCredentials = {
        productId: null,
        quantity: null,
        unitPrice: null,
        subTotal: null
    }


    return (
        <div className='me-2 mt-4 mb-4'>


            <Formik initialValues={initialCredentials}

                onSubmit={async (values) => {
                    createEntrys(values)

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
                    <div className='justify-content-center d-flex card '>
                        <div className='d-flex justify-content-center'>

                        </div>
                        <div className='card-body p-lg-2 d-flex justify-content-center align-items-center'>
                            <Form>
                                <div className="mb-lg-3 align-items-center justify-content-center">

                                    <div className=''>
                                        <label htmlFor='ID' className='form-label'>Prodructo</label>
                                        <select id="ID" type="text" name="ID" className="form-select" ref={IDREF}>
                                            {products.map((products, index) => (

                                                <option key={index} products={GetDetailsProduct(products.id)} value={products.id}>
                                                    {products.name}
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
                                <div className="mb-lg-3 d-flex align-items-center g-5">
                                    <div className='mb-lg-3 me-lg-2'>
                                        <label htmlFor='quantity' className='form-label m-lg-2'>Cantidad</label>
                                        <input ref={num1Ref} id="quantity" type="text" name="quantity" placeholder="Cantidad" className="form-control"/>
                                        {
                                            errors.name && touched.name && (

                                                <ErrorMessage name="quantity" component={"div"}></ErrorMessage>
                                            )
                                        }
                                    </div>
                                    <div className='mb-lg-3 me-lg-2'>
                                        <label htmlFor='unitPrice' className='form-label m-lg-2'>Precio Unitario</label>
                                        <input ref={num2Ref} id="unitPrice" type="text" name="unitPrice" placeholder="Precio Unitario" className="form-control" />
                                        {
                                            errors.name && touched.name && (

                                                <ErrorMessage name="unitPrice" component={"div"}></ErrorMessage>
                                            )
                                        }
                                    </div>
                                    <div className='me-lg-2'>
                                        <label htmlFor='subTotal' className='form-label m-lg-2'>Total</label>
                                        <p ref={resultadoRef} id="subTotal" type="number" name="subTotal" className="form-control" disabled style={{height:"37.33px"}} />
                                       </div>
                                </div>

                                <button type="submit" className='btn btn-primary m-2 w-75'>
                                    Generar Venta
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

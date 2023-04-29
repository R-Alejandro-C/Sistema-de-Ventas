import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { NIVEL } from "../../../models/Level";
import { tareas } from '../../../models/Prodructs.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const AddProvedor = ({ addTarea }) => {

    const initialValues = {
        nombre: "",
        descripcion: "",
        completado: false,
        nivel: NIVEL.normal
    }

    const addTaskSchema = Yup.object().shape(
        {
            nombre: Yup.string().required("El nombre es requerido").max(10, "El nombre no puede tener mas de 10 palabras"),
            descripcion: Yup.string(),
            nivel: Yup.string()
        }
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={addTaskSchema}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    addTarea(values);
                });
            }}
        >
            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handBluer }) => (
                <Form className="justify-content-center align-items-center mb-4">
                     <div className='d-flex'>
                    <Field id="nombre" type="nombre" name="nombre" placeholder="nombre" className='form-control form-control-lg  m-2'/>
                    {
                        errors.nombre && touched.nombre && (

                            <ErrorMessage name="nombre" component={"p"}></ErrorMessage>
                        )
                    }
                   
                    <Field id="descripcion" type="descripcion" name="descripcion" placeholder="descripcion" className='form-control form-control-lg  m-2'/>
                    {
                        errors.descripcion && touched.descripcion && (

                            <ErrorMessage name="descripcion" component={"p"}></ErrorMessage>
                        )
                    }
                    <Field as="select" name="nivel" className='form-control form-control-lg m-2'>
                        <option value={NIVEL.normal}>normal</option>
                        <option value={NIVEL.bloqueante}>bloqueante</option>
                        <option value={NIVEL.urgente}>urgente</option>
                    </Field>

                    {
                        errors.nivel && touched.nivel && (

                            <ErrorMessage name="nivel" component={"p"}></ErrorMessage>
                        )
                    }
                    </div>
                    <button type="submit" className='btn btn-primary btn-lg m-2'>
                        Agregar tarea
                    </button>
                </Form>
            )}


        </Formik>
    );
}
AddProvedor.propTypes = {
    addTarea: PropTypes.func.isRequired
};

export default AddProvedor;
import React, {useRef, useState, useEffect} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { EditUser, GetUser, GetDetailsUser } from '../../services/axiosUsers';

const Profile = () => {
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
      EditUser()
          .then((response) => {
              console.log("usuario creado", response.data);
             alert("Usuario modificado")
          })
          .catch((error) => {
              alert("Ocurrio un error, ");
              console.log(error);
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
<div>
        <div style={{marginLeft:"13rem"}}>
        <div className='d-flex justify-content-center align-align-items-center'>
            

        <Formik initialValues={initialCredentials} 
        
        onSubmit={async (values) => {
           editUser(values)

        }}>
 
{({      values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handBluer})=>(
                    <div className='justify-content-center d-flex card m-5 p-5'> 
                    <div className='d-flex justify-content-center'>
                   
                    </div>
                    <div className='card-body d-flex justify-content-center align-items-center'>
                    <Form>
                        <div  className="mb-3">
                    <label htmlFor='username' className='form-label'>Usuario</label>
                    <Field id="username" type="text" name="username" placeholder="prueba@gmail.com"  className="form-control" />
                    {
                        errors.username && touched.username && (
           
                            <ErrorMessage name="username" component={"div"}></ErrorMessage>
                        )
                    }
                    </div>
                    <label htmlFor='password'  className='form-label'> Nueva Contraseña</label>
                    <Field id="password" type="password" name="password" placeholder="password" className="form-control"/>
                    {
                        errors.password && touched.password && (
                            <div className='error'>
                                <p>{errors.password}</p>
                            </div>
                        )
                    }
                    
                    <button type="submit" className='btn btn-primary mt-3 w-100'>
                        Corregir
                    </button>
                    
                </Form>
                </div>
                </div>
                )}
         
        </Formik>
        </div>
        </div>
        </div>
        )
    
}


Profile.propTypes = {
};


export default Profile;

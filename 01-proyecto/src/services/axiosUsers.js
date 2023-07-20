import axios from "axios";


export const GetUser = () => {
    return axios.get("http://localhost:4200/users")

}

export const GetDetailsUser = (id)=>{
    return axios.get(`http://localhost:4200/users/${id}`)
}


export const DeleteUser = (id)=>{
    return axios.delete(`http://localhost:4200/users/${id}`)
}

export const EditUser = (DNI, password, name, lastname, email, roleId, status, id)=>{
    let body = {
        name:name,
        DNI: DNI,
        password: password,
        lastname: lastname,
        email: email,
        roleId: roleId,
        status: status,
        
    }
    return axios.patch(`http://localhost:4200/users/${id}`, body)
}

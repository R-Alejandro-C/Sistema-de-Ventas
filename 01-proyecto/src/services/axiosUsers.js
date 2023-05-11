import axios from "axios";


export const GetUser = () => {
    return axios.get("https://project-system-logistic-production.up.railway.app/users")

}

export const GetDetailsUser = (id)=>{
    return axios.get(`https://project-system-logistic-production.up.railway.app/users/${id}`)
}


export const DeleteUser = (id)=>{
    return axios.delete(`https://project-system-logistic-production.up.railway.app/users/${id}`)
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
    return axios.patch(`https://project-system-logistic-production.up.railway.app/users/${id}`, body)
}

import axios from "axios";

export const register = (DNI, password, name, lastname, email, roleId, job)=>{
    let body = {
        name:name,
        job:job,
        DNI: DNI,
        password: password,
        lastname: lastname,
        email: email,
        roleId: roleId,
        
    }
    return axios.post("http://localhost:4200/users", body)
}

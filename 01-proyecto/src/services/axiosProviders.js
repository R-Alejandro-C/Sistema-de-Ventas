import axios from "axios";

export const CreateProvider = (RUC, name, phone, email) => {
    let body = {
        RUC: RUC, 
        name: name,
        phone: phone,
        email: email
    }
    return axios.post("http://localhost:4200/providers", body)
}
export const EditProvider = (RUC, name, phone, email, status, id) => {
    let body = {
        RUC: RUC, 
        name: name,
        phone: phone,
        email: email,
        status:status,
    }


return axios.patch(`http://localhost:4200/providers/${id}`, body)

}
export const GetProvider = () => {
    return axios.get("http://localhost:4200/providers")

}

export const GetDetailsProviders = (id)=>{
    return axios.get(`http://localhost:4200/providers/${id}`)
}
export const DeleteProviders = (id)=>{
    return axios.delete(`http://localhost:4200/providers/${id}`)
}
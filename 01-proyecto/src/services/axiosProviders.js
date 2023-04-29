import axios from "axios";

export const CreateProvider = (Ruc, name, phone, email) => {
    let body = {
        Ruc: Ruc, 
        name: name,
        phone: phone,
        email: email
    }


    return axios.post("https://project-system-logistic-production.up.railway.app/providers", body)

}

export const GetProvider = () => {
    return axios.get("https://project-system-logistic-production.up.railway.app/providers")

}

export const GetDetailsProviders = (id)=>{
    return axios.get(`https://project-system-logistic-production.up.railway.app/providers/${id}`)
}
export const DeleteProviders = (id)=>{
    return axios.delete(`https://project-system-logistic-production.up.railway.app/providers/${id}`)
}
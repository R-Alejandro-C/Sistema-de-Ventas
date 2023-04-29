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
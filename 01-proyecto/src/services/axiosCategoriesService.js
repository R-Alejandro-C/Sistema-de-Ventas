import axios from "axios";

export const registerCategories = (name)=>{
    let body = {
        name:name
    }
    return axios.post("https://project-system-logistic-production.up.railway.app/categories", body)
}

export const GetCategories = () => {
    return axios.get("https://project-system-logistic-production.up.railway.app/categories")

}

export const GetDetailsCategories = (id)=>{
    return axios.get(`https://project-system-logistic-production.up.railway.app/categories/${id}`)
}
export const DeleteCategories = (id)=>{
    return axios.delete(`https://project-system-logistic-production.up.railway.app/categories/${id}`)
}
import axios from "axios";

export const registerProduct = (name, categoryId, quantity)=>{
    let body = {
        name:name,
        categoryId:categoryId,
        quantity: quantity
        
    }
    return axios.post("https://project-system-logistic-production.up.railway.app/products", body)
}

export const GetProduct = () => {
    return axios.get("https://project-system-logistic-production.up.railway.app/products")

}

export const GetDetailsProduct = (id)=>{
    return axios.get(`hhttps://project-system-logistic-production.up.railway.app/products/${id}`)
}
export const DeleteProduct = (id)=>{
    return axios.delete(`https://project-system-logistic-production.up.railway.app/products/${id}`)
}
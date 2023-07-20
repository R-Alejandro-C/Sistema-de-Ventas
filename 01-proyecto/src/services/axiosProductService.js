import axios from "axios";

export const registerProduct = (name, categoryId, quantity)=>{
    let body = {
        name:name,
        categoryId:categoryId,
        quantity: quantity
        
    }
    return axios.post("http://localhost:4200/products", body)
}

export const GetProduct = () => {
    return axios.get("http://localhost:4200/products")

}

export const GetDetailsProduct = (id)=>{
    return axios.get(`hhttp://localhost:4200/products/${id}`)
}
export const DeleteProduct = (id)=>{
    return axios.delete(`http://localhost:4200/products/${id}`)
}

export const EditProduct = (name, categoryId, quantity,id)=>{
    let body = {
        name:name,
        categoryId:categoryId,
        quantity: quantity
        
    }
    return axios.patch(`http://localhost:4200/products/${id}`, body)
}
import axios from "axios";

export const registerCategories = (name)=>{
    let body = {
        name:name
    }
    return axios.post("http://localhost:4200/categories", body)
}

export const GetCategories = () => {
    return axios.get("http://localhost:4200/categories")

}

export const GetDetailsCategories = (id)=>{
    return axios.get(`http://localhost:4200/categories/${id}`)
}
export const DeleteCategories = (id)=>{
    return axios.delete(`http://localhost:4200/categories/${id}`)
}


export const EditCategories = (name,id)=>{
    let body = {
        name:name
    }
    return axios.patch(`http://localhost:4200/categories/${id}`, body)
}

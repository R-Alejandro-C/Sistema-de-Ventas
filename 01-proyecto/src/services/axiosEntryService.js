import axios from "axios";

export const RegisterEntrys = (entryId, productId, quantity, unitPrice, subTotal) => {
    let body = {
        entryId: entryId, 
        productId: productId,
        quantity: quantity,
        unitPrice: unitPrice,
        subTotal:subTotal
    }
    return axios.post("https://project-system-logistic-production.up.railway.app/entries-details", body)
  
}
export const EditEntrys= (entryId, productId, quantity, unitPrice, subTotal, id) => {
    let body = {
        entryId: entryId, 
        productId: productId,
        quantity: quantity,
        unitPrice: unitPrice,
        subTotal:subTotal,
        
   }


return axios.patch(`https://project-system-logistic-production.up.railway.app/entries-details/${id}`, body)
}

export const GetEntrys = () => {
    return axios.get("https://project-system-logistic-production.up.railway.app/entries-details")

}

export const GetDetailsEntrys= (id)=>{
    return axios.get(`https://project-system-logistic-production.up.railway.app/entries-details/${id}`)
}

export const DeleteEntrys = (id)=>{
    return axios.delete(`https://project-system-logistic-production.up.railway.app/entries-details/${id}`)
}
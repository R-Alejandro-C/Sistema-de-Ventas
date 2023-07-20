import axios from "axios";

export const RegisterEntrys = (entryId, productId, quantity, unitPrice, subTotal) => {
    let body = {
        entryId: entryId, 
        productId: productId,
        quantity: quantity,
        unitPrice: unitPrice,
        subTotal:subTotal
    }
    return axios.post("http://localhost:4200/entries-details", body)
  
}
export const EditEntrys= (entryId, productId, quantity, unitPrice, subTotal, id) => {
    let body = {
        entryId: entryId, 
        productId: productId,
        quantity: quantity,
        unitPrice: unitPrice,
        subTotal:subTotal,
        
   }


return axios.patch(`http://localhost:4200/entries-details/${id}`, body)
}

export const GetEntrys = () => {
    return axios.get("http://localhost:4200/entries-details")

}

export const GetDetailsEntrys= (id)=>{
    return axios.get(`http://localhost:4200/entries-details/${id}`)
}

export const DeleteEntrys = (id)=>{
    return axios.delete(`http://localhost:4200/entries-details/${id}`)
}
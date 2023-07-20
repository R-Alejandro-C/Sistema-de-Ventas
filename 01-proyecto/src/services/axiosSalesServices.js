import axios from "axios";

export const RegisterSales = (saleId, productId, quantity, unitPrice, subTotal) => {
    let body = {
        saleId: saleId, 
        productId: productId,
        quantity: quantity,
        unitPrice: unitPrice,
        subTotal:subTotal
    }
    return axios.post("http://localhost:4200/sales-details", body)
  
}
export const EditSales= (saleId, productId, quantity, unitPrice, subTotal, id) => {
    let body = {
        saleId: saleId, 
        productId: productId,
        quantity: quantity,
        unitPrice: unitPrice,
        subTotal:subTotal,
        
   }


return axios.patch(`http://localhost:4200/sales-details/${id}`, body)
}

export const GetSales = () => {
    return axios.get("http://localhost:4200/sales-details")

}

export const GetDetailsSales= (id)=>{
    return axios.get(`http://localhost:4200/sales-details/${id}`)
}

export const DeleteSales = (id)=>{
    return axios.delete(`http://localhost:4200/sales-details/${id}`)
}
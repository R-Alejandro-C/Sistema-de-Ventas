import axios from "axios";

export const RegisterSales = (saleId, productId, quantity, unitPrice, subTotal) => {
    let body = {
        saleId: saleId, 
        productId: productId,
        quantity: quantity,
        unitPrice: unitPrice,
        subTotal:subTotal
    }
    return axios.post("https://project-system-logistic-production.up.railway.app/sales-details", body)
  
}
export const EditSales= (saleId, productId, quantity, unitPrice, subTotal, id) => {
    let body = {
        saleId: saleId, 
        productId: productId,
        quantity: quantity,
        unitPrice: unitPrice,
        subTotal:subTotal,
        
   }


return axios.patch(`https://project-system-logistic-production.up.railway.app/sales-details/${id}`, body)
}

export const GetSales = () => {
    return axios.get("https://project-system-logistic-production.up.railway.app/sales-details")

}

export const GetDetailsSales= (id)=>{
    return axios.get(`https://project-system-logistic-production.up.railway.app/sales-details/${id}`)
}

export const DeleteSales = (id)=>{
    return axios.delete(`https://project-system-logistic-production.up.railway.app/sales-details/${id}`)
}
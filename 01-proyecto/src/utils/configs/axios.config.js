import axios from "axios"

export default axios.create(
    {
        baseURL: `https://reqres.in/api`,
        responseType:"json",
        timeout: 5000
    }

) 

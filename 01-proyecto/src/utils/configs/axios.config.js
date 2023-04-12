import axios from "axios"

export default axios.create(
    {
        baseURL: `localhost:4000/api`,
        responseType:"json",
        timeout: 5000
    }

) 

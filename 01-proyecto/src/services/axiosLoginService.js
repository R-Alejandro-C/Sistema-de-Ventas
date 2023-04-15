import axios from "axios";

export const login = (username, password)=>{
    let body = {
        username:username,
        password:password
    }


    return axios.post("https://project-system-logistic-production.up.railway.app/auth/login", body)

}
import axios from "axios";

export const login = (username, password)=>{
    let body = {
        username:username,
        password:password
    }
    return axios.post("http://localhost:4000/auth/login", body)
}

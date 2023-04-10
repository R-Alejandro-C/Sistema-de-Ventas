import axios from "axios";

export const login = (email, password)=>{
    let body = {
        email:email,
        password:password
    }
    return axios.post("https://reqres.in/api/login", body)
}

import React from 'react';
import Login from '../../components/pure/login/login';

const LoginPage = () => {
    const mensaje=(text)=>{
console.log(text);
    }
    return (
        <div>
            <Login></Login>
        </div>
    );
}

export default LoginPage;

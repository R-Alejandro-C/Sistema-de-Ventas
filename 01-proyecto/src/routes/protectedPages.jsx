import React from 'react';
import {Navigate, Outlet} from "react-router-dom"
const ProtectedPages = ({isLogin, children, redirectTo="/", ROL}) => {


    if (!isLogin) {
        return <Navigate to={redirectTo}></Navigate>
    }else{
        return children? children: <Outlet/>
    }
}

export default ProtectedPages;

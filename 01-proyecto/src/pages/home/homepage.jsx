import React from 'react';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import MainRoutes from '../../routes/mainRoutes';
import Products from '../../components/pure/tables/Products';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex'>
                <SideBar></SideBar>
                <div className='Content'>
                    <Products></Products>
                </div>
            </div>
                    </div>
    );
}

export default Homepage;

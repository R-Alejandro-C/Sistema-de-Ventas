import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import MainRoutes from '../../routes/mainRoutes';
import Products from '../../components/pure/tables/Provedores';

import Modal from '../../components/pure/Modal';


const Homepage = () => {


  return (
    <div className='mt-4' style={{marginLeft:"-5rem"}}>
      <div className='d-flex gap-3'>
        <div className='card' style={{ width: "20rem", height: "10rem" }}>
        <h1 className='d-flex justify-content-center mt-3'>Ventas Mes</h1>
        <p style={{fontSize:"35px"}}>24</p>
        </div>
        <div className='card' style={{ width: "20rem", height: "10rem" }}>
        <h1 className='d-flex justify-content-center mt-3'>Ventas Semana</h1>
        <p style={{fontSize:"35px"}}>24</p>
        </div>
        <div className='card' style={{  width: "20rem", height: "10rem" }}>
        <h1 className='d-flex justify-content-center mt-3'>Ventas Hoy</h1>
        <p style={{fontSize:"35px"}}>24</p>
        </div>
      </div>    
        <div className='d-flex gap-3 mt-3'>
        <div className='card' style={{ width: "20rem", height: "10rem" }}>
        <h1 className='d-flex justify-content-center mt-3'>Compra Mes</h1>
        <p style={{fontSize:"35px"}}>24</p>
        </div>
        <div className='card' style={{ width: "20rem", height: "10rem" }}>
        <h1 className='d-flex justify-content-center mt-3'>Compra Semana</h1>
        <p style={{fontSize:"35px"}}>24</p>
        </div>
        <div className='card' style={{  width: "20rem", height: "10rem" }}>
        <h1 className='d-flex justify-content-center mt-3'>Compra Hoy</h1>
        <p style={{fontSize:"35px"}}>24</p>
        </div>
      </div>
    </div>
  );
};


export default Homepage;

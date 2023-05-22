import React, { useState, useEffect } from 'react';
import { GetEntrys } from '../../services/axiosEntryService';
import { GetSales, GetDetailsSales } from '../../services/axiosSalesServices';
import { CircularProgressBar } from "react-percentage-bar";
import LineChart from '../../components/charts/LineChart';
import LineChartCompras from '../../components/charts/Pogreso';

const Homepage = () => {
  const [Sales, setSales] = useState([]);
  const [TotalDiaAnterior, setTotalDiaAnterior] = useState([]);
  const [SalesHoy, setSalesHoy] = useState([]);
  const [Entrys, setEntrys] = useState([]);
  const [TotalDiaAnteriorEntrys, setTotalDiaAnteriorEntrys] = useState([]);
  const [EntrysHoy, setEntrysHoy] = useState([]);
  const[UltimaVenta, setUltimaVenta] = useState([])
  const [UlimaCompra, setUlimaCompra] = useState([])
  let day = new Date()
useEffect(() => {
  getAllSales()
}, [])
const today = new Date(); 
const AntesDeAyer = new Date(today); 
const yesterday = new Date(today); 

yesterday.setDate(yesterday.getDate() - 1); 
AntesDeAyer.setDate(yesterday.getDate() - 2); 


    const getAllSales = () => {
        GetSales()
          .then((response) => {
            const ventas = response.data
            let Total =ventas.reduce((tot,Sales)=>{ return tot + Sales.subTotal*1} ,0)
            let TotalDia = ventas
            .filter((Sales)=>{
              if (yesterday < new Date(Sales.dateSale)) {
                return true
              }
              return false
            })
            .reduce((tot,Sales)=>{ return tot + Sales.subTotal*1} ,0)
            let TotalDiaAnterior = ventas
            .filter((Sales)=>{
              if (AntesDeAyer < new Date(Sales.dateSale) && new Date(Sales.dateSale)<yesterday) {
                return true
              }
              return false
            })
            .reduce((tot,Sales)=>{ return tot + Sales.subTotal*1} ,0)
             let ultimaSale = ventas.slice(-1).map((Sale)=>Sale.product.name)
            console.log(ultimaSale);
            setUltimaVenta(ultimaSale)
             setSales(Total)
             setSalesHoy(TotalDia)
             setTotalDiaAnterior(TotalDiaAnterior)
          })
          .catch((error) => {
              alert("ocurrio un error")
              console.log(error);
          })
  }
  
  useEffect(() => {

      getAllEntrys();
  }, []);

  const getAllEntrys = () => {
      GetEntrys()
          .then((response) => {
             const entrys = response.data
             let Total =  entrys.reduce((total,Entrys)=>{return total+Entrys.subTotal*1},0)
            let TotalDia = entrys.filter((Entry)=>{
              if (yesterday < new Date(Entry.dateEntry)) {
                return true
              }
              return false
            })
            .reduce((tot,Sales)=>{ return tot + Sales.subTotal*1} ,0)
            let TotalDiaAnterior = entrys.filter((Entry)=>{
              if (AntesDeAyer < new Date(Sales.dateSale) && new Date(Sales.dateSale)<yesterday) {
                return true
              }
              return false
            })
            .reduce((tot,Sales)=>{ return tot + Sales.subTotal*1} ,0)
            let ultimaCompra = entrys.slice(-1).map((Entry)=> Entry.product.name)
              console.log("Entrada suma; "+   TotalDia);
              setUlimaCompra(ultimaCompra)
              setEntrys(Total)
              setEntrysHoy(TotalDia)
              setTotalDiaAnteriorEntrys(TotalDiaAnterior)
          })
          .catch((error) => {
              alert("ocurrio un error")
              console.log(error);
              
          })
  }
  const Ventas = "S/"+Sales;
  const VentasHoy = "S/"+SalesHoy;
  const Resultado = "S/" +(SalesHoy-TotalDiaAnterior)
  const Compras = "S/"+Entrys;
  const ComprasHoy = "S/"+EntrysHoy;
  const ResultadoCompras = "S/" +(EntrysHoy-TotalDiaAnteriorEntrys)
  return (
    <div className='mt-4' style={{marginLeft:"-5rem"}}>
    <div className='d-flex gap-4'>
    <div style={{width:"85vh"}}>
      <LineChart></LineChart>
    </div>
    <div  style={{width:"85vh"}}>
      <LineChartCompras></LineChartCompras>
    </div>
    </div>
    <div className='d-flex'>
    <div className=''>
      <div className='d-flex gap-5'>
        <div className='ms-5'>
        <CircularProgressBar text={Ventas} showPercentage={false} percentage={100}/>
        <p className='d-flex justify-content-center mt-3'>Ingresos Totales</p>
        </div>
        <div className='ms-5'>
        <CircularProgressBar text={VentasHoy} showPercentage={false} percentage={100}/>
        <p className='d-flex justify-content-center mt-3'>Ingresos Dia</p>
        </div>
        <div className='ms-5'>
        {SalesHoy>TotalDiaAnterior? (<CircularProgressBar text={Resultado} textStyle={{fontSize:"25px", color:"green", fontWeight:"bold"}} showPercentage={false} percentage={90}/>)
        :
        ( <CircularProgressBar text={Resultado} textStyle={{fontSize:"25px", color:"red", fontWeight:"bold"}} showPercentage={false} percentage={10}/>)}
        
       <p className='d-flex justify-content-center mt-3'>Comparativa HOY-AYER</p>
        </div>
  
      </div>    
        <div className='d-flex gap-5 mt-3'>
        <div className='ms-5'>
        <CircularProgressBar text={Compras} showPercentage={false} percentage={100}/>
        <p className='d-flex justify-content-center mt-3'>Compras Totales</p>
        </div>
        <div className='ms-5'>
        <CircularProgressBar text={ComprasHoy} showPercentage={false} percentage={100}/>
        <p className='d-flex justify-content-center mt-3'>Compras Dia</p>
        </div>
        <div className="ms-5">
      
        {EntrysHoy>TotalDiaAnteriorEntrys? (<CircularProgressBar text={ResultadoCompras} textStyle={{fontSize:"25px", color:"green", fontWeight:"bold"}} showPercentage={false} percentage={90}/>)
        :
        ( <CircularProgressBar text={ResultadoCompras} textStyle={{fontSize:"25px", color:"red", fontWeight:"bold"}} showPercentage={false} percentage={10}/>)}
        
       <p className='d-flex justify-content-center mt-3'>Comparativa HOY-AYER</p>
       </div>
        </div>
      </div>
      
      <div className=' ms-5 card'>
      <div className='card-header'>
        <h2>Ultima Venta</h2>
      </div>
      <div className='card-body'>
      <table class="table table-dark table-hover" style={{width:"15rem"}}>
  <thead>
    <tr>
      <th scope="col">Producto</th>
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <td>{UltimaVenta}</td>
    </tr>
  </tbody>
  
</table>
        </div>
        <div className='card-header' style={{marginTop:"2rem"}}>
        <h2>Ultima Compra</h2>
      </div>
      <div className='card-body'>
      <table class="table table-dark table-hover" style={{width:"15rem"}}>
  <thead>
    <tr>
      <th scope="col">Producto</th>
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <td>{UlimaCompra}</td>
    </tr>
  </tbody>
  
</table>
        </div>
        </div>

      </div>
    </div>
  );
};


export default Homepage;

import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Filler, Legend } from 'chart.js';
import { GetSales, GetDetailsSales } from '../../services/axiosSalesServices';
import { GetEntrys } from '../../services/axiosEntryService';
import _ from "lodash"

const LineChart = () => {
    
const [Sale, setSale] = useState([]);
useEffect(() => {

  getAllSales();
 
}, []);
const getAllSales = () => {
      GetSales()
        .then((response) => {
            const sale = response.data
            const saleDay =_(sale)
            .groupBy(item => formatDate(item.dateSale))
            .mapValues(Sale =>  _.sumBy(Sale.map(Sales => parseFloat(Sales.subTotal))))
            .value()
            setSale(saleDay);
        })
        .catch((error) => {
            alert("ocurrio un error")
            console.log(error);
        })
}
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
 );
 const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  };
console.log("Obje"+Object.values(Sale));
let midata = {
    labels: Object.keys(Sale),
    datasets: [
        {
            label: "VENTAS",
            data: Object.values(Sale),
            tension: 0.5,
            fill: true,
            borderColor: "red",
            backgroundColor: "rgb(205,155,175,0.6)",
            pointRadius:5,
            pointBorderColor:"red",
            pointBackgroundColor:"red"
        }
    ]
}
var misoptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
};

const ventas = 75; // Número de ventas realizado
const objetivo = 100; // Objetivo de ventas
    return (    
        <div>
       
            <Line data={midata} options={misoptions}/>
          
       
    </div>
        
        
        
    );
}


export default LineChart;

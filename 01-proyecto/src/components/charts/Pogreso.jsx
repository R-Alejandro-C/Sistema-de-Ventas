import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Filler, Legend } from 'chart.js';
import { GetSales, GetDetailsSales } from '../../services/axiosSalesServices';
import { GetEntrys } from '../../services/axiosEntryService';
import _ from "lodash"

const LineChartCompras = () => {
    const [Entrys, setEntrys] = useState([]);
   
    useEffect(() => {

        getAllEntrys();
    }, []);

    const getAllEntrys = () => {
        GetEntrys()
            .then((response) => {
                const entrys = response.data
                const entrysDay =_(entrys)
                .groupBy(item => formatDate(item.dateEntry))
                .mapValues(Entrys =>  _.sumBy(Entrys.map(Entrys => parseFloat(Entrys.subTotal))))
                .value()
                setEntrys(entrysDay);
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
    console.log("Obje"+Object.values(Entrys));
    let midata = {
        labels: Object.keys(Entrys),
        datasets: [
            {
                label: "Compras",
                data: Object.values(Entrys),
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
    
export default LineChartCompras;

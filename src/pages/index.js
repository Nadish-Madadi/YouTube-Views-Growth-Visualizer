import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement
}from "chart.js"


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

import {Line} from "react-chartjs-2";
import {useRef} from "react";

export default function Home() {

  const lineChart = useRef(null);

  function generateYtGrowthData(viewsDay, totalDays){
   
    var totalViewsArray = [viewsDay];

    for (var i = 1; i < totalDays; i++){
      var videosCount = i+1;
      var totalViews = totalViewsArray[i-1] + (videosCount * viewsDay);

      totalViewsArray.push(totalViews);
      
    }
    return totalViewsArray;
  }


  function renderChart(){
    const chart = lineChart.current;
    console.log("rendering");

    var totalDays = parseInt(document.getElementById("totalDays").value);
    var viewsPerDay = parseInt(document.getElementById("viewsPerDay").value);
    console.log("total days: " + totalDays);
    console.log("views per day: " + viewsPerDay);

    chart.data = {
      labels: [...Array(totalDays).keys()],
      datasets: [
        {data: generateYtGrowthData(viewsPerDay,totalDays)}
      ]
    }

    chart.update()
  }


  const options = {
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
        text: "Total YouTube Views Over Time",
        color:"white",
        font: {
          size:18
        }
      }
    },

    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
        borderColor: "lightblue",
        fill: "start",
        backgroundColor: "lightblue"
      },
      point: {
        radius: 10,
        hitRadius: 10
      }
    },

    scales: {
      x: {
        display: true,
        ticks:{
          color: "white"
        }
      },

      y: {
        display: true,
        ticks:{
          color: "white"
        }
      }
    },

  }

  var defaultData = {
    labels: [...Array(100).keys()],
    datasets: [
      {data: generateYtGrowthData(10,100)}
    ]
  }


  return (
      
      <div className={styles.container}>
        <main className={styles.main}>
        
        <Line data={defaultData} width={100} height={40} options={options} ref={lineChart}></Line>
        <div style={{padding: 10}}>
          <label>Views per Day: </label>
          <input id="viewsPerDay" type="number" defaultValue={10} onChange={renderChart}/>
        </div>
        <div>
          <label>Number of Days: </label>
          <input id="totalDays" type="number" defaultValue={100} onChange={renderChart}/>
        </div>
        

        
        </main>
      </div>
      
  )
}

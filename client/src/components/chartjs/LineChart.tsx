import React, {useMemo}from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js"
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)



const options = {
  responsive: true,
  fill:true,
  plugins: {
    legend: {
      position: 'left' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


const LineChart = () => {
  const data = useMemo(()=>{

    return {
      labels: [1,2,3,4,5,6,7],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132,0.3)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 60, 55],
        tension:0.2
      }]
    }
  },[])
  return (
    <Line  options={options} data={data} />
  )
}

export default LineChart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Loading from '../status/Loading';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function VeiwChart() {
  const {chartsData,status}=useSelector(state=>state.charts);
const data=chartsData[0];
  const  options= {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 500,
          beginAtZero: true,
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
          color: "#fff"
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
          display: true,
          color: '#f8f9fa',
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  };
if(status==="pending"){
  return <Loading/>
}
  return (
  <>
     <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
          <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
            <div className="chart">
            <Bar options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="card-body">
          <h6 className="mb-0 ">Website Views</h6>
          <p className="text-sm ">Last Campaign Performance</p>
          <hr className="dark horizontal"/>
          <div className="d-flex ">
            <i className="material-icons text-sm my-auto me-1">schedule</i>
            <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
          </div>
        </div>
  </>
  )
}

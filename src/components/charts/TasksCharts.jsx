import { Line } from "react-chartjs-2";
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useTaskChartsOptions from "../../customHooks/usetaskchartoptions";
import Loading from "../status/Loading";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function TasksCharts() {
  const {chartsData,status}=useSelector(state=>state.charts);
  const data=chartsData[2];
  const options = useTaskChartsOptions();
  if(status==="pending"){
    return <Loading/>
  }
  return (
    <>
      {" "}
      <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
        <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
          <div className="chart">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
      <div className="card-body">
        <h6 className="mb-0 ">Completed Tasks</h6>
        <p className="text-sm ">Last Campaign Performance</p>
        <hr className="dark horizontal" />
        <div className="d-flex ">
          <i className="material-icons text-sm my-auto me-1">schedule</i>
          <p className="mb-0 text-sm">just updated</p>
        </div>
      </div>
    </>
  );
}

import SalesChart from "./SalesChart";
import TasksCharts from "./TasksCharts";
import VeiwChart from "./VeiwChart";

export default function Charts() {
  return (
    <div className="row mt-4">
    <div className="col-lg-4 col-md-6 mt-4 mb-4">
      <div className="card z-index-2 ">
     <VeiwChart/>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mt-4 mb-4">
      <div className="card z-index-2  ">
    <SalesChart/>
      </div>
    </div>
    <div className="col-lg-4 mt-4 mb-3">
      <div className="card z-index-2 ">
<TasksCharts/>
      </div>
    </div>
  </div>
  )
}

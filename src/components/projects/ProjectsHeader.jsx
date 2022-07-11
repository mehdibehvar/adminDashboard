import { useDispatch } from "react-redux"
import { ChangeFilterStatus } from "../../features/filter/filterSlice";

export default function ProjectsHeader() {
  const dispatch=useDispatch();
  const handleChangeFilter=(e)=>{
dispatch(ChangeFilterStatus(e.target.innerText))
  }
  return (
    <div className="card-header pb-0">
    <div className="row">
      <div className="col-lg-6 col-7">
        <h6>Projects</h6>
        <p className="text-sm mb-0">
          <i className="fa fa-check text-info" aria-hidden="true"></i>
          <span className="font-weight-bold ms-1">30 done</span> this month
        </p>
      </div>
      <div className="col-lg-6 col-5 my-auto text-end">
        <div className="dropdown float-lg-end pe-4">
          <a className="cursor-pointer" href="/" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-ellipsis-v text-secondary"></i>
          </a>
          <ul onClick={(e)=>handleChangeFilter(e)}  className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
            <li ><span className="dropdown-item border-radius-md">show completed</span></li>
            <li><span className="dropdown-item border-radius-md" >ascending progress</span></li>
            <li><span className="dropdown-item border-radius-md" >descending progress</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

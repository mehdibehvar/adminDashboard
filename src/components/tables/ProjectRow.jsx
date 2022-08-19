import { useDispatch } from "react-redux";
import { changeStatus } from "../../features/projects/projectSlice";
export default function ProjectRow({ project }) {
  const dispatch=useDispatch()
  const { logo, company, budget,completion,id,status } = project;
  const handleChangeStatus=(e)=>{
    const newStatus=e.target.innerText;
    const newCompletion=newStatus==="doned"?100:completion;
dispatch(changeStatus({
projectId:id,
newStatus,
newCompletion
}))
  }
  return (
    <tr>
      <td>
        <div className="d-flex px-2">
          <div>
            <img
              src={`${logo}`}
              className="avatar avatar-sm rounded-circle me-2"
              alt="spotify"
            />
          </div>
          <div className="my-auto">
            <h6 className="mb-0 text-sm">{company}</h6>
          </div>
        </div>
      </td>
      <td>
        <p className="text-sm font-weight-bold mb-0">${budget}</p>
      </td>
      <td>
        <span data-testid="status" className="text-xs font-weight-bold">{status}</span>
      </td>
      <td className="align-middle text-center">
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-2 text-xs font-weight-bold">{completion}%</span>
          <div>
            <div className="progress">
              <div
                className={`progress-bar bg-gradient-${completion===100?"success":"info"} w-${completion}`}
                role="progressbar"
                aria-valuenow={completion}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </td>
      <td className="align-middle">
      <div  className="dropdown  pe-4">
          <span  className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
            <i data-testid="statuslist" className="fa fa-ellipsis-v text-secondary"></i>
          </span>
          <ul  onClick={(e)=>handleChangeStatus(e)} className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
            <li  ><span  className="dropdown-item border-radius-md">doned</span></li>
            <li><span className="dropdown-item border-radius-md" >cancel</span></li>
            <li><span className="dropdown-item border-radius-md" >working</span></li>
          </ul>
        </div>
      </td>
    </tr>
  );
}

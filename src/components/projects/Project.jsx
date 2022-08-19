import { useSelector } from "react-redux";
import { selectprojectById } from "../../features/projects/projectSlice";
import Member from "./Member";

export default function Project({projectId}) {
  const project=useSelector(state=>selectprojectById(state,projectId));
    const {company,logo,members,budget,completion}=project;
    const membersList=members.map(member=><Member key={member.name} member={member}/>)
  return (  <tr>
    <td>
      <div className="d-flex px-2 py-1">
        <div>
          <img src={`${logo}`} className="avatar avatar-sm me-3" alt="xd"/>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h6 className="mb-0 text-sm">{company}</h6>
        </div>
      </div>
    </td>
    <td>
      <div className="avatar-group mt-2">
      
{membersList}
      </div>
    </td>
    <td className="align-middle text-center text-sm">
      <span className="text-xs font-weight-bold"> {budget} </span>
    </td>
    <td className="align-middle">
      <div className="progress-wrapper w-75 mx-auto">
        <div className="progress-info">
          <div className="progress-percentage">
            <span className="text-xs font-weight-bold">{completion}%</span>
          </div>
        </div>
        <div className="progress">
          <div data-testid="progbar" className={`progress-bar bg-gradient-${completion===100?"success":"info"} w-${completion}`} role="progressbar" aria-valuenow={completion} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </td>
  </tr>
  )
}

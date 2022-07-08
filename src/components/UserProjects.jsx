import { useSelector } from 'react-redux'
import {selectProjectsByIds } from '../features/projects/projectSlice';
import ProjectSummary from './ProjectSummary';
export default function UserProjects({userProjectIds}) {
const userProjects=useSelector((state)=>selectProjectsByIds(state,userProjectIds?userProjectIds:[]));
const userProjectList=userProjects.map(project=><ProjectSummary key={project.id} project={project}/>);
  return (
    <div className="col-12 mt-4">
              <div className="mb-5 ps-3">
                <h6 className="mb-1">Projects</h6>
                <p className="text-sm">Architects design houses</p>
              </div>
              <div className="row">
              {userProjectList}
              </div>
            </div>
  )
}

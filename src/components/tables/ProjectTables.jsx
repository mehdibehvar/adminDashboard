import { useSelector } from "react-redux";

import { selectAllProjects } from "../../features/projects/projectSlice"
import ProjectRow from "./ProjectRow";
export default function ProjectTables() {
    const allprojects=useSelector(selectAllProjects);
    const projectList=allprojects.map(project=><ProjectRow key={project.id} project={project} />)
  return (
    <div className="row">
    <div className="col-12">
      <div className="card my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h6 className="text-white text-capitalize ps-3">Projects table</h6>
          </div>
        </div>
        <div className="card-body px-0 pb-2">
          <div className="table-responsive p-0 overflow-x-visible">
            <table className="table align-items-center justify-content-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
               {projectList}
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

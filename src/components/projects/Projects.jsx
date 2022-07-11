import { shallowEqual, useSelector } from "react-redux";
import {selectFilteredProjectsIds } from "../../features/projects/projectSlice";
import OverView from "../orders-overview/OverView";
import Project from "./Project";
import ProjectsHeader from "./ProjectsHeader";

export default function Projects() {
  const filteredProjectsIds=useSelector(selectFilteredProjectsIds,shallowEqual);
const projectsList=filteredProjectsIds.map(Id=><Project key={Id} projectId={Id}/>)
  return (
    <div className="row mb-4">
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
          <div className="card">
          <ProjectsHeader/>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                 {projectsList}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      <OverView/>
      </div>
  )
}

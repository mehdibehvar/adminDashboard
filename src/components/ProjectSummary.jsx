import React from 'react'
import Member from './projects/Member';

export default function ProjectSummary({project}) {
  const {members}=project;
  const membersList=members.map(member=><Member key={member.name} member={member}/>)
  return (
    <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
    <div className="card card-blog card-plain">
      <div className="card-header p-0 mt-n4 mx-3">
        <a className="d-block shadow-xl border-radius-xl">
          <img src={`${project.image}`} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl"/>
        </a>
      </div>
      <div className="card-body p-3">
        <p className="mb-0 text-sm">{project.company}</p>
        <a href="javascript:;">
          <h5>
           {project.type}
          </h5>
        </a>
        <p className="mb-4 text-sm">
          {project.summary}
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <button type="button" className="btn btn-outline-primary btn-sm mb-0">View Project</button>
          <div className="avatar-group mt-2">
       {membersList}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

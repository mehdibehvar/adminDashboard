
export default function ProjectsHeader() {
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
          <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
            <li><a className="dropdown-item border-radius-md" href="/">Action</a></li>
            <li><a className="dropdown-item border-radius-md" href="/">Another action</a></li>
            <li><a className="dropdown-item border-radius-md" href="/">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

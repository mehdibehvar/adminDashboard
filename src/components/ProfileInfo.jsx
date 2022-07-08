
export default function ProfileInfo({profileInfo}) {
  return (
    <div className="col-12 col-xl-4">
    <div className="card card-plain h-100">
      <div className="card-header pb-0 p-3">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            <h6 className="mb-0">Profile Information</h6>
          </div>
          <div className="col-md-4 text-end">
            <a href="/">
              <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="card-body p-3">
        <p className="text-sm">
         {profileInfo.summary}
        </p>
        <hr className="horizontal gray-light my-4"/>
        <ul className="list-group">
          <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; {profileInfo.fullName}</li>
          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; {profileInfo.mobile}</li>
          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {profileInfo.email}</li>
          <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Location:</strong> &nbsp; {profileInfo.location}</li>
          <li className="list-group-item border-0 ps-0 pb-0">
            <strong className="text-dark text-sm">Social:</strong> &nbsp;
            <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="/">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="/">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="/">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

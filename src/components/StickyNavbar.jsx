import { Link } from "react-router-dom";

export default function StickyNavbar() {
  return (
    <div className="container position-sticky z-index-sticky top-0">
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div className="container-fluid ps-2 pe-0">
            <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
              Material Dashboard 2
            </a>
            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link d-flex align-items-center me-2 active" aria-current="page">         
                    <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link me-2">
                  <i className="fa fa-user opacity-6 text-dark me-1"></i>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link me-2">
                    <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signin"} className="nav-link me-2">
                    <i className="fas fa-key opacity-6 text-dark me-1"></i>
                    Sign In
                  </Link>       
                </li>
              </ul>
            </div>
          </div>
        </nav>
     
      </div>
    </div>
  </div>
  )
}

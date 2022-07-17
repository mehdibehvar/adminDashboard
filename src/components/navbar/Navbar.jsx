import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import './Navbar.scss'
import { logOut } from '../../features/users/userSlice';
import { toggleSetting } from '../../features/style/StyleSlice';
import { useRef } from 'react';
import NavbarNotifications from './NavbarNotifications';
export default function Navbar() {
const inputRef=useRef()
  const userInfo=useSelector(state=>state.userInfo);
  const {navbarFixed}=useSelector(state=>state.styles)
  const {fullName}=useParams();
  const page=useLocation().pathname;
  const dispatch=useDispatch();
 const {info}=userInfo;
 const handleLogout=()=>{
  dispatch(logOut());
 }
const handleShowSetting=(e)=>{
  dispatch(toggleSetting());
}
function handleShowSideNav() {
  document.body.classList.toggle("g-sidenav-pinned")
}
function handleFocus() {
  inputRef.current.classList.add("is-filled");
  }
  function handleFocuseOut(e) {
    if(!e.target.value){
      inputRef.current.classList.remove("is-filled");
    }
    
  }
  function handleInputChange() {
    inputRef.current.classList.add("is-filled");
  }
  return (
    <nav className={`navbar  navbar-main navbar-expand px-0 mx-4 shadow-none border-radius-xl ${navbarFixed?"position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky":null}`} id="navbarBlur" data-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><Link to="/" className="opacity-5 text-dark">Pages</Link></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">{fullName?"Profile":(page==="/"?"Dashboard":page.slice(1))}</li>
          </ol>
          <h6 className="font-weight-bolder mb-0">{fullName?"Profile":page==="/"?"Dashboard":page.slice(1)}</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div ref={inputRef} className="input-group input-group-outline">
              <label className="form-label">Type here...</label>
              <input onChange={handleInputChange} onBlur={(e)=>handleFocuseOut(e)}  onFocus={handleFocus} type="text" className="form-control"/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              {info?<Link to="/" onClick={handleLogout}>
                <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">Sign out</span>
              </Link>: <Link className="nav-link text-body font-weight-bold px-0" to="/signin">
              <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">Sign In</span>
              </Link>}
             
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <button onClick={handleShowSideNav} className="nav-link text-body p-0 border-0 bg-transparent" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
                </button>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <button onClick={(e)=>handleShowSetting(e)} className="nav-link text-body p-0 border-0 bg-transparent">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </button>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <span className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-bell cursor-pointer"></i>
              </span>
          <NavbarNotifications/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

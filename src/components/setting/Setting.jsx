import { useSelector ,useDispatch} from 'react-redux';
import { changeSidebarColor, changeSidenavBg, toggleDarkMode, toggleNavbarFixed, toggleSetting } from '../../features/style/StyleSlice';

export default function Setting() {
  const {showSetting,darkMode}=useSelector(state=>state.styles);
  const dispatch=useDispatch();
  const handleCloseSetting=(e)=>{
    dispatch(toggleSetting());
  }
  const handleDarkMode=(e)=>{
    dispatch(toggleDarkMode(e.target.checked));
    if(e.target.checked){
      document.body.classList.add("dark-version");
    }else{
      document.body.classList.remove("dark-version");
    }
  }
  const handleSidebarColor=(e)=>{
    dispatch(changeSidebarColor(e.target.dataset.color))
  }
  const handleNavbarFixed=()=>{
    if (window.innerWidth>=1200){
      dispatch(toggleNavbarFixed())
    }
  }
  const handleSidenavBg=(e)=>{
    dispatch(changeSidenavBg(e.target.dataset.classname))
  }
  return (
    <div className={`${showSetting?"fixed-plugin show":"fixed-plugin"}`}>
    <button  onClick={(e)=>handleCloseSetting(e)} className="border-0 fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i className="material-icons py-2">settings</i>
    </button>
    <div className="card shadow-lg">
      <div className="card-header pb-0 pt-3">
        <div className="float-start">
          <h5 className="mt-3 mb-0">Material UI Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div className="float-end mt-4">
          <button onClick={(e)=>handleCloseSetting(e)} className="btn btn-link text-dark p-0 fixed-plugin-close-button">
            <i className="material-icons">clear</i>
          </button>
        </div>
    
      </div>
      <hr className="horizontal dark my-1"/>
      <div className="card-body pt-sm-3 pt-0">
 
        <div>
          <h6 className="mb-0">Sidebar Colors</h6>
        </div>
        <span className="switch-trigger background-color">
          <div onClick={(e)=>handleSidebarColor(e)} className="badge-colors my-2 text-start">
            <span className="badge filter bg-gradient-primary active" data-color="primary"></span>
            <span className="badge filter bg-gradient-dark" data-color="dark" ></span>
            <span className="badge filter bg-gradient-info" data-color="info"></span>
            <span className="badge filter bg-gradient-success" data-color="success"></span>
            <span className="badge filter bg-gradient-warning" data-color="warning"></span>
            <span className="badge filter bg-gradient-danger" data-color="danger"></span>
          </div>
        </span>
    
        <div className="mt-3">
          <h6 className="mb-0">Sidenav Type</h6>
          <p className="text-sm">Choose between 2 different sidenav types.</p>
        </div>
        <div onClick={(e)=>handleSidenavBg(e)} className="d-flex">
          <button className="btn bg-gradient-dark px-3 mb-2 active" data-classname="bg-gradient-dark">Dark</button>
          <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-classname="bg-transparent">Transparent</button>
          <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-classname="bg-white">White</button>
        </div>
        <p className="text-sm d-xl-none text-success d-block mt-2">You can change the Navbar Fixed just on desktop view.</p>
  
        <div className="mt-3 d-flex">
          <h6 className="mb-0">Navbar Fixed</h6>
          <div className="form-check form-switch ps-0 ms-auto my-auto">
            <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onClick={handleNavbarFixed}/>
          </div>
        </div>
        <hr className="horizontal dark my-3"/>
        <div className="mt-2 d-flex">
          <h6 className="mb-0">Light / Dark</h6>
          <div className="form-check form-switch ps-0 ms-auto my-auto">
            <input className="form-check-input mt-1 ms-auto" defaultChecked={darkMode} type="checkbox" id="dark-version" onClick={(e)=>handleDarkMode(e)}/>
          </div>
        </div>
        <hr className="horizontal dark my-sm-4"/>
     
      </div>
    </div>
  </div>
  )
}

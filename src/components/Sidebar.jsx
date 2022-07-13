import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
const {info}=useSelector(state=>state.userInfo);
const {sidebarColor,sidenavBg}=useSelector(state=>state.styles);
const textColor=sidenavBg==="bg-gradient-dark"?"white":"dark";
 const sidebar=[
  {text:"Dashboard",path:"/",icon:"dashboard"},
  {text:"Tables",path:"/tables",icon:"table_view"},
  {text:"Billing",path:"/billing",icon:"receipt_long"},
  {text:"Notifications",path:"/notifications",icon:"notifications"},
  {text:"Profile",path:`/${info?"profile":"signin"}`,icon:"person"},
  {text:"Sign In",path:`${!info?"/signin":''}`,icon:"login"},
  {text:"Sign Up",path:"/signup",icon:"assignment"},
]
const sidebarList=sidebar.map(item=><SidebarLink textColor={textColor} sidebarColor={sidebarColor} key={item.text} item={item}/>)
  return (
    <aside
      className={`sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3  ${sidenavBg}`}
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className={`fas fa-times p-3 cursor-pointer text-${textColor} opacity-5 position-absolute end-0 top-0 d-none d-xl-none`}
          aria-hidden="true"
          id="iconSidenav"
        ></i>
      <Link   className="navbar-brand m-0" to="/">  
          <img
            src={`../assets/img/logo-ct${textColor==="dark"?"-dark":''}.png`}
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className={`ms-1 font-weight-bold text-${textColor}`}>
            Material Dashboard 2
          </span>
       </Link>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          {sidebarList.slice(0,4)}
          <li className="nav-item mt-3">
            <h6 className={`ps-4 ms-2 text-uppercase text-xs text-${textColor} font-weight-bolder opacity-8`}>
              Account pages
            </h6>
          </li>
          {sidebarList.slice(4,7)}
     
        </ul>
      </div>
    </aside>
  );
}

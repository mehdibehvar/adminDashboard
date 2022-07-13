import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function SidebarLink({item,textColor,sidebarColor}) {
    const {path,text,icon}=item;
    const currentPath=useLocation().pathname;
    const defaultActive=path===currentPath?true:false
    const [active,setActive]=useState(defaultActive)
  return (
    <li className="nav-item" >
    <Link className={`nav-link text-${textColor} ${active?`active bg-gradient-${sidebarColor}`:null}`} to={path} onClick={e=>setActive(active=>!active)}>
      <div className={`text-${textColor} text-center me-2 d-flex align-items-center justify-content-center`}>
        <i className="material-icons opacity-10">{icon}</i>
      </div>
      <span className="nav-link-text ms-1">{text}</span>
    </Link>
  </li>
  )
}

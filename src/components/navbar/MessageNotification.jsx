import {Link} from "react-router-dom"
import useFetchNotifInfo from "../../customHooks/useFetchNotifInfo";
import Loading from "../status/Loading";

export default function MessageNotification({notifInfo}) {
    const authorId=notifInfo.authorId;
const [data,loading]=useFetchNotifInfo(`users/${authorId}`);
if(loading){
  return <Loading/>
}
  return (
    <li className="mb-2">
        <Link to={"/notifications"} className="dropdown-item border-radius-md">
        <div className="d-flex py-1">
        <div className="my-auto">
          <img src={`${data.avatar}`} className="avatar avatar-sm  me-3 " alt="team2"/>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h6 className="text-sm font-weight-normal mb-1">
            <span className="font-weight-bold">{notifInfo.title}</span> from {data.fullName}
          </h6>
          <p className="text-xs text-secondary mb-0">
            <i className="fa fa-clock me-1"></i>
            {notifInfo.time}
          </p>
        </div>
      </div>
        </Link>
  </li>
  )
}

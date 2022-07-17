import { Link } from "react-router-dom";
import { deleteAlert } from "../features/notifications/notificationSlice";
import { useDispatch } from "react-redux";
export default function AlertBar({alr}) {
    const dispatch=useDispatch()
    const handleDElAlert=()=>{
      dispatch(deleteAlert(alr.id))
    }
  return (
    <div className={`alert alert-${alr.status} alert-dismissible text-white`} role="alert">
    <span className="text-sm">{alr.title}<Link to={"/notifications"} className="alert-link text-white">an example link.</Link> Give it a click if you like.</span>
    <button onClick={handleDElAlert} type="button" className="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  )
}

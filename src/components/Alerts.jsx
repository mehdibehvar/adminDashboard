import { useSelector } from "react-redux"
import { selectAlertsNotif } from "../features/notifications/notificationSlice"
import AlertBar from "./AlertBar";
export default function Alerts() {
  const alerts=useSelector(selectAlertsNotif);
  const alertsList=alerts.map(alr=><AlertBar key={alr.id} alr={alr}/>);
  
  return (
 <div className="card-body p-3 pb-0">     
  {alertsList}
  </div>
  )
}

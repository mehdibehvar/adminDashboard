import { useSelector } from "react-redux"
import { selectAllNotifications } from "../../features/notifications/notificationSlice"
import MessageNotification from "./MessageNotification";
import PaymentNotifications from "./PaymentNotifications";

export default function NavbarNotifications() {
    const allNotifications=useSelector(selectAllNotifications);
    const messageNotifications=allNotifications.filter(notif=>notif.title==="new message");
  return (
    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
 {messageNotifications.map(notif=><MessageNotification key={notif.id} notifInfo={notif}/>)}
<PaymentNotifications/>
  </ul>
  )
}

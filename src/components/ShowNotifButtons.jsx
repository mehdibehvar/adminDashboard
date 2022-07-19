import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllNotifications } from "../features/notifications/notificationSlice";
import ToastIcon from "./ToastIcon";
export default function ShowNotifButtons() {
    const allNotif=useSelector(selectAllNotifications);
   const [showNotifList, setShowNotifList] = useState([]);
    const handleShowNotification=(e)=>{
        const status=e.target.dataset.target.slice(0,-5);
        const showNotif=allNotif.filter(notif=>notif.status===status);
         setShowNotifList([...showNotifList,...showNotif]);
         setTimeout(() => {
            setShowNotifList([]);
         },10000);
    }
  return (
    <div className="card mt-4">
      <div className="card-header p-3">
        <h5 className="mb-0">Notifications</h5>
      </div>
     {/* show notif buttons secton */}
      <div className="card-body p-3">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <button
            onClick={handleShowNotification}
              className="btn bg-gradient-success w-100 mb-0 toast-btn"
              type="button"
              data-target="successToast"
            >
              Success
            </button>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mt-sm-0 mt-2">
            <button
             onClick={handleShowNotification}
              className="btn bg-gradient-info w-100 mb-0 toast-btn"
              type="button"
              data-target="infoToast"
            >
              Info
            </button>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
            <button
             onClick={handleShowNotification}
              className="btn bg-gradient-warning w-100 mb-0 toast-btn"
              type="button"
              data-target="warningToast"
            >
              Warning
            </button>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
            <button
             onClick={handleShowNotification}
              className="btn bg-gradient-danger w-100 mb-0 toast-btn"
              type="button"
              data-target="dangerToast"
            >
              Danger
            </button>
          </div>
        </div>
      </div>
      {/* notifications wrapper */}
      <div className="position-fixed bottom-1 end-1 z-index-2">
        {showNotifList.map(notif=>  <div  key={notif.id}
          className={`toast fade ${notif.status==="info"?"text-white":"text-body"} show p-2 ${notif.status==="info"?"bg-gradient-info":"white"}`}
          role="alert"
          aria-live="assertive"
          id={`${notif.status}Toast`}
          aria-atomic="true"
        >
          <div className={`"toast-header ${notif.status==="info"&&"bg-transparent"} border-0"`}>
   
          <ToastIcon status={notif.status}/>
            <span className={`me-auto font-weight-bold ${notif.status==="info"&&"text-white"}`}>
              Material Dashboard{" "}
            </span>
            <small className={`${notif.status==="info"?"text-white":""}`}>{moment(notif.time).startOf('hour').fromNow()}</small>
            <i
              className="fas fa-times text-md ms-3 cursor-pointer"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></i>
          </div>
          <hr className="horizontal dark m-0" />
          <div className={`toast-body ${notif.status==="info"&&"text-white"}`}>
           {notif.title}
          </div>
        </div>)}
      </div>
    </div>
  );
}

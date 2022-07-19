import moment from "moment";

import { Link } from "react-router-dom";
import useFetchNotifInfo from "../../customHooks/useFetchNotifInfo";
import Loading from "../status/Loading";

export default function PaymentNotifications() {
const [data,loading]=useFetchNotifInfo("cards");
  if(loading){
    return <Loading/>
  }
  const invoices=data[0]?data[0].invoices:[]
const paidInvoices=invoices.filter(invoice=>invoice.status==="paid");
  return (
<>  {paidInvoices.map(invoice=><li key={invoice.serial}>
    <Link to={"/notifications"} className="dropdown-item border-radius-md">
    <div className="d-flex py-1">
      <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
      <img src="../assets/img/small-logos/paid_black_24dp.svg" alt="" />
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h6 className="text-sm font-weight-normal mb-1">
         {invoice.price} Payment successfully 
        </h6>
        <p className="text-xs text-secondary mb-0">
          <i className="fa fa-clock me-1"></i>
          {moment(invoice.date).startOf('hour').fromNow()}
        </p>
      </div>
    </div>
    </Link>
  </li>)}</>
  )
}

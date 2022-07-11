import { useSelector } from "react-redux"
import { selectAllBilling } from "../../features/billingInfo/billingInfoSlice"
import Bill from "./Bill";

export default function BillingInfo() {
  const billings=useSelector(selectAllBilling);
  return (
    <div className="col-md-7 mt-4">
    <div className="card">
      <div className="card-header pb-0 px-3">
        <h6 className="mb-0">Billing Information</h6>
      </div>
      <div className="card-body pt-4 p-3">
        <ul className="list-group">
         {billings.map(bill=><Bill key={bill.id} bill={bill}/>)}
        </ul>
      </div>
    </div>
  </div>
  )
}

import { useDispatch, useSelector } from "react-redux";
import { deleteBilling, saveTrigredBillingId, selectBillingById } from "../../features/billingInfo/billingInfoSlice";
export default function Bill({ id }) {
  const bill=useSelector(state=>selectBillingById(state,id))
  const dispatch = useDispatch();
  function handleDeleteBilling() {
    dispatch(deleteBilling(bill.id));
  }
  const handleTrigredId=()=>{
    dispatch(saveTrigredBillingId(bill.id))
  }
  return (
    <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
      <div className="d-flex flex-column">
        <h6 className="mb-3 text-sm">{bill.fullName}</h6>
        <span className="mb-2 text-xs">
          Company Name:
          <span className="text-dark font-weight-bold ms-sm-2">
            {bill.CompanyName}
          </span>
        </span>
        <span className="mb-2 text-xs">
          Email Address:{" "}
          <span className="text-dark ms-sm-2 font-weight-bold">
            {bill.EmailAddress}
          </span>
        </span>
        <span className="text-xs">
          VAT Number:
          <span className="text-dark ms-sm-2 font-weight-bold">
            {bill.VATNumber}
          </span>
        </span>
      </div>
      <div className="ms-auto text-end">
        <button
          onClick={handleDeleteBilling}
          className="btn btn-link text-danger text-gradient px-3 mb-0"
        >
          <i className="material-icons text-sm me-2">delete</i>Delete
        </button>
        <button
        onClick={handleTrigredId}
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#billingBackdrop"
        >
         <i className="material-icons text-sm me-2">edit</i>Edit
        </button>
      
      </div>
    </li>
  );
}

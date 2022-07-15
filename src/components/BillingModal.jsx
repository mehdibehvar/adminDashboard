import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editBilling, selectBillingById } from "../features/billingInfo/billingInfoSlice";
import React from "react";

const BillingModal=()=> {
  const {trigredId}=useSelector(state=>state.billings)
const billInfo=useSelector(state=>selectBillingById(state,trigredId));
const {fullName,CompanyName,EmailAddress}=billInfo?billInfo:{};
 const {register,handleSubmit,setValue}=useForm();
 const dispatch=useDispatch()
 useEffect(()=>{
    setValue("fullName",fullName);
    setValue("CompanyName",CompanyName);
    setValue("EmailAddress",EmailAddress);
 },[trigredId]);
 const handleEditBilling=(inputs)=>{
const {fullName,CompanyName,EmailAddress}=inputs;
dispatch(editBilling({
 fullName,CompanyName,EmailAddress,id:trigredId
  }
))
 }
  return (
    <>
      <form onSubmit={handleSubmit(handleEditBilling)} >
        <div
          className="modal fade"
          id="billingBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-success"
                  id="staticBackdropLabel"
                >
                  edit profile Information
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul className="list-group text-start">
                  <li className="list-group-item list-group-item-warning">
                    <label className="form-label text-primary me-2">
                      fullName:
                    </label>
                    <input {...register("fullName")} />
                  </li>
                  <li className="list-group-item list-group-item-info">
                    <label className="form-label text-primary me-2">
                    CompanyName:
                    </label>
                    <input {...register("CompanyName")} />
                  </li>
                  <li className="list-group-item list-group-item-light">
                    <label className="form-label text-primary me-2">
                    EmailAddress:
                    </label>
                    <input {...register("EmailAddress")} />
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export const MemoizedBillingModal=React.memo(BillingModal) ;

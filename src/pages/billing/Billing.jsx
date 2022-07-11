import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BillingCart from "../../components/billing/BillingCart";
import BillingInfo from "../../components/billing/BillingInfo";
import Invoices from "../../components/billing/Invoices";
import PaymentMethod from "../../components/billing/PaymentMethod";
import Salary from "../../components/billing/Salary";
import Transaction from "../../components/billing/Transaction";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Setting from "../../components/setting/Setting";
import Sidebar from "../../components/Sidebar";
import Loading from "../../components/status/Loading";
import { fetchBillingInfo } from "../../features/billingInfo/billingInfoSlice";
import { fetchCards } from "../../features/cards/cardSlice";
export default function Billing() {
const dispatch=useDispatch();
const {status,cards}=useSelector(state=>state.cards);
useEffect(()=>{
dispatch(fetchCards());
dispatch(fetchBillingInfo());
},[dispatch]);
if(status==="pending"&&!cards){
  return <Loading/>
}
  return (
   <>
   <Sidebar/>
     <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
<Navbar/>

<div className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
          <BillingCart/> 
         <Salary/>
         <PaymentMethod/>
          </div>
        </div>
       <Invoices/>
      </div>
      <div className="row">
     <BillingInfo/>
      <Transaction/>
      </div>
<Footer/>
    </div>
    <Setting/>
  </main>
   </>
  )
}

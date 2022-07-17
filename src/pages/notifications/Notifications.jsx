import Alerts from "../../components/Alerts";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Setting from "../../components/setting/Setting";
import ShowNotifButtons from "../../components/ShowNotifButtons";
import Sidebar from "../../components/Sidebar";

export default function Notifications() {
  return (
<>
<Sidebar/>
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
<Navbar/>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="card mt-4">
            <div className="card-header p-3">
              <h5 className="mb-0">Alerts</h5>
            </div>
               {/* start alerts */}
                 <Alerts/>
               {/* end alerts */}
          </div>
       <ShowNotifButtons/>
        </div>
      </div>
     
   <Footer/>
    </div>
    <Setting/>
  </main>
</>
  )
}

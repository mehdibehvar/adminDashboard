import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Setting from "../../components/setting/Setting";
import ProfileBody from "../../components/ProfileBody";


export default function Profile() {
  

  return (
    <>
      <Sidebar />
      <div className="main-content position-relative max-height-vh-100 h-100">
        <Navbar />
        <ProfileBody/>
        <Footer />
        <Setting/>
      </div>
    </>
  );
}

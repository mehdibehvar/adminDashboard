import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import UserProjects from "../../components/UserProjects";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Conversations from "../../components/Conversations";
import ProfileInfo from "../../components/ProfileInfo";
import PlatformSetting from "../../components/PlatformSetting";
import { get } from "../../utils/httpclient";
import Loading from "../../components/status/Loading";
import EmpteyState from "../../components/status/EmpteyState";
import Setting from "../../components/setting/Setting";
export default function Profile() {
  const [profileInfo, setProfileInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (!info) {
      navigate("/signin", { replace: true });
    } else {
      try {
        setLoading(true);
        get(`users/?email=${info.email}`).then((response) => {
          setProfileInfo(response);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [info]);
  if(loading){
    return <Loading/>
  }
  if(profileInfo?.length===0){
    return <EmpteyState/>
  }
  return (
    <>
      <Sidebar />
      <div className="main-content position-relative max-height-vh-100 h-100">
        <Navbar />
        <div className="container-fluid px-2 px-md-4">
          <div
            className="page-header min-height-300 border-radius-xl mt-4"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"})`,
            }}
          >
            <span className="mask  bg-gradient-primary  opacity-6"></span>
          </div>
          <div className="card card-body mx-3 mx-md-4 mt-n6">
            <div className="row gx-4 mb-2">
              <div className="col-auto">
                <div className="avatar avatar-xl position-relative">
                  <img
                    src="../assets/img/bruce-mars.jpg"
                    alt="profile_image"
                    className="w-100 border-radius-lg shadow-sm"
                  />
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="h-100">
                  <h5 className="mb-1">{profileInfo[0].fullName}</h5>
                  <p className="mb-0 font-weight-normal text-sm">
                    CEO / Co-Founder
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div className="nav-wrapper position-relative end-0">
                  <ul className="nav nav-pills nav-fill p-1" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1 active "
                        data-bs-toggle="tab"
                        href="/"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="material-icons text-lg position-relative">
                          home
                        </i>
                        <span className="ms-1">App</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1 "
                        data-bs-toggle="tab"
                        href="/"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="material-icons text-lg position-relative">
                          email
                        </i>
                        <span className="ms-1">Messages</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1 "
                        data-bs-toggle="tab"
                        href="/"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="material-icons text-lg position-relative">
                          settings
                        </i>
                        <span className="ms-1">Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row">
                <PlatformSetting />
                <ProfileInfo profileInfo={profileInfo[0]} />
                <Conversations />
                <UserProjects userProjectIds={profileInfo[0].projects} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Setting/>
      </div>
    </>
  );
}

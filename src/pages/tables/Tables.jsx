import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../../features/authors/authorSlice";
import AuthorTables from "../../components/tables/AuthorTables";
import ProjectTables from "../../components/tables/ProjectTables";
import Loading from "../../components/status/Loading";
import { useEffect } from "react";
import Setting from "../../components/setting/Setting";
export default function Tables() {
  const dispatch = useDispatch();
  const { status} = useSelector((state) => state.authors);
 useEffect(()=>{
  dispatch(fetchAuthors());
 },[dispatch])


  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        {status==="pending"? (
          <Loading />
        ) : (
          <>
            {" "}
            <div className="container-fluid py-4">
              <AuthorTables />
              <ProjectTables />
              <Footer />
            </div>
          </>
        )}
        <Setting/>
      </main>
    </>
  );
}

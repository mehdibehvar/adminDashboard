import { useSelector } from "react-redux";
import Charts from "../../components/charts/Charts";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/status/Loading";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projects/Projects";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/widgets/Widgets";
import Error from "../../components/status/Error";
import Setting from "../../components/setting/Setting"


export default function Dashboard() {
  const { status } = useSelector((state) => state.projects);

  if(status==="rejected"){
    return <Error/>
  }
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        {status === "pending" ? (
          <Loading />
        ) : (
          <>
            {" "}
            <div className="container-fluid py-4">
              <Widgets />
              <Charts />
              <Projects />
              <Footer />
            </div>
          </>
        )}
      </main>
         <Setting/>
     
    </>
  );
}

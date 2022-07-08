import Charts from "../../components/charts/Charts";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projects/Projects";
import Setting from "../../components/setting";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/widgets/Widgets";


export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar/>
        <div className="container-fluid py-4">
          <Widgets/>
          <Charts />
          <Projects />
          <Footer />
        </div>
      </main>

    </>
  );
}

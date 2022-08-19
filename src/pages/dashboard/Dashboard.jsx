import { useSelector } from "react-redux";
import Charts from "../../components/charts/Charts";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/status/Loading";
import Projects from "../../components/projects/Projects";
import Widgets from "../../components/widgets/Widgets";
import Error from "../../components/status/Error";
import Layout from "../../components/Layout";


export default function Dashboard() {
  const { status } = useSelector((state) => state.projects);

  if(status==="rejected"){
    return <Error/>
  }
  return (<Layout>
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
</Layout>
     

  );
}

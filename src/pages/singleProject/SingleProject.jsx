import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import "./SingleProject.scss"
import { selectprojectById } from "../../features/projects/projectSlice";
import { useParams } from "react-router-dom";
import Loading from "../../components/status/Loading";
export default function SingleProject() {
    const {projectId}=useParams(); 
    const {status}=useSelector(state=>state.projects)
    const project=useSelector(state=>selectprojectById(state,projectId));
    if(status==="pending"){
      return <Loading/>
    }
  return (
   <Layout>
    <div className="container-fluid single-product">
    <div className="image rounded-3" style={{backgroundImage:`url(${project.image})`}}></div>
    <div className="card card-body mx-3 mx-md-4 mt-n6">
      <div className="row">
        <div className="col-xs-12">
        <ul className="list-group">
  <li className="list-group-item list-group-item-primary"><h4>company:</h4> {project.company}</li>
  <li className="list-group-item list-group-item-secondary"><h4>budget:</h4>{project.budget}</li>
  <li className="list-group-item list-group-item-success"><h4>logo:</h4><img src={`${project.logo}`} alt={`${project.company}`}></img></li>
  <li className="list-group-item list-group-item-danger"><h4>summary:</h4>{project.summary}</li>

</ul>
        </div>
      </div>
    </div>
    </div>
   </Layout>
  )
}

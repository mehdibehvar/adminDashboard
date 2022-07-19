import Alerts from "../../components/Alerts";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/Layout";
import ShowNotifButtons from "../../components/ShowNotifButtons";


export default function Notifications() {
  return (
    <Layout>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="card mt-4">
              <div className="card-header p-3">
                <h5 className="mb-0">Alerts</h5>
              </div>
              <Alerts />
            </div>
            <ShowNotifButtons />
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

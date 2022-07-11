
export default function Invoices() {
  return (
    <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Invoices</h6>
                </div>
                <div className="col-6 text-end">
                  <button className="btn btn-outline-primary btn-sm mb-0">View All</button>
                </div>
              </div>
            </div>
            <div className="card-body p-3 pb-0">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-1 text-dark font-weight-bold text-sm">March, 01, 2020</h6>
                    <span className="text-xs">#MS-415646</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $180
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">February, 10, 2021</h6>
                    <span className="text-xs">#RV-126749</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $250
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">April, 05, 2020</h6>
                    <span className="text-xs">#FB-212562</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $560
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">June, 25, 2019</h6>
                    <span className="text-xs">#QW-103578</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $120
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="text-dark mb-1 font-weight-bold text-sm">March, 01, 2019</h6>
                    <span className="text-xs">#AR-803481</span>
                  </div>
                  <div className="d-flex align-items-center text-sm">
                    $300
                    <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
  )
}

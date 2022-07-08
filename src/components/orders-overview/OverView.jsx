
export default function OverView() {
  return (
    <div className="col-lg-4 col-md-6">
    <div className="card h-100">
      <div className="card-header pb-0">
        <h6>Orders overview</h6>
        <p className="text-sm">
          <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
          <span className="font-weight-bold">24%</span> this month
        </p>
      </div> 
      <div className="card-body p-3">
        <div className="timeline timeline-one-side">
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="material-icons text-success text-gradient">notifications</i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
            </div>
          </div>
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="material-icons text-danger text-gradient">code</i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
            </div>
          </div>
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="material-icons text-info text-gradient">shopping_cart</i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
            </div>
          </div>
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="material-icons text-warning text-gradient">credit_card</i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
            </div>
          </div>
          <div className="timeline-block mb-3">
            <span className="timeline-step">
              <i className="material-icons text-primary text-gradient">key</i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
            </div>
          </div>
          <div className="timeline-block">
            <span className="timeline-step">
              <i className="material-icons text-dark text-gradient">payments</i>
            </span>
            <div className="timeline-content">
              <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
              <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

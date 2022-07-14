
import Invoice from "./Invoice";
export default function Invoices({cards}) {
const {invoices}=cards?cards[0]:[];

  return (
    <div className="col-lg-4">
          <div className="card">
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
            <div className="card-body p-3 pb-0 invoices"  style={{height:"390px",overflowY:"scroll"}}>
              <ul className="list-group">
             {invoices?invoices.map(invoice=><Invoice key={invoice.serial} invoice={invoice}/>):null}
              </ul>
            </div>
          </div>
        </div>
  )
}

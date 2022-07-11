
export default function PaymentMethod() {
  return (
    <div className="col-md-12 mb-lg-0 mb-4">
    <div className="card mt-4">
      <div className="card-header pb-0 p-3">
        <div className="row">
          <div className="col-6 d-flex align-items-center">
            <h6 className="mb-0">Payment Method</h6>
          </div>
          <div className="col-6 text-end">
            <a className="btn bg-gradient-dark mb-0" href="/"><i className="material-icons text-sm">add</i>&nbsp;&nbsp;Add New Card</a>
          </div>
        </div>
      </div>
      <div className="card-body p-3">
        <div className="row">
          <div className="col-md-6 mb-md-0 mb-4">
            <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
              <img className="w-10 me-3 mb-0" src="../assets/img/logos/mastercard.png" alt="logo"/>
              <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
              <i className="material-icons ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Card">edit</i>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
              <img className="w-10 me-3 mb-0" src="../assets/img/logos/visa.png" alt="logo"/>
              <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
              <i className="material-icons ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Card">edit</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

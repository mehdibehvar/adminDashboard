import useSeperateNumbers from "../../customHooks/useSeperateNumbers"

const Cart = ({cart}) => {
    const modifiedCartNumber=useSeperateNumbers(cart.number,4);
    console.log(cart);
  return (
    <div key={cart.id} className="col-xl-6 mb-xl-0 mb-4">
    <div className="card bg-transparent shadow-xl">
<div className="overflow-hidden position-relative border-radius-xl">
        <img src="../assets/img/illustrations/pattern-tree.svg" className="position-absolute opacity-2 start-0 top-0 w-100 z-index-1 h-100" alt="pattern-tree"/>
        <span className="mask bg-gradient-dark opacity-10"></span>
        <div className="card-body position-relative z-index-1 p-3">
          <i className="material-icons text-white p-2">wifi</i>
          <h5 className="text-white mt-4 mb-5 pb-2">{modifiedCartNumber}</h5>
          <div className="d-flex">
            <div className="d-flex">
              <div className="me-4">
                <p className="text-white text-sm opacity-8 mb-0">Card Holder</p>
                <h6 className="text-white mb-0">{cart.cardHolder}</h6>
              </div>
              <div>
                <p className="text-white text-sm opacity-8 mb-0">Expires</p>
                <h6 className="text-white mb-0">{cart.expires}</h6>
              </div>
            </div>
            <div className="ms-auto w-20 d-flex align-items-end justify-content-end">
              <img className="w-60 mt-2" src={`${cart.logo}`} alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart
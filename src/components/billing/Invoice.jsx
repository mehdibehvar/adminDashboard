export default function Invoice({invoice}) {
  return (
    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div className="d-flex flex-column">
      <h6 className="mb-1 text-dark font-weight-bold text-sm">{invoice.date}</h6>
      <span className="text-xs">{invoice.serial}</span>
    </div>
    <div className="d-flex align-items-center text-sm">
{invoice.price}    
  <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="material-icons text-lg position-relative me-1">picture_as_pdf</i> PDF</button>
    </div>
  </li>
  )
}

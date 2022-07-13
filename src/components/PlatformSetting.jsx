
export default function PlatformSetting() {
  return (
    <div className="col-12 col-xl-4">
    <div className="card card-plain h-100">
      <div className="card-header pb-0 p-3">
        <h6 className="mb-0">Platform Settings</h6>
      </div>
      <div className="card-body p-3">
        <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
        <ul className="list-group">
          <li className="list-group-item border-0 px-0">
            <div className="form-check form-switch ps-0">
              <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
              <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault">Email me when someone follows me</label>
            </div>
          </li>
          <li className="list-group-item border-0 px-0">
            <div className="form-check form-switch ps-0">
              <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"/>
              <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
            </div>
          </li>
          <li className="list-group-item border-0 px-0">
            <div className="form-check form-switch ps-0">
              <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" defaultChecked/>
              <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault2">Email me when someone mentions me</label>
            </div>
          </li>
        </ul>
        <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
        <ul className="list-group">
          <li className="list-group-item border-0 px-0">
            <div className="form-check form-switch ps-0">
              <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3"/>
              <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault3">New launches and projects</label>
            </div>
          </li>
          <li className="list-group-item border-0 px-0">
            <div className="form-check form-switch ps-0">
              <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" defaultChecked/>
              <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault4">Monthly product updates</label>
            </div>
          </li>
          <li className="list-group-item border-0 px-0 pb-0">
            <div className="form-check form-switch ps-0">
              <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5"/>
              <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" htmlFor="flexSwitchCheckDefault5">Subscribe to newsletter</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

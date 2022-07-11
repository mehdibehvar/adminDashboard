export default function ProjectRow({ project }) {
  const { logo, company, budget,completion } = project;
  return (
    <tr>
      <td>
        <div className="d-flex px-2">
          <div>
            <img
              src={`${logo}`}
              className="avatar avatar-sm rounded-circle me-2"
              alt="spotify"
            />
          </div>
          <div className="my-auto">
            <h6 className="mb-0 text-sm">{company}</h6>
          </div>
        </div>
      </td>
      <td>
        <p className="text-sm font-weight-bold mb-0">${budget}</p>
      </td>
      <td>
        <span className="text-xs font-weight-bold">working</span>
      </td>
      <td className="align-middle text-center">
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-2 text-xs font-weight-bold">{completion}%</span>
          <div>
            <div className="progress">
              <div
                className="progress-bar bg-gradient-info"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </td>
      <td className="align-middle">
        <button className="btn btn-link text-secondary mb-0">
          <i className="fa fa-ellipsis-v text-xs"></i>
        </button>
      </td>
    </tr>
  );
}


export default function AuthorRow({author}) {
    const {avatar,email,name,status,expert,employed,func}=author;
  return (
    <tr>
    <td>
      <div className="d-flex px-2 py-1">
        <div>
          <img src={`${avatar}`} className="avatar avatar-sm me-3 border-radius-lg" alt="user1"/>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h6 className="mb-0 text-sm">{name}</h6>
          <p className="text-xs text-secondary mb-0">{email}</p>
        </div>
      </div>
    </td>
    <td>
      <p className="text-xs font-weight-bold mb-0">{func}</p>
      <p className="text-xs text-secondary mb-0">{expert}</p>
    </td>
    <td className="align-middle text-center text-sm">
      <span className={`badge badge-sm bg-gradient-${status==="ONLINE"?"success":"danger"}`}>{status}</span>
    </td>
    <td className="align-middle text-center">
      <span className="text-secondary text-xs font-weight-bold">{employed}</span>
    </td>
    <td className="align-middle">
      <a href="/" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
      </a>
    </td>
  </tr>
  )
}


export default function Member({member}) {
    const {avatar,name}=member;
  return (
    <a href="/" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title={name}>
    <img src={`${avatar}`} alt={name}/>
  </a>
  )
}

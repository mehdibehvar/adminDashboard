import "./Loading.scss"
export default function Loading({customStyle}) {
  return (
    <div className={`${customStyle?customStyle:"loading-wrapper"} d-flex justify-content-center align-items-center`}>
          <div className="spinner-border text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    </div>
  
  )
}

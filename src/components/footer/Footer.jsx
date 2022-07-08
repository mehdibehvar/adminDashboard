import './Footer.scss'
export default function Footer({pageStyle}) {
  return (
    <footer className={`footer ${pageStyle?pageStyle:"py-4"}`}>
    <div className={`container${pageStyle?null:"-fluid"}`}>
      <div className="row align-items-center justify-content-lg-between">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <div className="copyright text-center text-sm text-muted text-lg-start">
            © <script>
              document.write(new Date().getFullYear());
            </script>,
            made with <i className="fa fa-heart"></i> by
            <a href="https://www.creative-tim.com" className="font-weight-bold">mehdi behvar</a>
            for a better web.
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="nav nav-footer justify-content-center justify-content-lg-end">
            <li className="nav-item">
              <a href="https://www.creative-tim.com" className="nav-link text-muted">Creative Tim</a>
            </li>
            <li className="nav-item">
              <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted">About Us</a>
            </li>
            <li className="nav-item">
              <a href="https://www.creative-tim.com/blog" className="nav-link text-muted">Blog</a>
            </li>
            <li className="nav-item">
              <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted">License</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={`iframe`} className="nav-link">Iframe</Link>
            <Link to={`xlsx`} className="nav-link">SheetJs</Link>
            <Link to={`file-viewer`} className="nav-link">File Viewer</Link>
            <Link to={`docx-js`} className="nav-link">Docx Js</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

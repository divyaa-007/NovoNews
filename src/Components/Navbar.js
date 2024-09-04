import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    navbarCollapse.classList.remove("show");
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NovoNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" onClick={handleLinkClick}>Home</Link>
              </li>
              
              <li className="nav-item"><Link className="nav-link" to="/business" onClick={handleLinkClick}>Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment" onClick={handleLinkClick}>Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general" onClick={handleLinkClick}>General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health" onClick={handleLinkClick}>Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science" onClick={handleLinkClick}>Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports" onClick={handleLinkClick}>Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology" onClick={handleLinkClick}>Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

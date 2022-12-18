import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
    <nav className="justify-content-center">
     <div className="search container-fluid">
      <form className="d-flex">
       <input className="form-control me-2 btn-primary raunded-pill main-btn" type="search" placeholder="Search..." aria-label="Search"/>
     </form>
  </div>
</nav>
          <div className="logo">
           <img  src="../../images/logo.webp" className="img" alt="website"/>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav ms-5 mb-2 mb-lg-1" >
              <li className="nav-item">
                <Link to="/" className="nav-link p-lg-3 active" aria-current="page" >Sales</Link>
              </li>
              <li className="nav-item">
              <Link to="/subcategory?category=Men" className="nav-link  p-lg-3">Men</Link>
              </li>
              <li className="nav-item">
              <Link to="/subcategory?category=Women" className="nav-link  p-lg-3">Women</Link>
              </li>
              <li className="nav-item">
                <Link to="/subcategory?category=Kids" className="nav-link  p-lg-3">Kids</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};
export default NavBar;
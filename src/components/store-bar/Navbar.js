import React from "react";
import "./Navbar.css"
import logo from "../../images/logo.webp";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">


    <nav className="justify-content-center">
     <div className="search" classname="container-fluid">
      <form className="d-flex">
       <input className="form-control me-2 btn-primary raunded-pill main-btn" type="search" placeholder="Search..." aria-label="Search"/>
      
     </form>
  </div>
</nav>
        
          <div className="logo">
        <Link to="/index.html" > 
           <img  src={logo} className="img" alt="website"/> 
           </Link> 
          </div>
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav ms-5 mb-2 mb-lg-1" >
              <li className="nav-item">
                <Link to="/Sale" className="nav-link p-lg-3 active" aria-current="page" >Sale</Link>
              </li>

              <li className="nav-item">
              <Link to="/Men" className="nav-link  p-lg-3">Men</Link>
              </li>

              <li className="nav-item">
              <Link to="/Women" className="nav-link  p-lg-3">Women</Link>
              </li>

              <li className="nav-item">
                <Link to="/kids" className="nav-link  p-lg-3">kids</Link>
              </li>
             
              
              
            </ul>
          </div>
        </div>
      </nav>

    );
};
export default NavBar;

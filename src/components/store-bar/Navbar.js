import React from "react";
import "./Navbar.css"
import logo from "../../images/logo.webp";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">


    <nav class="justify-content-center">
     <div className="search" class="container-fluid">
      <form class="d-flex">
      {/* <button class="btn btn-outline-" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button> */}
       <input class="form-control me-2 btn-primary raunded-pill main-btn" type="search" placeholder="Search..." aria-label="Search"/>
      
     </form>
  </div>
</nav>
        
          <div className="logo">
        <Link to="/index.html" > 
           <img  src={logo} class="img" alt="website"/> 
           </Link> 
          </div>
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main">
            <ul class="navbar-nav ms-5 mb-2 mb-lg-1" >
              <li class="nav-item">
                <Link to="/Sale" class="nav-link p-lg-3 active" aria-current="page" >Sale</Link>
              </li>

              <li class="nav-item">
              <Link to="/Men" class="nav-link  p-lg-3">Men</Link>
              </li>

              <li class="nav-item">
              <Link to="/Women" class="nav-link  p-lg-3">Women</Link>
              </li>

              <li class="nav-item">
                <Link to="/kids" class="nav-link  p-lg-3">kids</Link>
              </li>
             
              
              
            </ul>
          </div>
        </div>
      </nav>

    );
};
export default NavBar;

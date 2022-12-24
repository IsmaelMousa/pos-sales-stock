import React, { useState } from "react";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
  let navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/search/" + searchTerm);
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <div>
          <img src="./images/logo.png" className="img" alt="website" />
        </div>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-5 mb-2 mb-lg-1" >
            <li className="nav-item">
              <Link to="/seller" className="nav-link p-lg-3" id="item" aria-current="page" >Sales</Link>
            </li>
            <li className="nav-item">
              <Link to="/subcategory/Men" className="nav-link  p-lg-3" id="item">Men</Link>
            </li>
            <li className="nav-item">
              <Link to="/subcategory/Women" className="nav-link  p-lg-3" id="item">Women</Link>
            </li>
            <li className="nav-item">
              <Link to="/subcategory/Kids" className="nav-link  p-lg-3" id="item">Kids</Link>
            </li>
          </ul>
        </div>
        <nav className="justify-content-center">
          <div classame="container-fluid">
            <form className="d-flex">
              <div className="input-group"id="InputGroup">
                <span className="input-group-text" id="SearchIcon"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input className="form-control me-0 btn-primary raunded-pill main-btn"id="Search" type="search" placeholder="Search..."  onChange={handleChange} onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSubmit(event);
                  }
                }} />
              </div>
            </form>
          </div>
        </nav>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
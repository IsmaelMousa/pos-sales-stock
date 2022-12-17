import "./Navbar.css"
import { Link } from "react-router-dom";


function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
      <div>
          <Link to="/index.html" >
            <img src="./images/logo.webp" className="img" alt="website" />
          </Link>
          </div>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-5 mb-2 mb-lg-1" >
            <li className="nav-item">
              <Link to="/" className="nav-link p-lg-3" id="item" aria-current="page" >Sale</Link>
            </li>
            <li className="nav-item">
              <Link to="/subcategory?category=Men" className="nav-link  p-lg-3" id="item">Men</Link>
            </li>
            <li className="nav-item">
              <Link to="/subcategory?category=Women" className="nav-link  p-lg-3" id="item" >Women</Link>
            </li>
            <li className="nav-item">
              <Link to="/subcategory?category=Kids" className="nav-link  p-lg-3" id="item">kids</Link>
            </li>
          </ul>
        </div>
        <nav className="justify-content-center">
          <div classame="container-fluid">
            <form className="d-flex">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input className="form-control me-2 btn-primary raunded-pill main-btn" type="search" placeholder="Search..." aria-label="Search" />
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

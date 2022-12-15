import "./Navbar.css"
import logo from "../../../images/logo.webp";
import { Link } from "react-router-dom";


function NavBar() {
  return (

    <ul>

   <li className='logo'>
         <Link to="index.html">
         <img src={logo} className="img" alt="website"/></Link>
     </li>

    <li className="button">
         <Link to="#"></Link>
         <i class="fa-solid fa-user-plus"></i>
    </li>

    <li  className="button">
          <Link to="#"></Link>
          <i class="fa-sharp fa-solid fa-cart-plus"></i>
    </li>

    <li  className='return'>
         <Link to="#"></Link>
         <i className="fa-solid fa-arrow-right-from-bracket"></i>
    </li>

  </ul>
  )
};
export default NavBar;
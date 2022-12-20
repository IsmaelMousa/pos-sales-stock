import "./AdminNavBar.css"
import { Link } from "react-router-dom";
function AdminNavBar() {
    return (
        <ul>
            <li className="button">
                <Link to="/employee"> <i class="fa-solid fa-user-plus"></i></Link>

            </li>

            <li className="button">
                <Link to="/product">  <i class="fa-sharp fa-solid fa-cart-plus"></i> </Link>
            </li>
            <li className='logo'>
                <Link to="index.html">
                    <img src="./images/logo.webp" className="imgg" alt="website" /></Link>
            </li>

        </ul>
    )
};
export default AdminNavBar;
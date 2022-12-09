import "./NavBar.css"
import logo from "../../images/logo.webp";

export default function Navbar() {
    const path = window.location.pathname
    return (
        <ul>
            <li className="logo">
            <a  className="img"  href="index.html"><img src={logo} class="img" alt="website"/></a>
            </li>

            <li>
            <button className="category">
            <a href="/sale"> Sale</a>
            </button>
            </li>
            
            <li >
            <button className="category">
                <a href="/men"> Men</a>
                </button>
            </li>

            <li>
            <button className="category">
                <a href="/women"> Women</a>
                </button>
            </li>

            <li>
            <button className="category">
                <a href="/kids"> Kids</a>
                </button>
            </li>

            <li className="return">
                <button className="category">
                    <a className="return" href="#">
                        <i className="fa-solid fa-arrow-right-from-bracket" />
                    </a>
                </button>
            </li>

        </ul>
        
    )
    
}
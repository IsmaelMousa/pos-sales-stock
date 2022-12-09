import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="container">


            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/"> Logo</Link>
                    </li>
                    <li>
                        <Link to="/women"> Women</Link>
                    </li>
                    <li>
                        <Link to="/men"> Men</Link>
                    </li>
                    <li>
                        <Link to="/kids"> Kids</Link>
                    </li>
                    <li>
                        <Link to="/sale"> Sale</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
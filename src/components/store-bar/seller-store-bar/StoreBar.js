import React from 'react';
import './StoreBar.css';
import logo from "../../../images/Logo.png"

const StoreBar = () => {
    return (
        <ul>
            <li>
                <button className="btn">
                    <a href="#">
                        <i className="fa-solid fa-gear" />
                    </a>
                </button>
            </li>
            <li className='logo'>
                <a href="index.html">
                    <img src={logo} className="img" alt="website" />
                </a>
            </li>
            <li className='return'>
                <button className="btn">
                    <a href="#">
                        <i className="fa-solid fa-arrow-right-from-bracket" />
                    </a>
                </button>
            </li>
        </ul>
    );
};

export default StoreBar;
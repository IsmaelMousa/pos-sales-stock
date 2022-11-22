import React from 'react';
import './StoreBar.css';

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
            <li  style={{marginLeft: '40%'}}>
                <a href="index.html">
                    <img src="logo.png" alt="website logo" width="100" height="58" />
                </a>
            </li>
            <li style={{float: 'right'}}>
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
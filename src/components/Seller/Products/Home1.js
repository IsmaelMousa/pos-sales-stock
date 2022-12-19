import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../../index.css';
import reportWebVitals from '../../../reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SalesPage from "../../../components/Seller/Products/SalesPage"
import NavBar from "../../../components/Seller/NavBar/Navbar"
import SubCategoryCards from "../../../components/Seller/Products/SubCategoryCards"
import Search from "../../../components/Seller/Products/Search"
import Items from "../../../components/Seller/Products/ItemsPage"
import '../../../components/UI/SignInSignUp.css'

function Home1() {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <div className="parent">
                        <Routes>
                

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

        </React.StrictMode>
    );
    reportWebVitals();

}
export default Home1;
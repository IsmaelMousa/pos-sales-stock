import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignInSignupWithLocalStorage from "./components/UI/SignInSignUp"
import React from 'react';
import SalesPage from "./components/Seller/Products/SalesPage"
import SubCategoryCards from "./components/Seller/Products/SubCategoryCards"
import Search from "./components/Seller/Products/Search"
import Items from "./components/Seller/Products/ItemsPage"
import NavBar from "./components/Seller/NavBar/Navbar"
import Admin from "./components/Admin/Admin"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignInSignupWithLocalStorage />} />
        <Route path="/admin" element={<Admin />} />


          <Route path="/home1" element={<><NavBar /><div className="parent"><SalesPage /></div></>} />
          <Route path="/subcategory/:category" element={<><NavBar /><div className="parent"><SubCategoryCards /></div></>} />
           <Route path="/items/:category/:subcategory" element={<><NavBar /><div className="parent"><Items /></div></>} />
           <Route path="/search/:que" element={<><NavBar /><div className="parent"><Search /></div></>} />


        </Routes>


      
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
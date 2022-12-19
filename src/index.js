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


        <Route path="/Seller" element={<><NavBar /><SalesPage /></>} />
        <Route path="/subcategory/:category" element={<><NavBar /><SubCategoryCards /></>} />
        <Route path="/items/:category/:subcategory" element={<><NavBar /><Items /></>} />
        <Route path="/search/:que" element={<><NavBar /><Search /></>} />


      </Routes>



    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
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
import Table from './components/Admin/Table';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSignupWithLocalStorage />} />
        <Route path="/admin" element={<div className='container'><Table/></div>} />
        {/* <Route path='/employee' element={<><AdminNavBar/><Table /></>} />
        <Route path='/product' element={<> <AdminNavBar/><AdminProductsTable /></>} /> */}
        <Route path="/seller" element={<><NavBar /><div className="parent"><SalesPage /></div></>} />
        <Route path="/subcategory/:category" element={<><NavBar /><div className="parent"><SubCategoryCards /></div></>} />
        <Route path="/items/:category/:subcategory" element={<><NavBar /><div className="parent"><Items /></div></>} />
        <Route path="/search/:que" element={<><NavBar /><div className="parent"><Search /></div></>} />


      </Routes>



    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//<Route path="/main" element={<Main />} />
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SalesPage from "./components/Seller/Products/SalesPage"
import NavBar from "./components/Seller/NavBar/Navbar"
import SubCategoryCards from "./components/Seller/Products/SubCategoryCards"
import Items from "./components/Seller/Products/ItemsPage"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
  <div className="parent">
    
      <Routes>
      <Route path="/" element={<SalesPage />} />
      <Route path="/subcategory" element={<SubCategoryCards />} />
      <Route path="/items" element={<Items />} />
      
      </Routes>
      
      </div>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
reportWebVitals();
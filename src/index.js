import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//<Route path="/main" element={<Main />} />
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SalesPage from "./components/pages/SalesPage"
import NavBar from "./components/store-bar/Navbar"
import Table from './components/shopping-cart/Table'
import SubCategoryCards from "./components/pages/SubCategoryCards"
import Items from './components/pages/ItemsPage';

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
      
      <div><Table/></div>
      </div>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
reportWebVitals();
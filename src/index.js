import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home1 from './components/Seller/Products/Home1';
import SignInSignupWithLocalStorage from "./components/UI/SignInSignUp"
import React from 'react';
import Home2 from './components/Seller/Products/Home2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="parent">
        <Routes>
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
        </Routes>

        <SignInSignupWithLocalStorage />

      </div>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
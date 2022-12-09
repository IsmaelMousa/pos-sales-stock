import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//<Route path="/main" element={<Main />} />
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Logo from "./components/pages/logos"
import Women from "./components/pages/Women"
import Men from "./components/pages/Men"
import Kids from "./components/pages/Kids"
import Sale from "./components/pages/Sale"
import NavBar from "./components/store-bar/Navbar";
import KidsHats from "./components/subCategoryPageForKids/KidsHats"
import KidsHoodies from "./components/subCategoryPageForKids/KidsHoodies"
import KidsTShirt from "./components/subCategoryPageForKids/kidsT-Shirts"
import KidsJackets from "./components/subCategoryPageForKids/KidsJackets"
import KidsPants from "./components/subCategoryPageForKids/KidsPants"
import KidsShorts from "./components/subCategoryPageForKids/KidsShorts"
import KidsDresses from "./components/subCategoryPageForKids/KidsDresses"
import KidsPajamas from "./components/subCategoryPageForKids/KidsPajamas"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
        <Route path='/kids/Hat' element={<KidsHats />} />
        <Route path='/kids/Hoodies' element={<KidsHoodies />} />
        <Route path='/kids/T-Shirts' element={<KidsTShirt />} />
        <Route path='/kids/Jackets' element={<KidsJackets />} />
        <Route path='/kids/Pants' element={<KidsPants />} />
        <Route path='/kids/Shorts' element={<KidsShorts />} />
        <Route path='/kids/Dresses' element={<KidsDresses />} />2
        <Route path='/kids/Pyjamas' element={<KidsPajamas />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
reportWebVitals();

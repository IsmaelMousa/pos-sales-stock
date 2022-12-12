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
import WomenCoats from "./components/subCategoryPageForWomen/WomenCoats"
import WomenDressPage from "./components/subCategoryPageForWomen/WomenDresses"
import WomenHoodiePage from "./components/subCategoryPageForWomen/WomenHoodie"
import WomenJacket from "./components/subCategoryPageForWomen/WomenJacket"
import WomenPantPage from "./components/subCategoryPageForWomen/WomenPants"
import WomenPyjamas from "./components/subCategoryPageForWomen/WomenPyjamas"
import WomenShirtsPage from "./components/subCategoryPageForWomen/WomenShirt"
import WomenTShirt from "./components/subCategoryPageForWomen/WomenTShirts"
import MenCoat from "./components/subCategoryPageForMen/MenCoat"
import MenJacket from "./components/subCategoryPageForMen/MenJacket"
import MenPant from "./components/subCategoryPageForMen/MenPant"
import MenShirt from "./components/subCategoryPageForMen/MenShirt"
import MenShort from "./components/subCategoryPageForMen/MenShort"
import MenSweater from "./components/subCategoryPageForMen/MenSweater"
import MenTShirt from "./components/subCategoryPageForMen/MenTShirt"
import MenPajama from "./components/subCategoryPageForMen/MenPajama"
import Table from './components/shopping-cart/Table';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
  <div className="parent">
    
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
        <Route path='/kids/Dresses' element={<KidsDresses />} />
        <Route path='/kids/Pyjamas' element={<KidsPajamas />} />
        <Route path='/Women/Coats' element={<WomenCoats />} />
        <Route path='/Women/Dresses' element={<WomenDressPage />} />
        <Route path='/Women/Hoodies' element={<WomenHoodiePage />} />
        <Route path='/Women/Jacket' element={<WomenJacket />} />
        <Route path='/Women/Pants' element={<WomenPantPage />} />
        <Route path='/Women/Pyjamas' element={<WomenPyjamas />} />
        <Route path='/Women/Shirt' element={<WomenShirtsPage />} />
        <Route path='/Women/T-Shirts' element={<WomenTShirt />} />
        <Route path='/Men/Coat' element={<MenCoat />} />
        <Route path='/Men/Jacket' element={<MenJacket />} />
        <Route path='/Men/Pant' element={<MenPant />} />
        <Route path='/Men/Shirt' element={<MenShirt />} />
        <Route path='/Men/Short' element={<MenShort />} />
        <Route path='/Men/Sweater' element={<MenSweater />} />
        <Route path='/Men/T-Shirt' element={<MenTShirt />} />
        <Route path='/Men/Pyjama' element={<MenPajama />} />
      </Routes>
      
      <div><Table/></div>
      </div>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
reportWebVitals();

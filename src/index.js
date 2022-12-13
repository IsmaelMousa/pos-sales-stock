import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//<Route path="/main" element={<Main />} />
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Logo from "./components/pages/logos"
import Women from "./components/pages/Women"
import Men from "./components/pages/Men"
import Kids from "./components/pages/Kids"
import Sale from "./components/pages/Sale"
import NavBar from "./components/store-bar/Navbar";
import KidsHats from "./components/sub-category-page-for-kids/KidsHats"
import KidsHoodies from "./components/sub-category-page-for-kids/KidsHoodies"
import KidsTShirt from "./components/sub-category-page-for-kids/kidsT-Shirts"
import KidsJackets from "./components/sub-category-page-for-kids/KidsJackets"
import KidsPants from "./components/sub-category-page-for-kids/KidsPants"
import KidsShorts from "./components/sub-category-page-for-kids/KidsShorts"
import KidsDresses from "./components/sub-category-page-for-kids/KidsDresses"
import KidsPajamas from "./components/sub-category-page-for-kids/KidsPajamas"
import WomenCoats from "./components/sub-category-page-for-women/WomenCoats"
import WomenDressPage from "./components/sub-category-page-for-women/WomenDresses"
import WomenHoodiePage from "./components/sub-category-page-for-women/WomenHoodie"
import WomenJacket from "./components/sub-category-page-for-women/WomenJacket"
import WomenPantPage from "./components/sub-category-page-for-women/WomenPants"
import WomenPyjamas from "./components/sub-category-page-for-women/WomenPyjamas"
import WomenShirtsPage from "./components/sub-category-page-for-women/WomenShirt"
import WomenTShirt from "./components/sub-category-page-for-women/WomenTShirts"
import MenCoat from "./components/sub-category-page-for-men/MenCoat"
import MenJacket from "./components/sub-category-page-for-men/MenJacket"
import MenPant from "./components/sub-category-page-for-men/MenPant"
import MenShirt from "./components/sub-category-page-for-men/MenShirt"
import MenShort from "./components/sub-category-page-for-men/MenShort"
import MenSweater from "./components/sub-category-page-for-men/MenSweater"
import MenTShirt from "./components/sub-category-page-for-men/MenTShirt"
import MenPajama from "./components/sub-category-page-for-men/MenPajama"
import Table from './components/shopping-cart/Table';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className="parent">

        <Routes>
          <Route path="/" element={<Sale/>} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/logo" element={<Logo />} />
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

        <div><Table /></div>
      </div>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
reportWebVitals();

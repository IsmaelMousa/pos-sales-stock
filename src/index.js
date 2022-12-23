import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignupWithLocalStorage from "./components/UI/SignInSignUp";
import React from "react";
import SalesPage from "./components/Seller/Products/Sales/SalesPage";
import SubCategoryPage from "./components/Seller/Products/SubCategory/SubCategoryPage";
import Search from "./components/Seller/Products/Search";
import Items from "./components/Seller/Products/Items/ItemsPage";
import NavBar from "./components/Seller/NavBar/Navbar";
import Table from "./components/Admin/Table";
import ShoppingCart from "./components/Seller/Products/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSignupWithLocalStorage />} />
        <Route
          path="/admin"
          element={
            <div className="p-4 bg-light">
              <Table />
            </div>
          }
        />
        <Route
          path="/seller"
          element={
            <>
              <NavBar />
              <div className="parent bg-light">
                <SalesPage />
                <ShoppingCart />
              </div>
            </>
          }
        />
        <Route
          path="/subcategory/:category"
          element={
            <>
              <NavBar />
              <div className="parent bg-light">
                <SubCategoryPage />
                <ShoppingCart />
              </div>
            </>
          }
        />
        <Route
          path="/items/:category/:subcategory"
          element={
            <>
              <NavBar />
              <div className="parent bg-light">
                <Items />
                <ShoppingCart />
              </div>
            </>
          }
        />
        <Route
          path="/search/:que"
          element={
            <>
              <NavBar />
              <div className="parent bg-light">
                <Search />
                <ShoppingCart />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

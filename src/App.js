import SignInSignupWithLocalStorage from "./components/UI/SignInSignUp"
import Home1 from "./components/Seller/Pages/Home1"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SubCategoryCards from "./components/Seller/Pages/SubCategoryCards"
import Items from "./components/Seller/Pages/ItemsPage"
import ReactDOM from 'react-dom/client';
import SalesPage from "./components/Seller/Pages/SalesPage";
import Admin from "./components/Admin/Admin";
function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <Routes>
        <Route path="/salePage" element={<SalesPage />} />
        <Route path="/subcategory" element={<SubCategoryCards />} />
        <Route path="/items" element={<Items />} />
        <Route path="/admin" element={<Admin />} />



      </Routes>

    </>
  )
}
export default App;
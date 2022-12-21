import React from "react";
import { Link } from "react-router-dom";
import './SignInSignUp.css';
function Home() {
    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }
    const goPage = () => {

        return (
            <Link to="/seller"> Go To Seller Page</Link>
        )
    }
    const goAdmin = () => {

        return (
            <Link to="/admin"> Go To Admin Page</Link>
        )
    }
    return (
        <div className="home1">
            <div>
            <button onClick={goPage} className="goSeller">
                  <Link to="/seller" className="goSeller">Go To Seller Page</Link></button>
            <button onClick={goAdmin} className="goAdmin">
                  <Link to="/admin" className="goAdmin">Go To Admin Page</Link></button>
                  </div>
          <div>
            <button onClick={logout} className="button" id="logout">LogOut</button>
            <button onClick={deleteAccount} className="button" id ="delete">Delete Account</button>
            </div>
           
        </div>
    );
}
export default Home;

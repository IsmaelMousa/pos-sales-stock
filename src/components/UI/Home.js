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
                  </div><br></br>
                  <div>
            <button onClick={goAdmin} className="goAdmin">
                  <Link to="/admin" className="goAdmin">Go To Admin Page</Link></button></div>
                  <div><br></br>
            <button onClick={logout} className="button" id="logout">LogOut</button></div>
            <div><br></br>
            <button onClick={deleteAccount} className="button" id ="delete">Delete Account</button>
            </div><br></br>
           
        </div>
    );
}
export default Home;

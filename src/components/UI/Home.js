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
            <button onClick={goPage} className="goPage">
                  <Link to="/seller" className="goPage">Go To Seller Page</Link></button>
            <br></br>
            <button onClick={goAdmin} className="goPage">
                  <Link to="/admin" className="goPage">Go To Admin Page</Link></button>
            <br></br>
            <button onClick={logout} className="state">LogOut</button>
           <br></br>
            <button onClick={deleteAccount} className="state">Delete Account</button>
            <br></br>
           
        </div>
    );
}
export default Home;

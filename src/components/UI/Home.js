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
        <div>

            <h1>Welcome {localStorage.getItem('name')}</h1>
            <h2>Click on the Go To Seller button to go to the page designated for you, please</h2>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
            <button onClick={goPage} className="goPage">  <Link to="/seller">Go To Seller Page</Link></button>
            <button onClick={goAdmin} className="goAdmin">  <Link to="/admin">Go To Admin Page</Link></button>
        </div>
    );
}
export default Home;

import React, { useState } from "react";
import NavBar from "../store-bar/Navbar";
import './SignInSignUp.css';
function Home() {
    const [active, setActive] = useState("")
    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }
    const goSeller = () => {
        return (

            setActive("NavBar")
        )
    }
    const goAdmin = () => {
        return (

            console.log("ali")
        )
    }
    return (
        <div>
            <h1>Home Page </h1>
            <p>Wellcome {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
            <button onClick={goSeller} className="go">Go to Seller Page</button>
            <button onClick={goAdmin} className="go">Go to Admin Page</button>

            <div>
                {active === "NavBar" && <NavBar />}
                {active === "" && <div>
                    welcooom </div>}
            </div>
        </div>
    );
}
export default Home;

import { useRef, useState } from "react";
import Admin from "../admin/Admin";
import Seller from "../seller/Seller";
import "./LoginSignup.css";

const LoginSignup = () => {
    const [admin, setLogin] = useState(true);
    const LoginSignupRef = useRef(null);
    const handleClick = () => {
        setLogin(!admin);
        LoginSignupRef.current.classList.toggle("active");
    };
    return (
        <div className="login-signup-container" ref={LoginSignupRef}>

            <Admin />
            <div className="side-div">
                <button type="button" onClick={handleClick}>
                    {" "}
                    {admin ? "Seller" : "Admin"}
                </button>

            </div>
            <Seller />
        </div>

    );
};

export default LoginSignup;
import { useRef, useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./LoginSignup.css";

const LoginSignup = () => {
    const [login, setLogin] = useState(true);
    const LoginSignupRef = useRef(null);
    const handleClick = () => {
        setLogin(!login);
        LoginSignupRef.current.classList.toggle("active");
    };
    return (
        <div className="login-signup-container" ref={LoginSignupRef}>

            <Login />
            <div className="side-div">
                <button type="button" onClick={handleClick}>
                    {" "}
                    {login ? "Signup" : "Login"}
                </button>

            </div>
            <Signup />
        </div>

    );
};

export default LoginSignup;
import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";

function SignInSignupWithLocalStorage() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)
    const localSignUp = localStorage.getItem("signUp")
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")
    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
        if (localEmail) {
            setShow(true)
        }
    })
    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signUp", email.current.value)
            alert("Account created successfully!!")
            window.location.reload()
        }
    }

    const handleSignIn = () => {
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem("signUp", email.current.value)
            window.location.reload()
        } else {
            alert("Please Enter valid Credential")
        }
    }
    return (

        <div>
            {showHome ? <Home /> :
                (show ?

                    <div className="container col-xl-10 col-xxl-8 px-4 py-5 ">
                        <div className="row align-items-center g-lg-5 py-5 ">
                            <div className="col-md-10 mx-auto col-lg-5 ">
                                <form className="p-4 p-md-5 border rounded-3 bg-light shadow-lg ">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" ref={email} />
                                        <label htmlFor="floatingInput">Email Address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" ref={password} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="checkbox mb-3">
                                        <label>
                                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <button className="w-100 btn btn-lg btn-outline-secondary " onClick={handleSignIn}>Sign in</button>
                                    <hr className="my-4" />
                                    <small className="text-muted"> Chic Style  2022-2023 .</small>
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                        <div className="row align-items-center g-lg-5 py-5">
                            <div className="col-md-10 mx-auto col-lg-5">
                                <form className="p-4 p-md-5 border rounded-3 bg-light shadow-lg ">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" ref={name} />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" ref={email} />
                                        <label htmlFor="floatingInput">Email Address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" ref={password} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <button className="w-100 btn btn-lg btn-outline-secondary " onClick={handleClick}>Sign up</button>
                                    <hr className="my-4" />
                                    <p className="text-center text-secondary">Welcome to our store </p>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>

    );
}
export default SignInSignupWithLocalStorage;
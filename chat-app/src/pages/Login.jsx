import React from 'react'
import "./Login.scss";

const Login = () => {
    return (
        <>
            <div className="formContainer">
                <div className="formWrapper">
                    <span className="heading">We Chat</span>
                    <span className="pageTitle">Login</span>

                    <form action="">
                        <input type="email" placeholder='email' />
                        <input type="password" placeholder='password' />
                        <button>Sign In</button>
                    </form>

                    <p>You don't hae an account? Register</p>
                </div>
            </div>

        </>
    )
}

export default Login

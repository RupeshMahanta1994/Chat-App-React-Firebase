import React from 'react'
import "./Login.scss";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="heading">We Chat</span>
                <span className="pageTitle">Register</span>

                <form action="">
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type="file" />
                    <button>Sign Up</button>
                </form>

                <p>You don't hae an account? Login</p>
            </div>
        </div>
    )
}

export default Register

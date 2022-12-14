import React from 'react'
import "./Login.scss";

const Register = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value)

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[3].value;
        const file = e.target[4].files[0];
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="heading">We Chat</span>
                <span className="pageTitle">Register</span>

                <form onSubmit={handleSubmit}>
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

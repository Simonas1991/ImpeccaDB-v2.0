// libs
import React from 'react';
// -------------------------------------------------------->

// custom css
import './Login.css';
// -------------------------------------------------------->

// material-ui components
import { Button } from '@material-ui/core';
/* ------------------------------------------ */

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        emailError,
        passwordError
    } = props;

    return (
        <section className='login'>
            <div className="loginContainer">
                <label>Username</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='errorMsg'>{passwordError}</p>
                <div className="btnContainer">
                    < Button onClick={handleLogin}>Sign in</Button>
                </div>
            </div>
        </section>
    )
}

export default Login;



import React from 'react';
import "./css/Login.css";
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className='login'>
            <div class="con1">
                <div class="log">
                    <img src="https://cdn.pixabay.com/photo/2023/08/17/14/56/14-56-38-681_150.png" alt="Logo" />
                </div>
                <div class="title">Login</div>
                <div class="co">
                    <form action="#">
                        <div class="user-detail">
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" placeholder="Enter your Email" required />
                            </div>
                        </div>
                        <div class="user-detail">
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="password" placeholder="Enter your password" required />
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Login" />
                        </div>
                        <div class="not-registered">
                            <p>Not a registered user? <Link to="/register">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
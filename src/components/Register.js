import React from 'react'
import "./css/Register.css"
function Register() {
    return (
        <div className='reg'>
        <div class="con2">
            <div class="logo2">
                <img src="https://cdn.pixabay.com/photo/2023/08/17/14/56/14-56-38-681_150.png" alt="Logo" />
            </div>

            <div class="con2">
                <div className="title text-dark">Registration</div>
                <div class="co2">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">First Name</span>
                                <input type="text" placeholder="Enter your first name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Surname</span>
                                <input type="text" placeholder="Enter your surname" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="password" placeholder="Enter your password" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Confirm Password</span>
                                <input type="password" placeholder="Confirm your password" required />
                            </div>
                        </div>
                        <div class="gender-details">

                            <div class="category">

                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Register" />
                        </div>
                        <div class="already-registered">
                            <p>Already Registered? <a href="login.html">Sign In</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register
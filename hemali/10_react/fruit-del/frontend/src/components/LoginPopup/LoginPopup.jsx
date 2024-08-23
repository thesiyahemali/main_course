import React, { useState } from 'react'
import './LoginPoPup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currstate, setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>
            {currstate}
          </h2>
          <img src={assets.cross_icon} alt="close" onClick={() => setShowLogin(false)}  />
        </div>

        <div className="login-popup-inputs">
          {currstate === "Login" ? <></> : <input type="text" placeholder='Your name' required />}

          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your password' required />

        </div>
        <button>{currstate === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currstate === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span> </p>
          : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span> </p>

        }

      </form>
    </div>
  )
}

export default LoginPopup


import logo from "../images/logo.png"
import { useState } from "react"

function App() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
      </header>
      <main className="main">
        <h1 className="title">Sign in to App</h1>
        <div className="redallert">
          <p className="allert_text">Incorrect username or password.</p>
          <button className="allert_exit"></button>
        </div>
        <div className="signin_box">
          <form className="signin_form" action="#" name="signin">
            <label className="lable" forhtml="email">Email address</label>
            <input className="input" type="email" name="email" id="email" required />
            <div className="lable_box">
              <label className="lable" forhtml="password">Password</label>
              <span className="link">Forgot password?</span>
            </div>
            <input className="input" type="password" name="password" id="password" required />
            <button className="signin_btn" type="submit" aria-label="Sign in">Sign in</button>
          </form>
        </div>

        <div>
          <span>New password was sent</span>
          <img src="" alt="exit icon" />
        </div>

        <div>
          <form action=""></form>
        </div>

        <div>
          <span>
            New to App? <span>Creat an account.</span>
          </span>
          <img src="" alt="exit icon" />
        </div>
      </main>

      <footer>
        <span></span>
      </footer>
    </>
  );
}

export default App;

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
        <div>
          <form action=""></form>
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

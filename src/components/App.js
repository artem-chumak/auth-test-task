import logo from "../images/logo.png";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    email: "user@mail.ru",
    password: "123456",
  });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isUserWrong, setUserWrong] = useState(false);
  const [isPasswordForgotten, setPasswordForgotten] = useState(false);
  const [isPasswordSent, setPasswordSent] = useState(false);

  const handlePassForgotten = () => {
    isPasswordForgotten
      ? setPasswordForgotten(false)
      : setPasswordForgotten(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    handleLogin(email, password);
  };

  const handleSubmitNewPass = (e) => {
    e.preventDefault();
    setPasswordForgotten(false);
    setPasswordSent(true);
    e.target.reset();
  };

  const handleLogin = (email, password) => {
    if (email !== user.email || password !== user.password) {
      setUserWrong(true);
    }
  };

  const handleCloseAlert = () => {
    setUserWrong(false);
    setPasswordSent(false);
  };

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
      </header>
      <main className="main">
        <h1 className="title">Sign in to App</h1>
        <div className={isUserWrong ? "redallert" : "hide"}>
          <p className="allert_text">Incorrect username or password.</p>
          <button onClick={handleCloseAlert} className="allert_exit"></button>
        </div>
        <div className="signin_box">
          <form
            onSubmit={handleSubmit}
            className="signin_form"
            action="#"
            name="signin"
          >
            <label className="lable" forhtml="email">
              Email address
            </label>
            <input
              value={data.email}
              onChange={handleChange}
              className="input"
              type="email"
              name="email"
              id="email"
              required
            />
            <div className="lable_box">
              <label className="lable" forhtml="password">
                Password
              </label>
              <span onClick={handlePassForgotten} className="link">
                Forgot password?
              </span>
            </div>
            <input
              value={data.password}
              onChange={handleChange}
              className="input"
              type="password"
              name="password"
              id="password"
              required
            />
            <button className="signin_btn" type="submit" aria-label="Sign in">
              Sign in
            </button>
          </form>
        </div>

        <div className={isPasswordSent ? "greenallert" : "hide"}>
          <p className="allert_text">New password was sent</p>
          <button
            onClick={handleCloseAlert}
            className="greenallert_exit"
          ></button>
        </div>

        <div className={isPasswordForgotten ? "forgot_box" : "hide"}>
          <form
            onSubmit={handleSubmitNewPass}
            className="forgot_form"
            action="#"
            name="forgot"
          >
            <label className="lable" forhtml="forgot_email">
              Email address
            </label>
            <input
              className="forgot_input"
              type="email"
              name="forgot_email"
              id="forgot_email"
              required
            />
            <button
              className="signin_btn"
              type="submit"
              aria-label="Send new password"
            >
              Send new password
            </button>
          </form>
        </div>

        <div className="prospect">
          <span>
            New to App? <span className="prospect_link">Creat an account.</span>
          </span>
        </div>
      </main>

      <footer className="footer">
        <span className="author">Artem Chumak 2021</span>
      </footer>
    </>
  );
}

export default App;

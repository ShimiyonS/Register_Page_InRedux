import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Login = () => {
  const users = useSelector((state) => state.user);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState();
  const history = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (users.email === email && users.password === password) {
      toast("Login Successfully");
      history("/homepage");
    } else {
      setAlert("Check the given values");
    }
  };
  const navigate = () => {
    history("/");
  };
  return (
    <div className="background">
    <div className="container">    <div className="login-section">
      <div className="form-box login">
        <form onSubmit={handelSubmit}>
          <h2>Sign In</h2>
          <div className="input-box">
                <span className="icon">
                  <i className="bx bxs-envelope"></i>
                </span>
                <input
                  type="email"
                  required
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i className="bx bxs-lock-alt"></i>
                </span>
                <input
                  type="password"
                  required
                  id="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>
          <button className="btn">Login In</button>
          {alert}

          <div className="create-account">
            <p>
              Create A New Account?
              <button className="register-link" onClick={navigate}>
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Login;

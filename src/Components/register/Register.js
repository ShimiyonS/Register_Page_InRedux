import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerRedux } from "../../redux/reducer/authSlice";
import { toast } from "react-hot-toast";

export const Register = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(registerRedux({ name, email, password }));
    toast("Register Successfully");
    history("/login");
  };

  const navigate = () => {
    history("/login");
  };
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="form-box">
            <form onSubmit={handelSubmit}>
              <h2>Sign Up</h2>
              <div className="input-box">
                <span className="icon">
                  <i className="bx bxs-user"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  autoComplete="given-name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Username</label>
              </div>
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
              <button className="btn" type="submit">
                Login In
              </button>
              <div className="create-account">
                <p>
                  Already Have An Account?
                  <button
                    className="login-link"
                    type="submit"
                    onClick={navigate}
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

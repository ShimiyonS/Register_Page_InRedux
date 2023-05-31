import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Homepage.css";
import { logoutRedux } from "../../redux/reducer/authSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const users = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
    history("/");
  };
  return (
    <>
      <div className="home-background">
        <div className="item">
          <div className="text-item">
            <div style={{ display: "flex", justifyContent: "right" }}>
              <button className="Logout-btn" onClick={handleLogout}>
                LogOut
              </button>
            </div>
            <h2>
              HELLO!! &nbsp;&nbsp;<u>{users.name}</u>&nbsp;&nbsp;
              <span> Welcome! To Our WebPage</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              repellendus?
            </p>

            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shimiyon-s-060610187/">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="Facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

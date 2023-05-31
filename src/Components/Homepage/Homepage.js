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
          <div style={{display: 'flex', justifyContent: 'right'}}>
            <button className="Logout-btn" onClick={handleLogout}>
              LogOut
            </button>
            </div>
            <h2>
              HELLO!! <u>{users.name}</u>
              {"  "}
              Welcome! <br />
              <span>To Our WebPage</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              repellendus?
            </p>
            
            <div className="social-icon">
              <a href="a">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="a">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="a">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="a">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="a">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

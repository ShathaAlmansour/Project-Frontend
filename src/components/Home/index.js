import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Home = () => {
  const Navigate = useNavigate();
  if(localStorage.getItem("newUser"))  Navigate("/skin");
  const login = () => {
    Navigate("/login");
  };
  const signUp = () => {
    Navigate("/signUp");
  };
  return (
      <div className="home-container">
        <div className="home-box">
         <p> Skin purity & hair care </p>
          <div className="btn-box">
         <Link to="/login">Login</Link>
         <Link to="/signUp">SignUp</Link>
         </div>
        </div>
      </div>
  );
};
export default Home;

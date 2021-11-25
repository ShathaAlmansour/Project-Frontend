import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoLogIn, IoLogOut } from "react-icons/io5";

const Nav = () => {
  const navigate = useNavigate();
  const kick = () => {
    localStorage.clear();
    navigate("/SignUp");
  };
  return (
    <>
      <div className="wrapper">
        <div className="navMenu">
          <NavLink to="/hair" className="links">
            Hair Care
          </NavLink>
          <NavLink to="/skin" className="links">
              Skin Care
          </NavLink>
          <NavLink to="/login" className="links">
            <IoLogIn/>
          </NavLink>
          <NavLink to="/shop" className="links">
            <BsFillCartFill />
          </NavLink>
          <NavLink to="/" onClick={kick} className="links">
            <IoLogOut />
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Nav;
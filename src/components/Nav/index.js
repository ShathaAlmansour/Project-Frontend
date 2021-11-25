import React from "react";
import "./style.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
// import {
//   GiPistolGun,
//   GiAmmoBox,
//   GiSwitchWeapon,
//   GiHeavyArrow,
// } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
// import {  } from "react-icons/gr";
import { IoLogIn, IoLogOut } from "react-icons/io5";
// import logo from "../imges/logo.jpg";

const Nav = () => {
  const navigate = useNavigate();
  const kick = () => {
    localStorage.clear();
    navigate("/SignUp");
  };
  return (
    <>
      <div className="wrapper">
        {/* <NavLink to="/home" className="links">
          <img id="logo" src={logo} />
        </NavLink> */}
        <div className="navMenu">
          <NavLink to="/hair" className="links">
            Hair Care
          </NavLink>
          <NavLink to="/skin" className="links">
              Skin Care
          </NavLink>
          {/* <NavLink to="/knife" className="links">
            <GiSwitchWeapon />
          </NavLink>
          <NavLink to="/arrow" className="links">
            <GiHeavyArrow />
          </NavLink> */}
                    
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
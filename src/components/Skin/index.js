import React from "react";
import Nav from "../Nav/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./style.css";

const Skin = () => {
  const navigate = useNavigate();
  const [weapn, setWeapn] = useState([]);

  const getweapon = async () => {
    const display = await axios.get("http://localhost:4000/product");
    console.log(display);
    setWeapn(display.data.filter((item) => item.kind == "Skin"));
  };
  useEffect(() => {
    getweapon();
  }, []);
  const kick = () => {
    localStorage.clear();
    navigate("/SignUp");
  };
  return (
    <>
      <Nav />
      <div className="mainwrapper">
        {weapn.map((item) => {
          return (
            <div className="full">
              <img src={item.img} id="imag" />
              <h4>{item.name}</h4>
              <h6>{item.descrapion}</h6>
              <h5>{item.price}</h5>
              <button className="but">Like</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Skin;

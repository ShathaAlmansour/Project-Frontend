import React from "react";
import Nav from "../Nav/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { BsFillCartFill } from "react-icons/bs";
import "./style.css";

const Skin = () => {
  const navigate = useNavigate();
  const [weapn, setWeapn] = useState([]);
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);

  const getweapon = async () => {
    const display = await axios.get("http://localhost:4000/product");
    console.log(display);
    setWeapn(display.data.filter((item) => item.kind == "Skin"));
  };
  useEffect(() => {
    getweapon();
  }, []);
  const getLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("newUser"))) {
      getDataEmail();
    }
    getLocalStorage();
    // eslint-disable-next-line
  }, []);
  const getDataEmail = async () => {
    const user = JSON.parse(localStorage.getItem("newUser"));
    const item = await axios.get(
      `http://localhost:4000/users/cart/${user.email}`
    );
    console.log(item, "item.data");
    setRemAdd(item.data);
    console.log("remAdd", remAdd);
  };

  const removeOrAdd = async (id) => {
    let test = [];
    console.log(id, "id");
    remAdd.forEach((item) => {
      test.push(item._id);
    });

    if (test.includes(id)) {
      // document.getElementById(`${id}`).innerHTML = "Add";

      await axios.put(
        `http://localhost:4000/users/removecart/${local.email}/${id}`
      );
    } else {
      // document.getElementById(`${id}`).innerHTML = "Remove";

      await axios.put(
        `http://localhost:4000/users/yourcart/${local.email}/${id}`
      );
    }
    test = [];
    getDataEmail();
    getLocalStorage();
  };


  useEffect(() => {
    // test1();
  }, [remAdd]);

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
              <button
                onClick={() => {
                  removeOrAdd(item._id);
                }}
              >
                <BsFillCartFill />
              </button>
              {/* <button className="but"><BsFillCartFill /></button> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Skin;

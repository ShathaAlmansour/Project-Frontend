import React from "react";
import Nav from "../Nav/index";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { BsFillCartFill } from "react-icons/bs";
import "./style.css";

const Skin = () => {
  const navigate = useNavigate();
  const [weapn, setWeapn] = useState([]);
  const [email, setEmail] = useState("");
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);

  const getweapon = async () => {
    const display = await axios.get("http://localhost:4000/product");
    console.log(display);

    // eslint-disable-next-line
    setWeapn(display.data.filter((item) => item.kind == "Skin"));
  };
  useEffect(() => {
    getweapon();
  }, [local]);
  const getLocalStorage = () => {
    if (local) {
    }
    const item = JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };
  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("newUser"))) {
  //     getDataEmail();
  //   } else {
  //     Swal.fire("The Internet?", "That thing is still around?", "question");
  //     getweapon();
  //   }
  useEffect(() => {
    if (localStorage.getItem("newUser"))
        setEmail(localStorage.getItem("newUser"));
    else {
        Swal.fire({
            title: "To view the site, please login!",
            text: "After pressing ok, you will be directed to login",
            icon: "question",
            didClose: () => {
              navigate("/login");
               
            },
        });
    }

    getLocalStorage();

    // eslint-disable-next-line
  }, []);
  const getDataEmail = async () => {
    const user = JSON.parse(localStorage.getItem("newUser"));

    const item = await axios.get(
      `http://localhost:4000/users/cart/${user.email}`
    );
    setRemAdd(item.data);
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

  // const kick = () => {
  //   localStorage.clear();
  //   navigate("/SignUp");
  // };
  return (
    <>
      <Nav />
      <div className="mainwrapper">
        {email ? (
          <>
            {weapn.map((item) => {
              return (
                <div className="full">
                  <img src={item.img} id="imag" alt="#" />
                  <h4>{item.name}</h4>
                  <h6>{item.descrapion}</h6>
                  <h5>{item.price}</h5>
                  <button className="slah"
                    onClick={() => {
                      removeOrAdd(item._id);
                    }}
                  >
                    <BsFillCartFill />
                  </button>
                </div>
              );
            })}
          </>
         ) : ("")} 
      </div>
    </>
  );
};
export default Skin;

// <div className="full">
// <img src={item.img} id="imag" alt="#" />
// <h4>{item.name}</h4>
// <h6>{item.descrapion}</h6>
// <h5>{item.price}</h5>
// <button
//   onClick={() => {
//     removeOrAdd(item._id);
//   }}
// >
//   <BsFillCartFill />
// </button>

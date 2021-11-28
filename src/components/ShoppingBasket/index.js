import React from "react";
import Nav from "../Nav";

import axios from "axios";
// import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import "./style.css";

const Shop = () => {
  // const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);

  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  const getData = async () => {
    if (local) {
      const item = await axios.get(
        `http://localhost:4000/users/cart/${local.email}`
      );
      setAccount(item.data);
    }
  };

  useEffect(() => {
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  // Navigate to character info

  // Remove from favorite
  const removeFavorite = (id) => {
    axios.put(`http://localhost:4000/users/removecart/${local.email}/${id}`);
    getLocalStorage();
  };
  return (
    <>
      <Nav />
        <div className="cart-box">
          {account.length > 0 &&
            account.map((item, i) => {
              return (
                <div className="full">
                  <img src={item.img} alt="#" id="imag" />

                  <h4>{item.name}</h4>
                  <h4>{item.price}</h4>
                  <h4>{item.kind}</h4>
                  <button className="slah"
                    onClick={() => {
                      removeFavorite(item._id);
                    }}
                  >
                    Remove 
                  </button>
                </div>
              );
            })}
        </div>
        </>
  );
};
export default Shop;

import React from "react";
import Nav from "../Nav";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const Shop = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  // Get info the character base on email from backend
  const getData = async () => {
    const item = await axios.get(`http://localhost:4000/users/${local.email}`);
    setAccount(item.data);
  };
  useEffect(() => {
    getLocalStorage();
  }, []);
  useEffect(() => {
    getData();
  }, [local]);
  const itemInfo = (name) => {
    console.log(name);
    navigate(`home/${name}`);
  };
  const removeFavorite = (id) => {
    axios.put(`http://localhost:4000/user/removeFav/${local.email}/${id}`);
    getLocalStorage();
  };
  return (
    <div>
      <Nav />
      <p>Favorite</p>
      {account.length &&
        account.map((item, i) => {
          return (
            <div>
              <div onClick={() => itemInfo(item.name)}>
                {" "}
                <h1>{item.name}</h1>
                <img src={item.img} alt="character" />
              </div>
              <button onClick={() => removeFavorite(item._id)}> Remove</button>
            </div>
          );
        })}
    </div>
  );
};

export default Shop;

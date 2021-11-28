import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Hair from "./components/Hair";
import Skin from "./components/Skin";
import Shop from "./components/ShoppingBasket";
import Nav from "./components/Nav";
import Profile from "./components/Profile"



function App() {
  return (
    <>
 

      <Routes>
      <Route path="/Profile" element={<Profile />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skin" element={<Skin />} />
        <Route exact path="/hair" element={<Hair />} />
        <Route exact path="/shop" element={<Shop />} />
        
      </Routes>
    </>
  );
}

export default App;

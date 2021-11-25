import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Hair from "./components/Hair";
import Skin from "./components/Skin";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skin" element={<Skin />} />
        <Route exact path="/hair" element={<Hair />} />
      </Routes>
    </>
  );
}

export default App;

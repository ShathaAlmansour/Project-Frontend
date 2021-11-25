import React from "react";
import Nav from "../Nav/index";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getData = async () => {
    const items = await axios.get("http://localhost:4000/users");
    setUsers(items.data);
    console.log(items.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const registerPage = () => {
    navigate("/signup");
  };
  const submitlogin = (e) => {
    e.preventDefault();
    let ckeck = false;

    users.map((item) => {
      console.log(item.email);
      console.log(item.password);
      if (item.email === email && item.password === password) {
        ckeck = true;
      }
    });
    if (ckeck) {
      try {
        localStorage.setItem("newUser", JSON.stringify({ email }));
        navigate("/Skin");
      } catch (error) {
        console.log("error ", error);
      }
    } else {
      let myWindow = window.alert("Email is wrong or password ");
    }
  };
  return (
    <>
      <Nav />
      <div>
        <div className="contener">
          <div className="formDiv">
            <form onSubmit={submitlogin}>
              <h2>Login</h2>
              <br />
              <br />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control form-group"
              />
              <br />
              <br />
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Login"
              />
              <br />
              <br />
              <br />
              <br />
              <p onClick={registerPage}>Don't have an account ?</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

import {React} from "react";
import Nav from "../Nav/index";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";

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

     // eslint-disable-next-line
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
       // eslint-disable-next-line 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email or Name error!',
        footer: '<a href="login">Check your account</a>'
      })
      
    }
  };
  return (
    <div className="login-container">
          <div className="form-container">
              <h1>Login</h1>
            <form onSubmit={submitlogin} className="form-box">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
              <input
                type="submit"
                className="form-btn"
                value="Login"
              />

            </form>
            <Link to="/signup">Don't have an account ?</Link>
          </div>
        </div>
  );
};
export default Login;

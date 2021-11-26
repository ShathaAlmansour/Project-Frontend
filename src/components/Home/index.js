import React from "react";
import "./style.css";
import { useNavigate } from "react-router";

const Home = () => {
  const Navigate = useNavigate();
  const login = () => {
    Navigate("/login");
  };
  const signUp = () => {
    Navigate("/signUp");
  };
  return (
      <div className="homeContenerr">
        <div className="home">
          <p className="homeP"> Skin purity and hair care reflect our essence </p>
          <form className="start">
            <input
              onClick={login}
              type="submit"
              value="Login"
            />
            <input
              onClick={signUp}
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
  );
};
export default Home;

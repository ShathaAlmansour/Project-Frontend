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
    <>
      <div className="contenerr">
        <div className="row">
          <form className="start">
            <input
              onClick={login}
              type="submit"
              className="btn btn-danger btn-block"
              value="Login"
            />
            <input
              onClick={signUp}
              type="submit"
              className="btn btn-danger btn-block"
              value="Register"
            />
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Home;

import React, { Component } from "react";
import Nav from "../Nav/index";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }
  changeUserName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  async submitSignUp(event) {
    event.preventDefault();
    const riges = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    if (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    ) {
      await axios
        .post("http://localhost:4000/users/create", riges)
        .then((res) => console.log(res));
      window.location = "/Skin";
      this.setState({
        name: "",
        email: "",
        password: "",
      });
   }   else Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `Don't have account!`,
    
  })
  }
  
  render() {
    return (
        <div className="login-container">
          <div className="form-container">
                <h1>SignUp</h1>
              <form onSubmit={this.submitSignUp} className="form-box">
                <input
                  type="text"
                  placeholder="User Name"
                  onChange={this.changeUserName}
                  value={this.state.name}
                  className="form-input"
                />
 
                <input
                  type="email"
                  placeholder="Email"
                  onChange={this.changeEmail}
                  value={this.state.email}
                  className="form-input"
                />

                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={this.state.password}
                  className="form-input"
                />
                <input
                  type="submit"
                  className="form-btn"
                  value="Register"
                />
              </form>
              <Link to="/login">Do you have an account ?</Link>
            </div>
          </div>
    );
  }
}

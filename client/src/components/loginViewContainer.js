import React, { Component } from "react";
import axios from "axios";
import "./login.css";

class Login extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    const postData = {
      username: username.value,
      password: password.value
    };
    axios
      .post("/login", postData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <img
          src="https://user-images.githubusercontent.com/36166288/45061767-924b3300-b0ae-11e8-93fc-8e935fec045a.png"
          class="mainIcon"
          alt="icon"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input class="username" name="username" placeholder="username" />
            <input class="password" name="password" placeholder="password" />
          </div>
          <div>
            <button type="submit" id="loginbutt">
              Log in
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default Login;

import React, { Component } from "react";
import Footer from "../footer/Footer";
import "./login.css";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="login_warapper">
          <div className="login_image">
            <img
              src="https://cms.goodfight.shop/uploads/_/archive/satur-date/6503/8b48b.jpg"
              alt="loginimage"
            />
          </div>
          <div className="login_container">
            <div className="login_logo">
              <img
                className="login_logo_image"
                src="./logo.png.png"
                alt="logo"
              />
            </div>
            <div className="login_input_container">
              <form className="swiss_login_upper">
                <input
                  type="email"
                  required="required"
                  placeholder="Enter your Email"
                />
                <input type="password" placeholder="Enter your Password" />
                <button class="brackets">
                  <span class="brackets_span">
                    <span>[</span> Submit <span>]</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

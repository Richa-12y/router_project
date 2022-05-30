import React, { Component } from "react";
import "./signup.css";
import Footer from "../footer/Footer";

export default class Signup extends Component {
  render() {
    return (
      <>
        <div className="signup_warapper">
          <div className="signup_image">
            <img
              src="https://cms.goodfight.shop/uploads/_/archive/satur-date/6503/8b48b.jpg"
              alt="signupimage"
            />
          </div>
          <div className="signup_container">
            <div className="signup_logo">
              <img
                className="signup_logo_image"
                src="./logo.png.png"
                alt="logo"
              />
            </div>
            <div className="signup_input_container">
              <form className="swiss_signup_upper">
                <input
                  type="text"
                  required="required"
                  placeholder="Enter your FirstName"
                />
                <input
                  type="text"
                  required="required"
                  placeholder="Enter your LastName"
                />
                <input
                  type="email"
                  required="required"
                  placeholder="Enter your Email"
                />
                <input type="password" placeholder="Enter your Password" />
                <input
                  type="password"
                  placeholder="Enter your Confirm Password "
                />

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

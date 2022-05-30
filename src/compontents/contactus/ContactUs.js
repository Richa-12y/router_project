import React, { Component } from "react";
import "./contactus.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import Footer from "../footer/Footer";

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <div className="contactus_wrapper">
          <div className="contactus_title_wrapper">
            <h1>CONTACT</h1>
          </div>
          <div className="contactus_heading_wrapper">
            <h2>We'd 🤍 to help!</h2>
            <p style={{ fontSize: "1rem", color: "white", cursor: "pointer" }}>
              We like to create things with open-minded people.Feel free to say
              hello!
            </p>
          </div>
          <div className="contactus_title_input_wrapper">
            <div className="contactus_title_input">
              <input
                type="text"
                required="required"
                placeholder="Enter your Name"
              />
              <input
                type="email"
                required="required"
                placeholder="Enter your Email"
              />
              <textarea>Message here</textarea>
              <button class="brackets_contact">
                <span class="brackets_span_contact">
                  <span>[</span>Send<span>]</span>
                </span>
              </button>
            </div>
            <div className="contactus_title_wrapper_right">
              <div className="contact_title_wrapper_icon">
                <ImLocation2 size={"2rem"} color={"#00ffff"} />
                <span className="Icont_contact">
                  Asirward Nagar,Purnea,Bihar 854301
                </span>
                <BsFillTelephoneFill size={"2rem"} color={"#00ffff"} />
                <span className="Icont_contact">+91-8543210088</span>
                <MdEmail size={"2rem"} color={"#00ffff"} />
                <span className="Icont_contact">greatfit@gmail.com</span>
              </div>

              <div className="icon_style">
                <BsFacebook size={"2rem"} color={"#00ffff"} />
                <RiInstagramFill size={"2rem"} color={"#00ffff"} />
                <AiFillTwitterCircle size={"2rem"} color={"#00ffff"} />
                <BsPinterest size={"2rem"} color={"#00ffff"} />
                <AiOutlineWifi size={"2rem"} color={"#00ffff"} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

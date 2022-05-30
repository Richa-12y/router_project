import React, { Component } from "react";
import "./nav.css";
import NavComopents from "../lib/navcomopents/NavComopents";

export default class Nav extends Component {
  render() {
    const NavComopentsData = [
      {
        path: "/greatfit",
        text: "GreatFit",
      },
      {
        path: "/",
        text: "Home",
      },
      {
        path: "/about",
        text: "About",
      },
      {
        path: "/login",
        text: "Login",
      },
      {
        path: "/signup",
        text: "Signup",
      },
      {
        path: "/contactus",
        text: "Contact-Us",
      },
    ];
    return (
      <div className="nav_bar">
        <ul>
          {NavComopentsData.map((e, i) => {
            return <NavComopents key={i} path={e.path} text={e.text} />;
          })}
        </ul>
      </div>
    );
  }
}

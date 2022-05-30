import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavComopents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const activeStyle = {
      textDecoration: "none",
      color: "#0affff",
    };

    const inActiveStyle = {
      textDecoration: "none",
      color: "white",
    };
    return (
      <li>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          to={this.props.path}
        >
          {this.props.text}
        </NavLink>
      </li>
    );
  }
}

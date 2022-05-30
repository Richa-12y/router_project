import React, { Component } from "react";
import "./footer.css";
import dummyFooter from "./dummyFooter.json";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Copyright©2021 GootFit.All rights reserved.",
    };
  }
  render() {
    console.log(dummyFooter);
    return (
      <>
        <div className="footer_container">
          {dummyFooter.footerDataDetils.map((e, i) => {
            return (
              <ul key={i}>
                <li>{e.listDataOne}</li>
                <li>{e.listDataTwo}</li>
                <li>{e.listDataThree}</li>
                <li>{e.listDataFour}</li>
                <li>{e.listDataFive}</li>
              </ul>
            );
          })}
        </div>
        <footer>{this.state.title}</footer>
      </>
    );
  }
}

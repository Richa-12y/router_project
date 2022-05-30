import React, { Component } from "react";
import dummyDataCard from "../../dummyDataCard.json";
import Table from "./Table";

export default class Card extends Component {
  render() {
    return (
      <div className="wrapper">
        {dummyDataCard.cardShoppingArrayOfProduct.map((e, i) => {
          return (
            <div
              key={i}
              className="container"
              style={{ backgroundImage: `url(${e.imageCardUrl})` }}
            >
              {/* here we give table it is pop of on top */}
              <Table />

              <div className="left">
                <div className="details">
                  <h1 className="details_title">{e.titleCard}</h1>
                  <p>{e.priceCard}</p>
                </div>
                <div className="buy">
                  <i className="material-icons">add_shopping_cart</i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

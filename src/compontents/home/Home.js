import React, { Component } from "react";
import "./home.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillFolderAdd } from "react-icons/ai";
import { RiChatDeleteFill } from "react-icons/ri";
import dummyData from "../../dummyData.json";
import Footer from "../footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="main_Container">
        <div className="shopping_Cart">
          <div class="title">Shopping Bag</div>
          <>
            {dummyData.shoppingCardArrayOfProduct.map((e, i) => {
              return (
                <div key={i} className="item">
                  <div className="buttons">
                    <RiDeleteBack2Fill className="delete_btn" />
                    <BsFillSuitHeartFill className="like_btn" />
                  </div>
                  <div className="image">
                    <img className="image_Design" src={e.imgUrl} alt="domo" />
                  </div>
                  <div className="description">
                    <span>{e.title}</span>
                    <span>{e.name}</span>
                    <span>{e.rating}</span>
                    <span>{e.color}</span>
                  </div>
                  <div className="quantity">
                    <AiFillFolderAdd
                      className="add_button_below"
                      type="button"
                      name="button"
                    />

                    <RiChatDeleteFill
                      className="delete_button_below"
                      type="button"
                      name="button"
                    />
                  </div>
                  <div className="total-price">{e.price}</div>
                </div>
              );
            })}
          </>
        </div>
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./about.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Footer from "../footer/Footer";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about_wrapper">
          <div className="about_wrapper_container">
            <div className="about_logo">
              <img
                className="about_logo_image"
                src="./logo.png.png"
                alt="logo"
              />
            </div>
            <div className="about_title">{`An E-commerce company of fashion & lifestyle products in India`}</div>
          </div>
          <div className="about_content">
            GreatFit is a major Indian fashion e-commerce company headquartered
            in Bihar, Patna, India. The company was founded in 2021 to sell
            personalized gift items. In May 2022, GreatFit.com was acquired by
            Flipkart. ONLINE SHOPPING MADE EASY AT GreatFit. If you would like
            to experience the best of online shopping for men, women and kids in
            India, you are at the right place. GreatFit is the ultimateWikipedia
            GreatFit is a major Indian fashion e-commerce company headquartered
            in Bihar, Patna, India. The company was founded in 2021 to sell
            personalized gift items. In May 2022, GreatFit.com was acquired by
            Flipkart. ONLINE SHOPPING MADE EASY AT GreatFit. If you would like
            to experience the best of online shopping for men, women and kids in
            India, you are at the right place. GreatFit is the ultimateWikipedia
            GreatFit is a major Indian fashion e-commerce company headquartered
            in Bihar, Patna, India. The company was founded in 2021 to sell
            personalized gift items. In May 2022, GreatFit.com was acquired by
            Flipkart. ONLINE SHOPPING MADE EASY AT GreatFit. If you would like
            to experience the best of online shopping for men, women and kids in
            India, you are at the right place. GreatFit is the ultimateWikipedia
            GreatFit is a major Indian fashion e-commerce company headquartered
            in Bihar, Patna, India. The company was founded in 2021 to sell
            personalized gift items. In May 2022, GreatFit.com was acquired by
            Flipkart. ONLINE SHOPPING MADE EASY AT GreatFit. If you would like
            to experience the best of online shopping for men, women and kids in
            India, you are at the right place. GreatFit is the ultimateWikipedia
            GreatFit is a major Indian fashion e-commerce company headquartered
            in Bihar, Patna, India. The company was founded in 2021 to sell
            personalized gift items. In May 2022, GreatFit.com was acquired by
            Flipkart. ONLINE SHOPPING MADE EASY AT GreatFit. If you would like
            to experience the best of online shopping for men, women and kids in
            India, you are at the right place. GreatFit is the ultimateWikipedia
          </div>
          <div className="about_socialmedia">
            <BsFacebook size={"4rem"} color={"#00ffff"} />
            <RiInstagramFill size={"3rem"} color={"#00ffff"} />
            <AiFillTwitterCircle size={"3rem"} color={"#00ffff"} />
            <BsPinterest size={"3rem"} color={"#00ffff"} />
            <MdEmail size={"4rem"} color={"#00ffff"} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

import React from "react";
import classes from "./Footer.module.css";
import logoFace2 from "../assets/logoFace2.png";
import logoLink from "../assets/logoLink.png";
import logoYou from "../assets/logoYoutube.png";
import logoInsta from "../assets/logoInsta.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.column}>
            <h4 className={classes.h4}>Made by Josue Alvarado</h4>
            <img
              alt="logo-lions"
              src="https://www.lionintel.com/img/logo_lion.png"
            ></img>
          </div>
          <div className={classes.column}>
            <h4 className={classes.titleh4}>COMPANY</h4>
            <p>Why Us</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Product & Services</p>
          </div>
          <div className={classes.column}>
            <h4 className={classes.title2h4}>SOCIAL</h4>
            <a href="https://www.facebook.com/Lionintel/">
              <img
                className={classes.img}
                alt="logo-face"
                src={logoFace2}
              ></img>
            </a>
            <a href="https://www.facebook.com/Lionintel/">
              <img className={classes.img} alt="logo-face" src={logoLink}></img>
            </a>
            <a href="https://www.facebook.com/Lionintel/">
              <img className={classes.img} alt="logo-face" src={logoYou}></img>
            </a>
            <a href="https://www.facebook.com/Lionintel/">
              <img
                className={classes.img}
                alt="logo-face"
                src={logoInsta}
              ></img>
            </a>
          </div>
          <div className={classes.copyRight}>
            <p>
              Copyright ©2022 All rights reserved | This template is made with ♡
              by Colorlib
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

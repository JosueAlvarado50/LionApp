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
            <p>columna 1</p>
            <img
              alt="logo-lions"
              src="https://www.lionintel.com/img/logo_lion.png"
            ></img>
          </div>
          <div className={classes.column}>
            <p>COMPANY</p>
            <p>Why Us</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Product & Services</p>
          </div>
          <div className={classes.column}>
            <p>SOCIAL</p>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;

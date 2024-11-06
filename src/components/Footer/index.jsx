import React from "react";
import * as styles from "./Footer.module.css";
import { FaDiscord, FaTwitch, FaFacebook, FaInstagram, FaMailchimp, FaMailBulk, FaGoogle } from "react-icons/fa";
import Logo from "../../assets/LogoNova_Footer.png";

export default function Footer(props) {
  return (
    <footer>
      <img src={Logo} alt="logo" className={styles.logo} />
      <p>{props.rodape}</p>
      <div className={styles.logos}>
        <FaGoogle/>
        <FaDiscord/>
        <FaTwitch/>
        <FaFacebook/>
        <FaInstagram/>
      </div>
    </footer>
  );
}

import React from "react";
import * as styles from "./Footer.module.css";
import { FaDiscord, FaTwitch, FaFacebook, FaInstagram, FaMailchimp, FaMailBulk, FaGoogle } from "react-icons/fa";
import Logo from "../../assets/Logo_Footer.svg";

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo" className={styles.logo} />
      <p>&copy;Direitos reservados a PlayConnect</p>
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

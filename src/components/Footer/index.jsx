import React from "react";
import * as styles from "./Footer.module.css";
import {
  FaDiscord,
  FaTwitch,
  FaFacebook,
  FaInstagram,
  FaMailchimp,
  FaMailBulk,
  FaGoogle,
} from "react-icons/fa";
import Logo from "../../assets/LogoNova_Footer.png";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer>
      <img src={Logo} alt="logo" className={styles.logo} />
      <p>{props.rodape}</p>
      <div className={styles.logos}>
        <Link to={"http://gmail.com"}>
          <FaGoogle />
        </Link>
        <Link to={"https://discord.com/"}>
          <FaDiscord />
        </Link>
        <Link to={"https://www.twitch.tv/"}>
          <FaTwitch />
        </Link>
        <Link to={"https://www.facebook.com/"}>
          <FaFacebook />
        </Link>
        <Link to={"https://www.instagram.com/"}>
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
}

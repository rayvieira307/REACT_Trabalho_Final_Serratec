import React from 'react'
import * as styles from "./Header.module.css"
import Logo from "../../assets/Logo_Header.svg"

export default function Header() {
  return (
    <header className={styles.cabecalho}>
        <img src={Logo} alt="logo" className={styles.logo}/>
        <h1>PlayConnect</h1>
    </header>
  )
}
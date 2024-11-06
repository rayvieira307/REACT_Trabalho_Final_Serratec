import React from 'react'
import * as styles from "./Header.module.css"
import Logo from "../../assets/LogoNova_Header.png"
import Perfil from "../../assets/Perfil_Header.svg"
export default function Header() {
  return (
    <header className={styles.cabecalho}>
       <a href="/home"><img src={Logo} alt="logo" className={styles.logo}/></a>
        <h1>PlayConnect</h1>
        <a href="/perfil"><img src={Perfil} alt="perfil" className={styles.perfil}/></a> 
    </header>
        
  )
}
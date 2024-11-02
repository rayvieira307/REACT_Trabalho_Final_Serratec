import React from "react";
import * as styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.formulario}>
          <h2>Seja bem-vindo</h2>
          <form>
            <div className={styles.emailInput}>
              <label>Email</label>
              <input type="text" name="email" />
            </div>
            <div className={styles.senhaInput}>
              <label>Senha</label>
              <input type="text" name="senha" />
            </div>
            <Link to={"/home"}>
            <button className={styles.buttonLogin}>Login</button>
            </Link>
          </form>
          <Link to={"/cadastrar"} >
          <button className={styles.buttonCadastrar}>Cadastrar</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

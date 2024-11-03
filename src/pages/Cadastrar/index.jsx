import React from "react";
import * as styles from "./Cadastrar.module.css";
import { Link } from "react-router-dom";

export default function Cadastrar() {
  return (
    <main className={styles.container}>
      <div className={styles.principal}>
        <div className={styles.cadastro}>
          <form>
            <div className={styles.linha1}>
              <div className={styles.nomeInput}>
                <label>Nome</label>
                <input type="text" name="nome" />
              </div>
              <div className={styles.emailInput}>
                <label>Email</label>
                <input type="text" name="Email" />
              </div>
            </div>

            <div className={styles.linha2}>
              <div className={styles.senhaInput}>
                <label>Senha</label>
                <input type="text" name="senha" />
              </div>
              <div className={styles.confirmarSenhaInput}>
                <label>Confirmar Senha</label>
                <input type="text" name="confimarSenha" />
              </div>
            </div>

            <div className={styles.dataNascimentoInput}>
              <label>Data de Nascimento</label>
              <input type="text" name="dataNascimento" />
            </div>
          </form>
        </div>
      </div>
      <Link to={"/"}>
        <button className={styles.buttonEnviar}>Enviar</button>
      </Link>
    </main>
  );
}

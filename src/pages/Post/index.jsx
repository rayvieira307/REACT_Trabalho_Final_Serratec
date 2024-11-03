import React from "react";
import * as styles from "./Post.module.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.formulario}>

          <form>
            <div className={styles.tituloInput}>
              <label>Título</label>
              <input type="text" name="titulo" />
            </div>
            <div className={styles.conteudoInput}>
              <label>Conteúdo</label>
              <textarea type="text" name="conteudo" cols={30} rows={10}/>
            </div>
          </form>

          <Link to={"/home"}>
            <button className={styles.buttonEnviar}>Enviar</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

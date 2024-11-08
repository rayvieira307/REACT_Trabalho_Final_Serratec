import * as styles from "./error.module.css";
import marioTriste from "../../assets/mario-mario-depressed.gif"

export default function Error() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.erro}>
          <div className={styles.titulo}>
            <h1>Error</h1>
          </div>
          <div className={styles.aviso}>
            <p>Página não encontrada! verifique o caminho!</p>
          </div>
        <img className={styles.gif}  src={marioTriste} alt="gif" />
        </div>
      </div>
    </div>
  );
}

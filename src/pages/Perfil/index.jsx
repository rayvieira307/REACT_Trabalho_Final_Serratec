import React from 'react'
import * as styles from "./Perfil.module.css";

export default function Perfil() {
  return (
    <main>
      <div className={styles.container}> 
        <div className= {styles.perfil}>
           <div className={styles.foto_usuario}>
             <img src="" alt="" />
           </div>
         <h3>Nome do Usuario</h3>
         </div>
            <div className={styles.posts}>
            <div className= {styles.post_card}>A POSTAGEM DO USUÁRIO</div>
            <div className= {styles.post_card}>A POSTAGEM DO USUÁRIO</div>
          </div> 
        </div>  
     </main>
  

  )   
}

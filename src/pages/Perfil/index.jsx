import React, { useEffect, useState } from "react";
import * as styles from "./Perfil.module.css";
import axios from "axios";
import { Link } from "react-router-dom/dist";
import amarillo from "../../assets/amarillo.jpg"

export default function Perfil() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get("http://localhost:8080/post", {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        const lista = res.data.filter(
          (item) => item.postUsuarioDTO.email == username
        );
        setPosts(lista);
        console.log(res.data);
      });
  }, []);

  function apagar(id){
    axios.delete(`http://localhost:8080/post/${id}`)
    .then(() => {
      console.log("Post apagado!!!");
      setPosts(posts.filter((post) => post.id!==id))
    })
}

  return (
    <main className={styles.container}>
        <div className={styles.perfil}>
          <div className={styles.foto_usuario}>
            <img className={styles.fotoPerfil} src={amarillo} alt="perfil" />
          </div>
          <h3>{username}</h3>
        <button className={styles.btnAtualizarPerfil}>Atualizar</button>
        </div>
        <div className={styles.post}>
          {posts.map((post, key) => (
            <div className={styles.containerCard} key={key}>
              <div className={styles.post_card}>
                <p>{post.conteudo}</p>
              </div>
              <Link to={`/atualizar/${post.id}`}>
              <button className={styles.btnAtualizar}>Atualizar</button>
              </Link>
              <button className={styles.btnDeletar} onClick={() => apagar(post.id)}>Deletar</button>
              </div>
          ))}
        </div>
    </main>
  );
}

import React, { useEffect, useState } from "react";
import * as styles from "./Perfil.module.css";
import axios from "axios";
import { Link } from "react-router-dom/dist";
import perfil from "../../assets/usuario.png"

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

  function apagarPost(id){
    axios.delete(`http://localhost:8080/post/${id}`)
    .then(() => {
      console.log("Post apagado!!!");
      setPosts(posts.filter((post) => post.id!==id))
    })
}


const contagem = () =>{
  if (posts.length == 0) {
    return "Você não possui posts ainda"
  }
  return `Você tem: ${posts.length} posts`
}

  return (
    <main className={styles.container}>
        <div className={styles.perfil}>
          <div className={styles.foto_usuario}>
            <img className={styles.fotoPerfil} src={perfil} alt="perfil" />
          </div>
          <h3>{username}</h3>
            <p className={styles.contagem}>{contagem()}</p>
          <Link to={"/post"}>
        <button className={styles.btnAtualizarPerfil}>Novo Post</button>  
          </Link>
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
              <button className={styles.btnDeletar} onClick={() => apagarPost(post.id)}>Deletar</button>
              </div>
          ))}
        </div>
    </main>
  );
}

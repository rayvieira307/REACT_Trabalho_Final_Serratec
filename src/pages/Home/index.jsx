import React, { useEffect, useState } from "react";
import * as styles from "./Home.module.css";
import { FaComment } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/post", {
        headers: {
          Authorization: { token },
        },
      })
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  return (
    <main>
      <div className={styles.global}>
        <div className={styles.cards}>
          {posts.map((post, key) => (
            <div className={styles.card} key={key}>
              <div className={styles.user}>
                <h3 className={styles.nomeUsuario}>
                  {post.postUsuarioDTO.nome + post.postUsuarioDTO.sobrenome}
                </h3>
              </div>
              <div className={styles.post}>
                <p className={styles.conteudo}>{post.conteudo}</p>
              </div>
              <div className={styles.buttonComment}>
                <FaComment className={styles.comment} />
              </div>
            </div>
          ))}
        </div>
        <Link to={"/post"}>
          <button className={styles.btnPost}>Novo Post</button>
        </Link>
      </div>
    </main>
  );
}

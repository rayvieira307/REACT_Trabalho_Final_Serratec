import * as styles from "./Post.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";

export default function Post() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addPost = (data) => {console.log(data)
  axios.post("http://localhost:8080/post", {
    Headers:localStorage.getItem(token)
  })
  .then(()=>{
  navigate("/home")
  })
  .catch(()=>{
    console.log("Problemas na requisição!");
  })
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.formulario}>

          <form onSubmit={handleSubmit(addPost)}>
            <div className={styles.conteudoInput}>
              <label htmlFor="conteudo">Conteúdo</label>
              <textarea 
              type="text" 
              name="conteudo" 
              id = "conteudo"
              cols={30} 
              rows={10} 
              {...register("conteudo")}
              />
            </div>
            <button className={styles.buttonEnviar} type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
}

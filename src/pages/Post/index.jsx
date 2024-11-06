import * as styles from "./Post.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Post() {
  const validationPost = yup.object().shape({
    conteudo: yup
      .string()
      .required("Este campo deve ser preenchido")
      .max(500, "Você ultrapassou o maximo de caracteris permitido"),
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = async (data) => {
    await axios
      .post("http://localhost:8080/post", data, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(() => {
        navigate("/home");
      })
      .catch(() => {
        console.log("Problemas na requisição!");
      });
  };

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
                id="conteudo"
                cols={30}
                rows={10}
                {...register("conteudo")}
              />
            </div>
            <button className={styles.buttonEnviar} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

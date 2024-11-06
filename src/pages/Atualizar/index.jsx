import * as styles from "./Atualizar.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom/dist";

export default function Atualizar() {
  const validationPost = yup.object().shape({
    conteudo: yup
      .string()
      .required("Este campo deve ser preenchido")
      .max(500, "Você ultrapassou o maximo de caracteris permitido"),
  });
  let navegate = useNavigate();
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })

      .then((res) => {
        console.log(res.data + "as");

        reset(res.data);
      });
  }, []);

  const altPost = (data) => {
    console.log({ id });

    axios
      .put(`http://localhost:8080/post/${id}`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        console.log(data + "teste");

        navegate("/perfil");
      })
      .catch(() => console.log({ id }));
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.formulario}>
          <form onSubmit={handleSubmit(altPost)}>
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

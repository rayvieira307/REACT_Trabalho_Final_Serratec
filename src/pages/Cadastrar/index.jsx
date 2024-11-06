//import React, { useEffect, useState } from "react";
import * as styles from "./Cadastrar.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome deve ser preenchido.")
    .max(20, "Tamanho máximo de 20 caracteres"),
  sobrenome: yup
    .string()
    .required("O sobrenome deve ser preenchido.")
    .max(40, "Tamanho máximo de 40 caracteres"),
  email: yup
    .string()
    .required("O email deve ser preenchido.")
    .max(30, "Tamanho máximo de 30 caracteres"),
  senha: yup
    .string()
    .required("A senha deve ser preenchida.")
    .max(12, "Tamanho máximo de 12 caracteres.")
    .min(8, "Minimo de 8 caracteres."),
  confirmaSenha: yup
    .string()
    .required("A senha deve ser preenchida.")
    .max(30, "Tamanho máximo de 12 caracteres")
    .min(8, "Minimo de 8 caracteres."),
  dataNascimento: yup
  .mixed()
  .required("A data de nascimento deve ser preenchida")
  .test("is-valid-date", "Data de nascimento inválida", value => {
    if (!value) return false;
    const date = new Date(value);
    return !isNaN(date.getTime()) && date <= new Date(); 
  })
});

export default function Cadastrar() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addUsuario = (data) => {
    const dataObj = new Date(data.dataNascimento);
    const dataFormatada = dataObj.toLocaleDateString("pt-BR");

    const dataParaEnvio = {
      ...data,
      dataNascimento: dataFormatada,
    };

    axios
      .post("http://localhost:8080/usuarios", data)
      .then(() => {
        console.log("Deu certo");
        navigate("/");
      })
      .catch(() => console.log("Problemas na requição"));
  };

  return (
    <main className={styles.container}>
    <div className={styles.principal}>
      <div className={styles.cadastro}>
        <form onSubmit={handleSubmit(addUsuario)}>
          <div className={styles.linha1}>
            <div className={styles.nomeInput}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                id="nome"
                {...register("nome")}
              />
              <p className={styles.errorMessage}>{errors.nome?.message}</p>
            </div>
            <div className={styles.sobrenomeInput}>
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                id="sobrenome"
                {...register("sobrenome")}
              />
              <p className={styles.errorMessage}>{errors.sobrenome?.message}</p>
            </div>
          </div>

          <div className={styles.linha2}>
            <div className={styles.emailInput}>
              <label>Email</label>
              <input
                type="text"
                name="email"
                id="email"
                {...register("email")}
              />
              <p className={styles.errorMessage}>{errors.email?.message}</p>
            </div>
            <div className={styles.dataNascimentoInput}>
              <label>Data Nascimento</label>
              <input
                type="date"
                name="dataNascimento"
                id="dataNascimento"
                {...register("dataNascimento")}
              />
              <p className={styles.errorMessage}>
                {errors.dataNascimento?.message}
              </p>
            </div>
          </div>

          <div className={styles.linha3}>
            <div className={styles.senhaInput}>
              <label>Senha</label>
              <input
                type="password"
                name="senha"
                id="senha"
                {...register("senha")}
              />
              <p className={styles.errorMessage}>
                {errors.senha?.message}
              </p>
            </div>
            <div className={styles.confirmaSenhaInput}>
              <label>Confirma Senha</label>
              <input
                type="password"
                name="confirmaSenha"
                id="confirmaSenha"
                {...register("confirmaSenha")}
              />
              <p className={styles.errorMessage}>
                {errors.confirmaSenha?.message}
              </p>
            </div>
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

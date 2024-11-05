import React, { useEffect, useState } from "react";
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
    .max(30, "Tamanho máximo de 30 caracteres"),
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
    .date()
    .required("A data de nascimento deve ser preechida."),
});

export default function Cadastrar() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addUsuario = (data) => {
    axios
      .post("https://localhost:8080/usuarios", data)
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
                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  {...register("nome")}
                />
                <p className={styles.errorMessage}>{errors.nome?.message}</p>
              </div>
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
            </div>

            <div className={styles.linha2}>
              <div className={styles.senhaInput}>
                <label>Senha</label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  {...register("senha")}
                />
                <p className={styles.errorMessage}>{errors.senha?.message}</p>
              </div>
              <div className={styles.confirmaSenhaInput}>
                <label>Confirmar Senha</label>
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

            <div className={styles.dataNascimentoInput}>
              <label>Data de Nascimento</label>

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
            <button className={styles.buttonEnviar} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

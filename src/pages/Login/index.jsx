import React, { useState } from "react";
import * as styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);
  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/login', {
          username,
          senha,
      });
        console.log(res.headers.authorization);
        
      const token = res.headers.authorization

      localStorage.setItem('token', token)
      localStorage.setItem('username', username)
      navegate("/home")

      console.log(token);
  } catch (err) {
      setErro('Erro ao fazer login: ');
      console.log(erro);
      
  }
    
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.formulario}>
          <h2>Seja bem-vindo</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.emailInput}>
              <label>Email</label>
              <input
                type="email"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.senhaInput}>
              <label>Senha</label>
              <input
                type="password"
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <button className={styles.buttonLogin} onClick={handleSubmit} >
              Login
            </button>
          </form>
          {erro && <p style={{ color: "yellow" }}>{erro}</p>}
        </div>
      </div>
      <Link to={"/cadastrar"}>
        <button className={styles.buttonCadastrar}>Cadastrar</button>
      </Link>
    </main>
  );
}

import React, { useState } from 'react';
import styles from './LoginUsuario.module.css';
import { NavBar } from '../Layout/NavBar/NavBar';

export const LoginPageUsuario: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const aoSubmeterForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
    <NavBar/>
    <div className={styles.container}>
      <div className={styles.esquerda}>
        <h1>Acesso Login</h1>
      </div>
      <div className={styles.direita}>
        <form onSubmit={aoSubmeterForm} className={styles.formulario}>
          <div className={styles.grupoInput}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="exemplo@dominio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.grupoInput}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className={styles.grupoBotoes}>
            <button type="button" className={styles.botaoSecundario}>
              Esqueceu a senha?
            </button>
            <button type="submit" className={styles.botaoPrimario}>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

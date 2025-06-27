import React, { useState } from 'react';
import styles from './LoginUsuario.module.css';
import { NavBar } from '../Layout/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import * as api from '../../services/api';

export const LoginPageUsuario: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const aoSubmeterForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.login({
        username: email,
        senha: senha
      });
      const token = response.data.token;
      const userId = response.data.usuario.id;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      // Buscar pessoa pelo userId e salvar pessoaId
      try {
        const pessoasRes = await api.api.get('/pessoas');
        const pessoa = pessoasRes.data.find((p: any) => p.userId === userId);
        if (pessoa) {
          localStorage.setItem('pessoaId', pessoa._id);
        }
      } catch (e) {
        // Se não encontrar só continua
      }
      
      navigate('/perfil-usuario');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao fazer login');
      alert('Erro ao fazer login: ' + (err.response?.data?.message || err.message));
    }
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
          <div style={{ marginBottom: '10px', textAlign: 'right' }}>
            <a href="/Front-End/cadastro-usuario" style={{ color: '#000', textDecoration: 'none', cursor: 'pointer', fontSize: '0.95em' }}>
              Não tem uma conta? clique aqui para criar uma
            </a>
          </div>
          {error && <div className={styles.erro}>{error}</div>}
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

import React, { useState } from 'react';
import styles from './CadastroUsuario.module.css';

export const CadastroUsuario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Simulação de criptografia (apenas para exemplo)
  const encrypt = (value: string) => btoa(value);

  const aoSubmeterForm = (e: React.FormEvent) => {
    e.preventDefault();
    const dados = {
      nome,
      cpf: encrypt(cpf),
      email,
      senha: encrypt(senha),
    };
    console.log(dados);
    alert('Cadastro de usuário realizado com sucesso');
  };

  return (
    <div className={styles.container}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={aoSubmeterForm} className={styles.formulario}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </label>
        <label>
          CPF:
          <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
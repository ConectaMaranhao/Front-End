import React, { useState } from 'react';
import styles from './CadastroEmpresa.module.css';

const cursosDisponiveis = [
  'Engenharia de Software',
  'Administração',
  'Ciência de Dados',
  'Marketing',
  'Design',
];

export const CadastroEmpresa: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [setor, setSetor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cursosOfertados, setCursosOfertados] = useState<string[]>([]);
  const [email, setEmail] = useState('');

  const aoSubmeterForm = (e: React.FormEvent) => {
    e.preventDefault();
    const dados = {
      nome,
      cnpj,
      cidade,
      estado,
      setor,
      descricao,
      cursosOfertados,
      email,
    };
    console.log(dados);
    alert('Empresa cadastrada com sucesso');
  };

  return (
    <div className={styles.container}>
      <h2>Cadastro de Empresa</h2>
      <form onSubmit={aoSubmeterForm} className={styles.formulario}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </label>
        <label>
          CNPJ:
          <input type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} required />
        </label>
        <label>
          Cidade:
          <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} required />
        </label>
        <label>
          Estado:
          <input type="text" value={estado} onChange={e => setEstado(e.target.value)} required />
        </label>
        <label>
          Setor:
          <input type="text" value={setor} onChange={e => setSetor(e.target.value)} required />
        </label>
        <label>
          Descrição:
          <textarea value={descricao} onChange={e => setDescricao(e.target.value)} required />
        </label>
        <label>
          Cursos Ofertados:
          <select value={cursosOfertados} onChange={e => setCursosOfertados(Array.from(e.target.selectedOptions, option => option.value))}>
            {cursosDisponiveis.map(curso => (
              <option key={curso} value={curso}>{curso}</option>
            ))}
          </select>
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Cadastrar Empresa</button>
      </form>
    </div>
  );
}
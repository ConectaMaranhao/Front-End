import React, { useState } from 'react';
import styles from './CadastroEmpresa.module.css';
import axios from 'axios';

const API_URL = 'https://conectamaranhao.onrender.com';


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
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const aoSubmeterForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // ETAPA 1: Criar usuário
      const usuarioResponse = await axios.post(`${API_URL}/usuarios`, {
        username: email,
        senha: senha,
        ativo: true
      });
      //////// mostrar resposta da criação de usuario
      console.log('usuarioResponse.data', usuarioResponse.data);
      const userId = usuarioResponse.data.user._id;

      // ETAPA 2: Criar conta
      const contaResponse = await axios.post(`${API_URL}/contas`, {
        userId: userId,
        tipo: "empresa"
      });

      //////// mostrar resposta da criação da conta
      console.log('contaResponse.data', contaResponse.data);
      const contaId = contaResponse.data.conta._id;

      // ETAPA 3: Criar empresa
      await axios.post(`${API_URL}/empresas`, {
        contaId: contaId,
        nome: nome,
        cnpj: cnpj,
        cidade: cidade,
        estado: estado,
        setor: setor,
        descricao: descricao,
        cursosOfertados: cursosOfertados,
        email: email
      });

      alert('Empresa cadastrada com sucesso!');
      setNome('');
      setCnpj('');
      setCidade('');
      setEstado('');
      setSetor('');
      setDescricao('');
      setCursosOfertados([]);
      setEmail('');
      setSenha('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao cadastrar empresa');
      alert('Erro ao cadastrar empresa: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Cadastro de Empresa</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={aoSubmeterForm} className={styles.formulario}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </label>
        <label>
          CNPJ:
          <input 
            type="text" 
            value={cnpj} 
            onChange={e => setCnpj(e.target.value)} 
            placeholder="XX.XXX.XXX/XXXX-XX"
            required 
          />
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
          <select 
            multiple
            value={cursosOfertados} 
            onChange={e => setCursosOfertados(Array.from(e.target.selectedOptions, option => option.value))}
          >
            {cursosDisponiveis.map(curso => (
              <option key={curso} value={curso}>{curso}</option>
            ))}
          </select>
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar Empresa'}
        </button>
      </form>
    </div>
  );
};
import { useState } from 'react';
import { validarCPF } from '../utils/validators';
import * as api from '../services/api';
import { useNavigate } from 'react-router-dom';

export const useCadastroPessoa = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [link, setLink] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const clearForm = () => {
    setNome('');
    setDataNascimento('');
    setTelefone('');
    setCpf('');
    setEmail('');
    setBio('');
    setLink('');
    setSenha('');
    setError('');
  };

  const aoSubmeterForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarCPF(cpf)) {
      const errorMessage = 'CPF inválido. Por favor, verifique o número digitado.';
      setError(errorMessage);
      alert(errorMessage);
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 1. Registrar usuário
      await api.registrar({
        username: email,
        senha: senha
      });
      // 2. Login automático para obter token
      const loginResponse = await api.login({
        username: email,
        senha: senha
      });
      const token = loginResponse.data.token;
      localStorage.setItem('token', token);
      const userId = loginResponse.data.usuario.id;

      // 3. Criar conta (autenticado, com userId)
      let contaResponse;
      try {
        contaResponse = await api.criarConta({
          userId: userId,
          tipo: 'pessoa',
        });
      } catch (contaErr: any) {
        console.error('Erro ao criar conta:', contaErr.response?.data || contaErr.message);
        throw new Error('Erro ao criar conta: ' + (contaErr.response?.data?.message || contaErr.message));
      }
      const contaId = contaResponse.data.conta?._id;
      if (!contaId) {
        throw new Error('Conta não foi criada corretamente.');
      }

      // 4. Criar pessoa (autenticado)
      const pessoaData = {
        contaId: contaId,
        nome: nome,
        dataNascimento: new Date(dataNascimento).toISOString(),
        telefone: telefone ? telefone.replace(/[^\d]+/g, '') : undefined,
        cpf: cpf,
        email: email,
        bio: bio,
        links: link ? [{ url: link, type: 'portfolio' }] : []
      };
      await api.criarPessoa(pessoaData);

      alert('Cadastro realizado com sucesso! Faça login para continuar.');
      clearForm();
      navigate('/login');
      return;
    } catch (err: any) {
      // delete pessoa criada se houver erro depois que criar o usuário
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token && userId) {
          const pessoasRes = await api.api.get('/pessoas');
          const pessoa = pessoasRes.data.find((p: any) => p.userId === userId);
          if (pessoa) {
            await api.api.delete(`/pessoas/${pessoa._id}`);
          }
        }
      } catch (deleteErr) {
        console.error('Erro ao tentar deletar pessoa após erro:', deleteErr);
      }
      setError(err.response?.data?.message || 'Erro ao cadastrar pessoa');
      alert('Erro ao cadastrar pessoa: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return {
    nome, setNome,
    dataNascimento, setDataNascimento,
    telefone, setTelefone,
    cpf, setCpf,
    email, setEmail,
    bio, setBio,
    link, setLink,
    senha, setSenha,
    loading,
    error,
    clearForm,
    aoSubmeterForm,
  };
}; 
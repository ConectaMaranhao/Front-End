import { useState } from 'react';
import { validarCPF } from '../utils/validators';
import * as api from '../services/api';

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
      // ETAPA 1: Criar usuário
      const usuarioResponse = await api.criarUsuario({
        username: nome,
        senha: senha,
        ativo: true,
      });
      const userId = usuarioResponse.data.user._id;

      // ETAPA 2: Criar conta
      const contaResponse = await api.criarConta({
        userId: userId,
        tipo: 'pessoa',
      });
      const contaId = contaResponse.data.conta._id;

      // ETAPA 3: Criar pessoa
      const pessoaData = {
        contaId: contaId,
        nome: nome,
        dataNascimento: new Date(dataNascimento).toISOString(),
        telefone: telefone.replace(/[^\d]+/g, ''),
        cpf: cpf,
        email: email,
        bio: bio,
        links: link ? [{ url: link, type: 'portfolio' }] : []
      };

      await api.criarPessoa(pessoaData);

      alert('Pessoa cadastrada com sucesso!');
      clearForm();
    } catch (err: any) {
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
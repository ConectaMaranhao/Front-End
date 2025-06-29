/*import { useState } from 'react';
import { validarCNPJ } from '../utils/validators';
import * as api from '../services/api';

export const useCadastroEmpresa = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [setor, setSetor] = useState('');
  const [cursosOfertados, setCursosOfertados] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const clearForm = () => {
    setEstado('');
    setEmail('');
    setCnpj('');
    setNome('');
    setRazaoSocial('');
    setSenha('');
    setCidade('');
    setCursosOfertados('');
    setDescricao('');
    setSetor('');
    setError('');
  };

  const aoSubmeterForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarCNPJ(cnpj)) {
      const errorMessage = 'CNPJ inválido. Por favor, verifique o número digitado.';
      setError(errorMessage);
      alert(errorMessage);
      return;
    }

    setLoading(true);
    setError('');

    const cursosArray = cursosOfertados.split(',').map(curso => curso.trim()).filter(Boolean);

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
        tipo: 'empresa',
      });
      const contaId = contaResponse.data.conta._id;

      // ETAPA 3: Criar empresa
      await api.criarEmpresa({
        contaId: contaId,
        nome: razaoSocial,
        cnpj: cnpj,
        cidade: cidade,
        estado: estado,
        setor: setor,
        descricao: descricao,
        cursosOfertados: cursosArray,
        email: email,
      });

      alert('Empresa cadastrada com sucesso!');
      clearForm();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao cadastrar empresa');
      alert('Erro ao cadastrar empresa: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return {
    nome, setNome,
    email, setEmail,
    cnpj, setCnpj,
    senha, setSenha,
    razaoSocial, setRazaoSocial,
    descricao, setDescricao,
    estado, setEstado,
    cidade, setCidade,
    setor, setSetor,
    cursosOfertados, setCursosOfertados,
    loading,
    error,
    clearForm,
    aoSubmeterForm,
  };
}; 
*/
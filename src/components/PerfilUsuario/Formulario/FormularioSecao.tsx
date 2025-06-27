import React, { useState } from "react";
import styles from "./FormularioSecao.module.css";
import { IMaskInput } from 'react-imask';
import { api, buscarPessoaPorId } from '../../../services/api';

interface FormularioSecaoProps {
  pessoa: any;
  setPessoa: (pessoa: any) => void;
}

const FormularioSecao: React.FC<FormularioSecaoProps> = ({ pessoa, setPessoa }) => {
  const [nome, setNome] = useState(pessoa.nome || '');
  const [email, setEmail] = useState(pessoa.email || '');
  const [telefone, setTelefone] = useState(pessoa.telefone || '');
  const [bio, setBio] = useState(pessoa.bio || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const aoSubmeterForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      
      await api.put(`/pessoas/${pessoa._id}`, {
        nome,
        email,
        telefone,
        bio
      });
     
      const pessoaAtualizada = await buscarPessoaPorId(pessoa._id);
      setPessoa(pessoaAtualizada.data);
      alert('Dados atualizados com sucesso!');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao atualizar dados');
      alert('Erro ao atualizar dados: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.secaoFormulario}>
      <div className={styles.containerFormulario}>
        <div className={styles.tituloFormulario}>Editar Dados Cadastrais</div>
        <div className={styles.descricaoFormulario}>
          Atualize suas informações pessoais.
        </div>
      </div>
      <form className={styles.listaFormulario} onSubmit={aoSubmeterForm}>
        <div className={styles.linhaFormulario}>
          <div className={styles.grupoInput}>
            <label className={styles.rotuloInput} htmlFor="nome">Nome Completo</label>
            <input className={styles.campoInput}
              id="nome" placeholder="Digite seu nome completo"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              />
          </div>
        </div>

        <div className={styles.linhaFormulario}>
          <div className={styles.grupoInput}>
            <label className={styles.rotuloInput} htmlFor="nome">Bio</label>
            <input className={styles.campoInput}
              id="nome" placeholder="Edite sua bio"
              value={bio}
              onChange={e => setBio(e.target.value)}
              />
          </div>
        </div>

        <div className={styles.linhaFormulario}>
          <div className={styles.grupoInput}>
            <label className={styles.rotuloInput} htmlFor="email">Email</label>
            <input className={styles.campoInput}
              id="email" placeholder="Digite seu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              
            />
          </div>
        </div>
        <div className={styles.linhaFormulario}>
          <div className={styles.grupoInput}>
            <label className={styles.rotuloInput} htmlFor="telefone">Telefone</label>
            <IMaskInput
              className={styles.campoInput}
              id="telefone"
              mask="55 (00) 00000-0000"
              value={telefone}
              onAccept={(value: any) => setTelefone(value)}
              placeholder="(11) 99999-9999"
              type="text"
            />
          </div>
        </div>
        <div className={styles.botaoSalvar}>
          <button className={styles.botaoSalvarPrimario} type="submit" disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </div>
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
};

export default FormularioSecao; 
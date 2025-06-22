import React from 'react';
import styles from './CadastroPessoa.module.css';
import { IMaskInput } from 'react-imask';
import { FormButtons } from '../../Common/Cadastro/BotaoFormulario/BotaoFormulario';
import { useCadastroPessoa } from '../../../hooks/useCadastroPessoa';

export const CadastroUsuario: React.FC = () => {
  const {
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
  } = useCadastroPessoa();

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Formulário de Cadastro</h2>
      {error && <div className={styles.erro}>{error}</div>}
      <form onSubmit={aoSubmeterForm} className={styles.formulario}>
        <div className={styles.linha}>
          <div className={styles.grupoInput}>
            <label>Nome</label>
            <input 
              type="text" 
              value={nome} 
              onChange={e => setNome(e.target.value)} 
              placeholder="Nome completo" 
              required 
            />
          </div>

          <div className={styles.grupoInput}>
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="exemplo@dominio.com" 
              required 
            />
          </div>
        </div>

        <div className={styles.linha}>
          <div className={styles.grupoInput}>
            <label>Data de Nascimento</label>
            <input 
              type="date" 
              value={dataNascimento} 
              onChange={e => setDataNascimento(e.target.value)} 
              required 
            />
          </div>

          <div className={styles.grupoInput}>
            <label>Telefone (Opcional)</label>
            <IMaskInput
              mask="55 (00) 00000-0000"
              value={telefone}
              onAccept={(value: any) => setTelefone(value)}
              placeholder="(11) 99999-9999"
              type="text"
            />
          </div>
        </div>

        <div className={styles.linha}>
          <div className={styles.grupoInput}>
            <label>CPF</label>
            <IMaskInput
              mask="000.000.000-00"
              value={cpf}
              onAccept={(value: any) => setCpf(value)}
              placeholder="000.000.000-00"
              required
              type="text"
            />
          </div>

          <div className={styles.grupoInput}>
            <label>Senha</label>
            <input 
              type="password" 
              value={senha} 
              onChange={e => setSenha(e.target.value)} 
              placeholder="Digite sua senha" 
              required 
            />
          </div>
        </div>

        <div className={styles.linha}>
          <div className={styles.grupoInput}>
            <label>Bio (Opcional)</label>
            <input 
              type="text" 
              value={bio} 
              onChange={e => setBio(e.target.value)} 
              placeholder="Conte um pouco sobre você"
            />
          </div>

          <div className={styles.grupoInput}>
            <label>Link (Opcional)</label>
            <input 
              type="text" 
              value={link} 
              onChange={e => setLink(e.target.value)} 
              placeholder="https://seu-portfolio.com"
            />
          </div>
        </div>

        <FormButtons
          onCancel={clearForm}
          loading={loading}
          submitText="Cadastrar-se"
          cancelText="Cancelar"
        />
      </form>
    </div>
  );
};
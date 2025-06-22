import React from 'react';
import styles from './CadastroEmpresa.module.css';
import { IMaskInput } from 'react-imask';
import { FormButtons } from '../../Common/Cadastro/BotaoFormulario/BotaoFormulario';
import { useCadastroEmpresa } from '../../../hooks/useCadastroEmpresa';

export const CadastroEmpresa: React.FC = () => {
  const {
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
  } = useCadastroEmpresa();

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Formulário de Cadastro</h2>
      {error && <div className={styles.erro}>{error}</div>}
      <form onSubmit={aoSubmeterForm} className={styles.formulario}>
        <div className={styles.linha}>
          <div className={styles.grupoInput}>
            <label>Nome</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome completo" required />
          </div>

          <div className={styles.grupoInput}>
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="exemplo@dominio.com" required />
          </div>
        </div>
        <div className={styles.linha}>

          <div className={styles.grupoInput}>
            <label>CNPJ</label>
            <IMaskInput
              mask="00.000.000/0000-00"
              value={cnpj}
              onAccept={(value: any) => setCnpj(value)}
              placeholder="00.000.000/0001-00"
              required
              type="text"
            />
          </div>

          <div className={styles.grupoInput}>
            <label>Senha</label>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua senha" required />
          </div>

        </div>
        <div className={styles.linha}>
          <div className={styles.grupoInput}>
            <label>Razão Social</label>
            <input type="text" value={razaoSocial} onChange={e => setRazaoSocial(e.target.value)} placeholder="Nome social da sua empresa" required />
          </div>

          <div className={styles.grupoInput}>
            <label>Descrição</label>
            <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Descrição da empresa" required />
          </div>

        </div>
        <div className={styles.linha}>
        <div className={styles.grupoInput}>
            <label>Estado</label>
            <input type="text" value={estado} onChange={e => setEstado(e.target.value)} placeholder="Seu estado" required />
          </div>
          <div className={styles.grupoInput}>
            <label>Cidade</label>
            <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Sua cidade" required />
          </div>
        </div>

        <div className={styles.linha}>
          <div className={styles.grupoInput}>
            <label>Setor</label>
            <input type="text" value={setor} onChange={e => setSetor(e.target.value)} placeholder="Setor de atuação" required />
          </div>
          <div className={styles.grupoInput}>
            <label>Cursos Ofertados pela Empresa</label>
            <input type="text" value={cursosOfertados} onChange={e => setCursosOfertados(e.target.value)} placeholder="Cursos Ofertados" required />
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
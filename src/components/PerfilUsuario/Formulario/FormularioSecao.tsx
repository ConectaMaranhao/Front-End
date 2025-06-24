import React from "react";
import styles from "./FormularioSecao.module.css";

const FormularioSecao: React.FC = () => {
  return (
    <div className={styles.secaoFormulario}>
      <div className={styles.containerFormulario}>
        <div className={styles.tituloFormulario}>Editar Dados Cadastrais</div>
        <div className={styles.descricaoFormulario}>
          Atualize suas informações pessoais.
        </div>
      </div>
      <form className={styles.listaFormulario}>
        <div className={styles.linhaFormulario}>
          <div className={styles.grupoInput}>
            <label className={styles.rotuloInput} htmlFor="nome">Nome Completo</label>
            <input className={styles.campoInput} id="nome" placeholder="Digite seu nome completo" />
          </div>
        </div>
        <div className={styles.linhaFormulario}>
          <div className={styles.grupoInput}>
            <label className={styles.rotuloInput} htmlFor="email">Email</label>
            <input className={styles.campoInput} id="email" placeholder="Digite seu email" />
          </div>
        </div>
        <div className={styles.linhaFormulario}>
          <div className={styles.grupoInput}>
            <label className={styles.rotuloInput} htmlFor="telefone">Telefone</label>
            <input className={styles.campoInput} id="telefone" placeholder="Digite seu telefone" />
          </div>
        </div>
        <div className={styles.botaoSalvar}>
          <button className={styles.botaoSalvarPrimario} type="submit">Salvar Alterações</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioSecao; 
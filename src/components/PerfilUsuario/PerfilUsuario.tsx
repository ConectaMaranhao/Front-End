/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import styles from "./PerfilUsuario.module.css";
import PerfilHeaderSecao from "./PerfilHeader/PerfilHeaderSecao";
import ProgressoSecao from "./Progresso/ProgressoSecao";
import CurriculoSecao from "./Curriculo/CurriculoSecao";
import FormularioSecao from "./Formulario/FormularioSecao";
import MedalhasSecao from "./Medalhas/MedalhasSecao";
import { buscarPessoaPorId } from '../../services/api';

export const PerfilUsuario: React.FC = () => {
  const [pessoa, setPessoa] = useState<any>(null);
  const pessoaId = localStorage.getItem('pessoaId');

  useEffect(() => {
    if (!pessoaId) return;
    async function fetchPessoa() {
      const res = await buscarPessoaPorId(pessoaId as string);
      setPessoa(res.data);
    }
    fetchPessoa();
  }, [pessoaId]);

  if (!pessoa) return <div>Aguardando dados do login ou cadastro...</div>;

  return (
    <div className={styles.container}>
      {/* Barra Superior */}
      <div className={styles.barraSuperior}>
        <div className={styles.iconeAvatar} />
        <div className={styles.titulo}>Meu Perfil</div>
        <div className={styles.navegacao}>
          <div className={styles.aba}>Início</div>
          <div className={styles.aba}>Meus cursos</div>
          {/*  <div className={styles.campoBusca}>
            <div className={styles.textoBusca}>Search in site</div>
            <img
              src="/search-icon.png"
              alt="Search"
              className={styles.iconeBusca}
            />
          </div> */}
        </div>
      </div>

      <PerfilHeaderSecao pessoa={pessoa} />

      <ProgressoSecao xp={pessoa.xp} />

      <CurriculoSecao />

      <MedalhasSecao />

      <FormularioSecao pessoa={pessoa} setPessoa={setPessoa} />
    </div>
  );
};

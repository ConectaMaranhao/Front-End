/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import styles from "./PerfilUsuario.module.css";
import PerfilHeaderSecao from "./PerfilHeader/PerfilHeaderSecao";
import ProgressoSecao from "./Progresso/ProgressoSecao";
import FormularioSecao from "./Formulario/FormularioSecao";
import MedalhasSecao from "./Medalhas/MedalhasSecao";
import { buscarPessoaPorId } from '../../services/api';

export const PerfilUsuario: React.FC = () => {
  const [pessoa, setPessoa] = useState<any>(null);
  const pessoaId = localStorage.getItem('pessoaId');
  const userId = localStorage.getItem('userId');

  // ref pra seção formulário
  const formularioRef = useRef<HTMLDivElement>(null);

  const rolarParaFormulario = () => {
    formularioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    async function fetchPessoa() {
      if (pessoaId) {
        const res = await buscarPessoaPorId(pessoaId as string);
        setPessoa(res.data);
      } else if (userId) {
        // 1. Buscar contas e encontrar a do usuário logado
        const contasRes = await import('../../services/api').then(m => m.api.get('/contas'));

        const conta = contasRes.data.find((c: any) => c.userId && c.userId._id === userId);

        if (conta) {
          // 2. Buscar pessoas e encontrar a pessoa que tem a conta
          const pessoasRes = await import('../../services/api').then(m => m.api.get('/pessoas'));

          const pessoa = pessoasRes.data.find((p: any) => p.contaId === conta._id);
          
          if (pessoa) setPessoa(pessoa);
        }
      }
    }
    fetchPessoa();
  }, [pessoaId, userId]);

  if (!pessoa) return <div>Aguardando dados do login ou cadastro...</div>;

  return (
    <div className={styles.container}>
      {/*
      Barra Superior
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
          </div>
        </div>
      </div> */}

      <PerfilHeaderSecao pessoa={pessoa} aoClicarEditarPerfil={rolarParaFormulario} />

      <ProgressoSecao xp={pessoa.xp} />

      <MedalhasSecao />

      <div ref={formularioRef}>
        <FormularioSecao pessoa={pessoa} setPessoa={setPessoa} />
      </div>
    </div>
  );
};

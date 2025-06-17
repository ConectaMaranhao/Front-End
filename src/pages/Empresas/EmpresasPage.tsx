//Tela específica para empresas.
import React, { useEffect, useState } from "react";
import styles from '../../components/Empresas/EmpresasPage.module.css';


type Candidato = {
  id: number;
  nome: string;
  email: string;
  curso: string;
  status: "Disponível" | "Selecionado" | "Em análise";
};

const mockCandidatos: Candidato[] = [
  { id: 1, nome: "Ana Paula", email: "ana@email.com", curso: "Front-end", status: "Disponível" },
  { id: 2, nome: "Carlos Silva", email: "carlos@email.com", curso: "Back-end", status: "Em análise" },
  { id: 3, nome: "Fernanda Lima", email: "fernanda@email.com", curso: "Design", status: "Selecionado" }
];

const EmpresaVagasPage: React.FC = () => {
  const [candidatos, setCandidatos] = useState<Candidato[]>([]);

  useEffect(() => {
    // Simulando chamada à API
    const fetchCandidatos = () => {
      setTimeout(() => {
        setCandidatos(mockCandidatos);
      }, 1000);
    };

    fetchCandidatos();
  }, []);

  return (
  <div className={styles.container}>
    <h1 className={styles.titulo}>Candidatos para suas vagas</h1>

    {candidatos.length === 0 ? (
      <p>Carregando candidatos...</p>
    ) : (
      candidatos.map((candidato) => (
        <div key={candidato.id} className={styles.card}>
          <p><strong>Nome:</strong> {candidato.nome}</p>
          <p><strong>Email:</strong> {candidato.email}</p>
          <p><strong>Curso:</strong> {candidato.curso}</p>
          <span
            className={`${styles.status} ${
              candidato.status === "Disponível"
                ? styles.disponivel
                : candidato.status === "Selecionado"
                ? styles.selecionado
                : styles.analise
            }`}
          >
            {candidato.status}
          </span>
        </div>
      ))
    )}
  </div>
);

};

export default EmpresaVagasPage;

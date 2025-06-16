//Tela específica para empresas.
import React, { useEffect, useState } from "react";

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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Candidatos para suas vagas</h1>
      {candidatos.length === 0 ? (
        <p>Carregando candidatos...</p>
      ) : (
        <ul className="space-y-4">
          {candidatos.map(candidato => (
            <li key={candidato.id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{candidato.nome}</h2>
              <p>Email: {candidato.email}</p>
              <p>Curso: {candidato.curso}</p>
              <p>Status: <span className="font-medium">{candidato.status}</span></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmpresaVagasPage;

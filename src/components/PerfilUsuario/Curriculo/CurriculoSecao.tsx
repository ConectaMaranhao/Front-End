import React from "react";
import styles from "./CurriculoSecao.module.css";

const CurriculoSecao: React.FC = () => {
  return (
    <div className={styles.secaoCurriculo}>
      <div className={styles.curriculoGrid}>
        <div className={styles.containerCurriculo}>
          <div className={styles.tituloCurriculo}>Currículo</div>
          <div className={styles.descricaoCurriculo}>
            Aqui está o seu currículo.
          </div>
          <div className={styles.botoesCurriculo}>
            <button className={styles.botaoSecundarioGrande}>Enviar Fotos</button>
            <button className={styles.botaoPrimarioGrande}>Adicionar Currículo</button>
          </div>
        </div>
        <div className={styles.listaCurriculo}>
          <div className={styles.linhaCurriculo}>
            <div className={styles.artigoCurriculo}>
              <div className={styles.containerImagemCurriculo}>
                <div className={styles.imagemCurriculo} />
              </div>
              <div className={styles.conteudoCurriculo}>
                <div className={styles.tituloItemCurriculo}>
                  Experiência Profissional
                </div>
                <div className={styles.subtituloItemCurriculo}>
                  Descrição das experiências profissionais do usuário.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.linhaCurriculo}>
            <div className={styles.artigoCurriculo}>
              <div className={styles.containerImagemCurriculo}>
                <div className={styles.imagemCurriculo} />
              </div>
              <div className={styles.conteudoCurriculo}>
                <div className={styles.tituloItemCurriculo}>Educação</div>
                <div className={styles.subtituloItemCurriculo}>
                  Detalhes sobre a formação acadêmica.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculoSecao; 
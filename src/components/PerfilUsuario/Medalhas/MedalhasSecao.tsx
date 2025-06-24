import React from "react";
import styles from "./MedalhasSecao.module.css";

const MedalhasSecao: React.FC = () => {
  return (
    <div className={styles.secaoMedalhas}>
      <div className={styles.containerMedalhas}>
        <div className={styles.tituloMedalhas}>
          Medalhas e Conquistas
        </div>
        <div className={styles.descricaoMedalhas}>
          Suas conquistas até agora.
        </div>
      </div>
      <div className={styles.listaMedalhas}>
        <div className={styles.medalha}>
          <div
            className={styles.imagemMedalha}
            style={{ backgroundImage: "url('https://img.myloview.com.br/quadros/premio-fita-isolada-medalha-de-ouro-design-etiqueta-cracha-certificado-simbolo-melhor-venda-preco-qualidade-garantia-ou-sucesso-conquista-decoracao-de-premio-de-fita-dourada-ilustracao-veto-700-124930406.jpg')" }}
          />
          <div className={styles.textosMedalha}>
            <div className={styles.tituloMedalha}>Primeiro Passo</div>
            <div className={styles.descricaoMedalha}>Realizar o primeiro login na plataforma.</div>
          </div>
        </div>
        <div className={styles.medalha}>
          <div
            className={styles.imagemMedalha}
            style={{ backgroundImage: "url('https://img.myloview.com.br/quadros/premio-fita-isolada-medalha-de-ouro-design-etiqueta-cracha-certificado-simbolo-melhor-venda-preco-qualidade-garantia-ou-sucesso-conquista-decoracao-de-premio-de-fita-dourada-ilustracao-veto-700-124930406.jpg')" }}
          />
          <div className={styles.textosMedalha}>
            <div className={styles.tituloMedalha}>Currículo de Ouro</div>
            <div className={styles.descricaoMedalha}>Preencher 100% do perfil (dados pessoais, experiências, formação, habilidades e foto).</div>
          </div>
        </div>
        <div className={styles.medalha}>
          <div
            className={styles.imagemMedalha}
            style={{ backgroundImage: "url('https://img.myloview.com.br/quadros/premio-fita-isolada-medalha-de-ouro-design-etiqueta-cracha-certificado-simbolo-melhor-venda-preco-qualidade-garantia-ou-sucesso-conquista-decoracao-de-premio-de-fita-dourada-ilustracao-veto-700-124930406.jpg')" }}
          />
          <div className={styles.tituloMedalha}>Comprometido</div>
          <div className={styles.descricaoMedalha}>Acessar a plataforma por 7 dias seguidos (login diário).</div>
        </div>
        <div className={styles.medalha}>
          <div
            className={styles.imagemMedalha}
            style={{ backgroundImage: "url('https://img.myloview.com.br/quadros/premio-fita-isolada-medalha-de-ouro-design-etiqueta-cracha-certificado-simbolo-melhor-venda-preco-qualidade-garantia-ou-sucesso-conquista-decoracao-de-premio-de-fita-dourada-ilustracao-veto-700-124930406.jpg')" }}
          />
          <div className={styles.tituloMedalha}>Primeiro Serviço Concluído</div>
          <div className={styles.descricaoMedalha}>Concluir o primeiro serviço (cliente avalia como finalizado).
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedalhasSecao; 
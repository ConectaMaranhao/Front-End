import React from "react";
import styles from "./PerfilUsuario.module.css";

export const PerfilUsuario: React.FC = () => {
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

      {/* Seção de Perfil */}
      <div className={styles.secaoPerfil}>
        <div className={styles.perfilGrid}>
          <div className={styles.avatar} />
          <div className={styles.containerPerfil}>
            <div className={styles.tituloPerfil}>Nome do Usuário</div>
            <div className={styles.descricaoPerfil}>
              Bio do usuário: Aqui é onde você coloca uma breve descrição sobre si mesmo.
            </div>
          </div>
          <div className={styles.grupoBotoes}>
            <button className={styles.botaoSecundario}>Enviar Currículo</button>
            <button className={styles.botaoPrimario}>Editar Perfil</button>
          </div>
        </div>
      </div>

      {/* Seção de Progresso */}
      <div className={styles.secaoProgresso}>
        <div className={styles.containerProgresso}>
          <div className={styles.tituloProgresso}>
            Nível 2 - Aprendiz
          </div>
          <div className={styles.tituloProgresso}>
           (750/1500 XP)
          </div>
          <div className={styles.descricaoProgresso}>Barra de Progresso</div>
          <div style={{width: '100%', maxWidth: 400, background: '#7B7B7B', borderRadius: 8, height: 12, margin: '16px auto' }}>
            <div style={{ width: '50%', height: '100%', background: '#000000', borderRadius: 8 }} />
          </div>
          <div className={styles.grupoAbas}>
            <button className={styles.abaProgresso}>Barramento Progresso</button>
            <button className={styles.abaProgresso}>Medalhas e Conquistas</button>
          </div>
        </div>
      </div>

      {/* Seção Currículo */}
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

      {/* Seção de Formulário */}
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
    </div>
  );
};

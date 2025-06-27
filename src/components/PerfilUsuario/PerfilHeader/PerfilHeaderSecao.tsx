/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import styles from "./PerfilHeaderSecao.module.css";

interface PerfilHeaderSecaoProps {
  pessoa: any;
  aoClicarEditarPerfil?: () => void;
}

const PerfilHeaderSecao: React.FC<PerfilHeaderSecaoProps> = ({ pessoa, aoClicarEditarPerfil }) => {
  const [urlAvatar, setUrlAvatar] = useState<string | null>(null);
  const inputArquivoRef = useRef<HTMLInputElement>(null);

  const aoClicarBotao = () => {
    inputArquivoRef.current?.click();
  };

  const aoSubmeterFoto = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const foto = evento.target.files?.[0];
    if (foto) {
      const leitor = new FileReader();
      leitor.onload = (e) => {
        setUrlAvatar(e.target?.result as string);
      };
      leitor.readAsDataURL(foto);
    }
  };

  return (
    <div className={styles.secaoPerfil}>
      <div className={styles.perfilGrid}>
        <div className={styles.avatar}>
          {urlAvatar && (
            <img
              src={urlAvatar}
              alt="Avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </div>
        <div className={styles.containerPerfil}>
          <div className={styles.tituloPerfil}>{pessoa.nome}</div>
          <div className={styles.descricaoPerfil}>{pessoa.bio}</div>
        </div>
        <div className={styles.grupoBotoes}>
          <button className={styles.botaoSecundario} onClick={aoClicarBotao}>Enviar Foto</button>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={inputArquivoRef}
            onChange={aoSubmeterFoto}
          />
          <button className={styles.botaoPrimario} onClick={aoClicarEditarPerfil}>Editar Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default PerfilHeaderSecao; 
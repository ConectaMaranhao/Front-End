import React from 'react';
import styles from './BotaoFormulario.module.css';

interface FormButtonsProps {
  onCancel: () => void;
  loading?: boolean;
  submitText?: string;
  cancelText?: string;
}

export const FormButtons: React.FC<FormButtonsProps> = ({
  onCancel,
  loading = false,
  submitText = 'Cadastrar-se',
  cancelText = 'Cancelar'
}) => {
  return (
    <div className={styles.grupoBotoes}>
      <button type="button" className={styles.botaoCancelar} onClick={onCancel}>
        {cancelText}
      </button>
      <button type="submit" className={styles.botaoEnviar} disabled={loading}>
        {loading ? 'Cadastrando...' : submitText}
      </button>
    </div>
  );
}; 
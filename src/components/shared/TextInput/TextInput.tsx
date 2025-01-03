import styles from './TextInput.module.scss';

interface TextInputProps {
  type?: 'text' | 'tel' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  type,
  placeholder = '',
  value,
  error,
  onChange,
}: TextInputProps) => {
  return (
    <div className={styles.textInput}>
      <input
        className={styles.textInput__input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {Boolean(error) && <div className={styles.textInput__error}>{error}</div>}
    </div>
  );
};

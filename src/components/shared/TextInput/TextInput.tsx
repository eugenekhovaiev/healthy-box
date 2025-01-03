import styles from './TextInput.module.scss';

interface TextInputProps {
  type?: 'text' | 'tel' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  type,
  placeholder = '',
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      className={styles.textInput}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

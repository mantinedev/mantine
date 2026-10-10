import { Input } from '@mantine/core';
import classes from './NativeTextInput.module.css';

interface NativeTextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: React.ReactNode;
}

export function NativeTextInput({ label, error, ...inputProps }: NativeTextInputProps) {
  return (
    <Input.Wrapper size="md" label={label} error={error}>
      <input className={classes.nativeInput} aria-invalid={!!error} {...inputProps} />
    </Input.Wrapper>
  );
}

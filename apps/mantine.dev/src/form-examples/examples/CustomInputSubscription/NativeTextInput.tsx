import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
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
  const id = useId();

  return (
    <Input.Wrapper id={id} size="md" label={label} error={error}>
      <input id={id} className={classes.nativeInput} aria-invalid={!!error} {...inputProps} />
    </Input.Wrapper>
  );
}

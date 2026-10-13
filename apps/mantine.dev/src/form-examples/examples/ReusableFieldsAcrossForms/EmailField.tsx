import { TextInput, TextInputProps } from '@mantine/core';
import { isEmail, UseFieldReturnType } from '@mantine/form';

export const emailRule = isEmail('Enter a valid email address');

interface EmailFieldProps extends Omit<TextInputProps, 'value' | 'onChange' | 'error'> {
  field: UseFieldReturnType<string>;
}

export function EmailField({ field, label = 'Email', ...others }: EmailFieldProps) {
  const inputProps = field.getInputProps();

  const handleBlur = () => {
    inputProps.onBlur?.();
    const normalized = field.getValue().trim().toLowerCase();

    if (normalized !== field.getValue()) {
      field.setValue(normalized);
    }
  };

  return (
    <TextInput
      size="md"
      inputMode="email"
      label={label}
      placeholder="you@mantine.dev"
      autoComplete="email"
      {...others}
      {...inputProps}
      onBlur={handleBlur}
    />
  );
}

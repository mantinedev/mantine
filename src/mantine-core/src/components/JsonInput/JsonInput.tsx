import React, { useState } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { useMantineTheme, DefaultProps, getSizeValue } from '@mantine/styles';
import { validateJson } from './validate-json/validate-json';
import { Textarea, TextareaProps, TextareaStylesNames } from '../Textarea/Textarea';

export type JsonInputStylesNames = TextareaStylesNames;

export interface JsonInputProps
  extends DefaultProps<JsonInputStylesNames>,
    Omit<TextareaProps, 'onChange'> {
  /** Value for controlled input */
  value?: string;

  /** Default value for uncontrolled input */
  defaultValue?: string;

  /** onChange value for controlled input */
  onChange?(value: string): void;

  /** Format json on blur */
  formatOnBlur?: boolean;

  /** Error message shown when json is not valid */
  validationError?: React.ReactNode;
}

export function JsonInput({
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  error,
  styles,
  formatOnBlur = false,
  size = 'sm',
  validationError,
  ...others
}: JsonInputProps) {
  const theme = useMantineTheme();
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    rule: (val) => typeof val === 'string',
    onChange,
  });

  const [valid, setValid] = useState(validateJson(_value));

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    setValid(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    const isValid = validateJson(event.currentTarget.value);
    formatOnBlur &&
      isValid &&
      event.currentTarget.value.trim() !== '' &&
      setValue(JSON.stringify(JSON.parse(event.currentTarget.value), null, 2));
    setValid(isValid);
  };

  return (
    <Textarea
      value={_value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      error={valid ? error : validationError || true}
      __staticSelector="json-input"
      styles={{
        ...styles,
        input: {
          ...styles?.input,
          fontFamily: theme.fontFamilyMonospace,
          fontSize: getSizeValue({ size, sizes: theme.fontSizes }) - 2,
        },
      }}
      {...others}
    />
  );
}

JsonInput.displayName = '@mantine/core/JsonInput';

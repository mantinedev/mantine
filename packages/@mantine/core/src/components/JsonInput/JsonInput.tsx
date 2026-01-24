import { useState } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { factory, Factory, useProps } from '../../core';
import { __InputStylesNames } from '../Input';
import { InputBase } from '../InputBase';
import { Textarea, TextareaProps } from '../Textarea';
import { validateJson } from './validate-json/validate-json';

export interface JsonInputProps extends Omit<TextareaProps, 'onChange'> {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Determines whether the value should be formatted on blur @default `false` */
  formatOnBlur?: boolean;

  /** Error message shown when the input value is invalid JSON (checked on blur). If not provided, a generic error state is shown. Takes precedence over the `error` prop when validation fails. */
  validationError?: React.ReactNode;

  /** Function to serialize value into a string for formatting. Called with (value, null, 2) where 2 is the indentation level. @default `JSON.stringify` */
  serialize?: typeof JSON.stringify;

  /** Function to deserialize string value for formatting and validation. Must throw an error if the string is invalid JSON. @default `JSON.parse` */
  deserialize?: typeof JSON.parse;

  /** Number of spaces to use as white space for formatting. Passed as the third argument to `serialize` function. @default `2` */
  indentSpaces?: number;
}

export type JsonInputFactory = Factory<{
  props: JsonInputProps;
  ref: HTMLTextAreaElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps = {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
  size: 'sm',
  indentSpaces: 2,
} satisfies Partial<JsonInputProps>;

export const JsonInput = factory<JsonInputFactory>((props) => {
  const {
    value,
    defaultValue,
    onChange,
    formatOnBlur,
    validationError,
    serialize,
    deserialize,
    onFocus,
    onBlur,
    readOnly,
    error,
    indentSpaces,
    ...others
  } = useProps('JsonInput', defaultProps, props);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const [valid, setValid] = useState(validateJson(_value, deserialize));

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    onFocus?.(event);
    setValid(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur?.(event);
    const isValid = validateJson(event.currentTarget.value, deserialize);
    formatOnBlur &&
      !readOnly &&
      isValid &&
      event.currentTarget.value.trim() !== '' &&
      setValue(serialize(deserialize(event.currentTarget.value), null, indentSpaces));
    setValid(isValid);
  };

  return (
    <Textarea
      value={_value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      readOnly={readOnly}
      {...others}
      autoComplete="off"
      __staticSelector="JsonInput"
      error={valid ? error : validationError || true}
      data-monospace
    />
  );
});

JsonInput.classes = InputBase.classes;
JsonInput.displayName = '@mantine/core/JsonInput';

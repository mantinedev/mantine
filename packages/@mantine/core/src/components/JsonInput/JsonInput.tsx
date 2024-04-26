import { useState } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { factory, Factory, useProps } from '../../core';
import { __InputStylesNames } from '../Input';
import { InputBase } from '../InputBase';
import { Textarea, TextareaProps } from '../Textarea';
import { validateJson } from './validate-json/validate-json';

export interface JsonInputProps extends Omit<TextareaProps, 'onChange'> {
  /** Value for controlled component */
  value?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Determines whether the value should be formatted on blur, `false` by default */
  formatOnBlur?: boolean;

  /** Error message displayed when value is not valid JSON */
  validationError?: React.ReactNode;

  /** Function to serialize value into a string, used for value formatting, `JSON.stringify` by default */
  serialize?: typeof JSON.stringify;

  /** Function to deserialize string value, used for value formatting and input JSON validation, must throw error if string cannot be processed, `JSON.parse` by default */
  deserialize?: typeof JSON.parse;
}

export type JsonInputFactory = Factory<{
  props: JsonInputProps;
  ref: HTMLTextAreaElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<JsonInputProps> = {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
};

export const JsonInput = factory<JsonInputFactory>((props, ref) => {
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
    ...others
  } = useProps('JsonInput', defaultProps, props);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const [valid, setValid] = useState(validateJson(_value, deserialize!));

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    onFocus?.(event);
    setValid(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    const isValid = validateJson(event.currentTarget.value, deserialize!);
    formatOnBlur &&
      !readOnly &&
      isValid &&
      event.currentTarget.value.trim() !== '' &&
      setValue(serialize!(deserialize!(event.currentTarget.value), null, 2));
    setValid(isValid);
  };

  return (
    <Textarea
      value={_value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={ref}
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

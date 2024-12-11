import { useRef } from 'react';
import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '../../core';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { InputBase } from '../InputBase';
import { PillsInputProvider } from './PillsInput.context';
import { PillsInputField } from './PillsInputField/PillsInputField';

export interface PillsInputProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<PillsInputFactory>,
    ElementProps<'div', 'size'> {
  __stylesApiProps?: Record<string, any>;
  __staticSelector?: string;
  multiline?: boolean;
}

export type PillsInputFactory = Factory<{
  props: PillsInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
  staticComponents: {
    Field: typeof PillsInputField;
  };
}>;

const defaultProps: Partial<PillsInputProps> = {};

export const PillsInput = factory<PillsInputFactory>((_props, ref) => {
  const props = useProps('PillsInput', defaultProps, _props);
  const {
    children,
    onMouseDown,
    onClick,
    size,
    disabled,
    __staticSelector,
    error,
    variant,
    ...others
  } = props;

  const fieldRef = useRef<HTMLInputElement>(null);

  return (
    <PillsInputProvider value={{ fieldRef, size: size!, disabled, hasError: !!error, variant }}>
      <InputBase
        size={size}
        error={error}
        variant={variant}
        component="div"
        ref={ref}
        onMouseDown={(event) => {
          event.preventDefault();
          onMouseDown?.(event);
          fieldRef.current?.focus();
        }}
        onClick={(event) => {
          event.preventDefault();
          onClick?.(event);
          fieldRef.current?.focus();
        }}
        {...others}
        multiline
        disabled={disabled}
        __staticSelector={__staticSelector || 'PillsInput'}
        withAria={false}
      >
        {children}
      </InputBase>
    </PillsInputProvider>
  );
});

PillsInput.displayName = '@mantine/core/PillsInput';
PillsInput.Field = PillsInputField;

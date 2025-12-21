import { useRef } from 'react';
import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '../../core';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { InputBase } from '../InputBase';
import { PillsInputContext } from './PillsInput.context';
import { PillsInputField } from './PillsInputField/PillsInputField';

export interface PillsInputProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<PillsInputFactory>,
    ElementProps<'div', 'size'> {
  __stylesApiProps?: Record<string, any>;
  __staticSelector?: string;
}

export type PillsInputFactory = Factory<{
  props: PillsInputProps;
  ref: HTMLDivElement;
  stylesNames: __InputStylesNames;
  staticComponents: {
    Field: typeof PillsInputField;
  };
}>;

const defaultProps = {
  size: 'sm',
} satisfies Partial<PillsInputProps>;

export const PillsInput = factory<PillsInputFactory>((_props) => {
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
    <PillsInputContext value={{ fieldRef, size, disabled, hasError: !!error, variant }}>
      <InputBase
        size={size}
        error={error}
        variant={variant}
        component="div"
        data-no-overflow
        onMouseDown={(event) => {
          event.preventDefault();
          onMouseDown?.(event);
          fieldRef.current?.focus();
        }}
        onClick={(event) => {
          event.preventDefault();
          const fieldset = event.currentTarget.closest('fieldset');
          if (!fieldset?.disabled) {
            fieldRef.current?.focus();
            onClick?.(event);
          }
        }}
        {...others}
        multiline
        disabled={disabled}
        __staticSelector={__staticSelector || 'PillsInput'}
        withAria={false}
      >
        {children}
      </InputBase>
    </PillsInputContext>
  );
});

PillsInput.displayName = '@mantine/core/PillsInput';
PillsInput.classes = InputBase.classes;
PillsInput.Field = PillsInputField;

import { BoxProps, polymorphicFactory, PolymorphicFactory, StylesApiProps } from '../../core';
import { __BaseInputProps, __InputStylesNames, Input, InputVariant, useInputProps } from '../Input';

export interface InputBaseProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<InputBaseFactory> {
  __staticSelector?: string;
  __stylesApiProps?: Record<string, any>;

  /** Props passed down to the root element (`Input.Wrapper` component) */
  wrapperProps?: Record<string, any>;

  /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
  multiline?: boolean;

  /** Determines whether `aria-` and other accessibility attributes should be added to the input, `true` by default */
  withAria?: boolean;
}

export type InputBaseFactory = PolymorphicFactory<{
  props: InputBaseProps;
  defaultRef: HTMLInputElement;
  defaultComponent: 'input';
  stylesNames: __InputStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<InputBaseProps> = {
  __staticSelector: 'InputBase',
  withAria: true,
};

export const InputBase = polymorphicFactory<InputBaseFactory>((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps('InputBase', defaultProps, props);
  return (
    <Input.Wrapper {...wrapperProps}>
      <Input {...inputProps} {...others} ref={ref} />
    </Input.Wrapper>
  );
});

InputBase.classes = { ...Input.classes, ...Input.Wrapper.classes };
InputBase.displayName = '@mantine/core/InputBase';

import {
  BoxProps,
  DataAttributes,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
} from '../../core';
import { __BaseInputProps, __InputStylesNames, Input, InputVariant, useInputProps } from '../Input';

export interface InputBaseProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<InputBaseFactory> {
  __staticSelector?: string;
  __stylesApiProps?: Record<string, any>;

  /** Props passed down to the root element (`Input.Wrapper` component) */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & DataAttributes;

  /** If set, the input can have multiple lines, for example when `component="textarea"` @default `false` */
  multiline?: boolean;

  /** If set, `aria-` and other accessibility attributes are added to the input @default `true` */
  withAria?: boolean;
}

export type InputBaseFactory = PolymorphicFactory<{
  props: InputBaseProps;
  defaultRef: HTMLInputElement;
  defaultComponent: 'input';
  stylesNames: __InputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  __staticSelector: 'InputBase',
  withAria: true,
  size: 'sm',
} satisfies Partial<InputBaseProps>;

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

import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineSize,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '../../../core';
import { CloseButton, CloseButtonStylesNames } from '../../CloseButton';
import { useInputContext } from '../Input.context';

export interface InputClearButtonProps
  extends BoxProps,
    StylesApiProps<InputClearButtonFactory>,
    ElementProps<'button'> {
  /** Size of the button, by default value is based on input context */
  size?: MantineSize | (string & {});
}

export type InputClearButtonFactory = Factory<{
  props: InputClearButtonProps;
  ref: HTMLButtonElement;
  stylesNames: CloseButtonStylesNames;
}>;

const defaultProps: Partial<InputClearButtonProps> = {};

export const InputClearButton = factory<InputClearButtonFactory>((_props, ref) => {
  const props = useProps('InputClearButton', defaultProps, _props);
  const { size, variant, vars, classNames, styles, ...others } = props;
  const ctx = useInputContext();

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<InputClearButtonFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <CloseButton
      variant={variant || 'transparent'}
      ref={ref}
      size={size || ctx?.size || 'sm'}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __staticSelector="InputClearButton"
      {...others}
    />
  );
});

InputClearButton.displayName = '@mantine/core/InputClearButton';

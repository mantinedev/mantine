import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  MantineSize,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { useInputWrapperContext } from '../InputWrapper.context';
import classes from '../Input.module.css';

export type InputErrorStylesNames = 'error';
export type InputErrorCssVariables = {
  error: '--input-error-size';
};

export interface InputErrorProps
  extends BoxProps,
    StylesApiProps<InputErrorFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;
  __inheritStyles?: boolean;

  /** Controls error `font-size`, `'sm'` by default */
  size?: MantineSize | (string & {});
}

export type InputErrorFactory = Factory<{
  props: InputErrorProps;
  ref: HTMLParagraphElement;
  stylesNames: InputErrorStylesNames;
  vars: InputErrorCssVariables;
}>;

const defaultProps: Partial<InputErrorProps> = {};

const varsResolver = createVarsResolver<InputErrorFactory>((_, { size }) => ({
  error: {
    '--input-error-size': size === undefined ? undefined : `calc(${getFontSize(size)} - ${rem(2)})`,
  },
}));

export const InputError = factory<InputErrorFactory>((_props, ref) => {
  const props = useProps('InputError', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = props;

  const _getStyles = useStyles<InputErrorFactory>({
    name: ['InputWrapper', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'error',
    vars,
    varsResolver,
  });

  const ctx = useInputWrapperContext();
  const getStyles = (__inheritStyles && ctx?.getStyles) || _getStyles;

  return (
    <Box
      component="p"
      ref={ref}
      variant={variant}
      size={size}
      {...getStyles('error', ctx?.getStyles ? { className, style } : undefined)}
      {...others}
    />
  );
});

InputError.classes = classes;
InputError.displayName = '@mantine/core/InputError';

import { use } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  MantineFontSize,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import classes from '../Input.module.css';
import { InputWrapperContext } from '../InputWrapper.context';

export type InputErrorStylesNames = 'error';
export type InputErrorCssVariables = {
  error: '--input-error-size';
};

export interface InputErrorProps
  extends BoxProps, StylesApiProps<InputErrorFactory>, ElementProps<'div'> {
  __staticSelector?: string;
  __inheritStyles?: boolean;

  /** Controls error `font-size` @default 'sm' */
  size?: MantineFontSize;
}

export type InputErrorFactory = Factory<{
  props: InputErrorProps;
  ref: HTMLParagraphElement;
  stylesNames: InputErrorStylesNames;
  vars: InputErrorCssVariables;
}>;

const varsResolver = createVarsResolver<InputErrorFactory>((_, { size }) => ({
  error: {
    '--input-error-size': size === undefined ? undefined : `calc(${getFontSize(size)} - ${rem(2)})`,
  },
}));

export const InputError = factory<InputErrorFactory>((_props) => {
  const props = useProps('InputError', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    __staticSelector,
    __inheritStyles = true,
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
    attributes,
    rootSelector: 'error',
    vars,
    varsResolver,
  });

  const ctx = use(InputWrapperContext);
  const getStyles = (__inheritStyles && ctx?.getStyles) || _getStyles;

  return (
    <Box
      component="p"
      {...getStyles('error', ctx?.getStyles ? { className, style } : undefined)}
      {...others}
    />
  );
});

InputError.classes = classes;
InputError.displayName = '@mantine/core/InputError';

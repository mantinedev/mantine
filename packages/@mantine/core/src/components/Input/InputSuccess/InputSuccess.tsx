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
import { InputWrapperContext } from '../InputWrapper.context';
import classes from '../Input.module.css';

export type InputSuccessStylesNames = 'success';
export type InputSuccessCssVariables = {
  success: '--input-success-size';
};

export interface InputSuccessProps
  extends BoxProps, StylesApiProps<InputSuccessFactory>, ElementProps<'div'> {
  __staticSelector?: string;
  __inheritStyles?: boolean;

  /** Controls success `font-size` @default 'sm' */
  size?: MantineFontSize;
}

export type InputSuccessFactory = Factory<{
  props: InputSuccessProps;
  ref: HTMLParagraphElement;
  stylesNames: InputSuccessStylesNames;
  vars: InputSuccessCssVariables;
}>;

const varsResolver = createVarsResolver<InputSuccessFactory>((_, { size }) => ({
  success: {
    '--input-success-size':
      size === undefined ? undefined : `calc(${getFontSize(size)} - ${rem(2)})`,
  },
}));

export const InputSuccess = factory<InputSuccessFactory>((_props) => {
  const props = useProps('InputSuccess', null, _props);
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

  const _getStyles = useStyles<InputSuccessFactory>({
    name: ['InputWrapper', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'success',
    vars,
    varsResolver,
  });

  const ctx = use(InputWrapperContext);
  const getStyles = (__inheritStyles && ctx?.getStyles) || _getStyles;

  return (
    <Box
      component="p"
      {...getStyles('success', ctx?.getStyles ? { className, style } : undefined)}
      {...others}
    />
  );
});

InputSuccess.classes = classes;
InputSuccess.varsResolver = varsResolver;
InputSuccess.displayName = '@mantine/core/InputSuccess';

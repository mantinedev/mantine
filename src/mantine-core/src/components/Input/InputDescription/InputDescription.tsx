import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  MantineSize,
  getFontSize,
  rem,
  createVarsResolver,
  Factory,
} from '../../../core';
import { useInputWrapperContext } from '../InputWrapper.context';
import classes from '../Input.module.css';

export type InputDescriptionStylesNames = 'description';
export type InputDescriptionCssVariables = {
  description: '--input-description-size';
};

export interface InputDescriptionProps
  extends BoxProps,
    StylesApiProps<InputDescriptionFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Controls description `font-size`, `'sm'` by default */
  size?: MantineSize | (string & {});
}

export type InputDescriptionFactory = Factory<{
  props: InputDescriptionProps;
  ref: HTMLParagraphElement;
  stylesNames: InputDescriptionStylesNames;
  vars: InputDescriptionCssVariables;
}>;

const defaultProps: Partial<InputDescriptionProps> = {};

const varsResolver = createVarsResolver<InputDescriptionFactory>((_, { size }) => ({
  description: {
    '--input-description-size':
      size === undefined ? undefined : `calc(${getFontSize(size)} - ${rem(2)})`,
  },
}));

export const InputDescription = factory<InputDescriptionFactory>((_props, ref) => {
  const props = useProps('InputDescription', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    variant,
    ...others
  } = useProps('InputDescription', defaultProps, props);
  const ctx = useInputWrapperContext();

  const _getStyles = useStyles<InputDescriptionFactory>({
    name: ['InputWrapper', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'description',
    vars,
    varsResolver,
  });

  const getStyles = ctx?.getStyles || _getStyles;

  return (
    <Box
      component="p"
      ref={ref}
      variant={variant}
      size={size}
      {...getStyles('description')}
      {...others}
    />
  );
});

InputDescription.classes = classes;
InputDescription.displayName = '@mantine/core/InputDescription';

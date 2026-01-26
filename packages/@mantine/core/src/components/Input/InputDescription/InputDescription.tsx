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

export type InputDescriptionStylesNames = 'description';
export type InputDescriptionCssVariables = {
  description: '--input-description-size';
};

export interface InputDescriptionProps
  extends BoxProps, StylesApiProps<InputDescriptionFactory>, ElementProps<'div'> {
  __staticSelector?: string;
  __inheritStyles?: boolean;

  /** Controls description `font-size` @default 'sm' */
  size?: MantineFontSize;
}

export type InputDescriptionFactory = Factory<{
  props: InputDescriptionProps;
  ref: HTMLParagraphElement;
  stylesNames: InputDescriptionStylesNames;
  vars: InputDescriptionCssVariables;
}>;

const varsResolver = createVarsResolver<InputDescriptionFactory>((_, { size }) => ({
  description: {
    '--input-description-size':
      size === undefined ? undefined : `calc(${getFontSize(size)} - ${rem(2)})`,
  },
}));

export const InputDescription = factory<InputDescriptionFactory>((_props) => {
  const props = useProps('InputDescription', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    __inheritStyles = true,
    attributes,
    ...others
  } = useProps('InputDescription', null, props);
  const ctx = use(InputWrapperContext);

  const _getStyles = useStyles<InputDescriptionFactory>({
    name: ['InputWrapper', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'description',
    vars,
    varsResolver,
  });

  const getStyles = (__inheritStyles && ctx?.getStyles) || _getStyles;

  return (
    <Box
      component="p"
      {...getStyles('description', ctx?.getStyles ? { className, style } : undefined)}
      {...others}
    />
  );
});

InputDescription.classes = classes;
InputDescription.displayName = '@mantine/core/InputDescription';

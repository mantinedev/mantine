import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  getSize,
  MantineSize,
  Factory,
} from '../../core';
import classes from './Container.module.css';

export type ContainerStylesNames = 'root';
export type ContainerCssVariables = {
  root: '--container-size';
};

export interface ContainerProps
  extends BoxProps,
    StylesApiProps<ContainerFactory>,
    ElementProps<'div'> {
  /** Sets `max-width` of the container, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Determines whether the container should take 100% of its parent width. If set, `size` prop is ignored. `false` by default. */
  fluid?: boolean;
}

export type ContainerFactory = Factory<{
  props: ContainerProps;
  ref: HTMLDivElement;
  stylesNames: ContainerStylesNames;
  vars: ContainerCssVariables;
}>;

const defaultProps: Partial<ContainerProps> = {};

const varsResolver = createVarsResolver<ContainerFactory>((_, { size }) => ({
  root: {
    '--container-size': getSize(size, 'container-size'),
  },
}));

export const Container = factory<ContainerFactory>((_props, ref) => {
  const props = useProps('Container', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, fluid, ...others } = props;

  const getStyles = useStyles<ContainerFactory>({
    name: 'Container',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box ref={ref} mod={{ fluid }} {...getStyles('root')} {...others} />;
});

Container.classes = classes;
Container.displayName = '@mantine/core/Container';

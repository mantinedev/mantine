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
  Factory,
  MantineSize,
  MantineRadius,
  getSize,
  getRadius,
} from '../../../core';
import { ProgressProvider } from '../Progress.context';
import classes from '../Progress.module.css';

export type ProgressRootStylesNames = 'root' | 'section' | 'label';
export type ProgressRootCssVariables = {
  root: '--progress-size' | '--progress-radius';
};

export interface __ProgressRootProps extends BoxProps, ElementProps<'div'> {
  /** Controls track height, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: MantineRadius;
}

export interface ProgressRootProps
  extends __ProgressRootProps,
    StylesApiProps<ProgressRootFactory> {}

export type ProgressRootFactory = Factory<{
  props: ProgressRootProps;
  ref: HTMLDivElement;
  stylesNames: ProgressRootStylesNames;
  vars: ProgressRootCssVariables;
}>;

const defaultProps: Partial<ProgressRootProps> = {};

const varsResolver = createVarsResolver<ProgressRootFactory>((_, { size, radius }) => ({
  root: {
    '--progress-size': getSize(size, 'progress-size'),
    '--progress-radius': radius === undefined ? undefined : getRadius(radius),
  },
}));

export const ProgressRoot = factory<ProgressRootFactory>((_props, ref) => {
  const props = useProps('ProgressRoot', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<ProgressRootFactory>({
    name: 'Progress',
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

  return (
    <ProgressProvider value={{ getStyles }}>
      <Box ref={ref} {...getStyles('root')} {...others} />
    </ProgressProvider>
  );
});

ProgressRoot.classes = classes;
ProgressRoot.displayName = '@mantine/core/ProgressRoot';

import { useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { useFloatingIndicator } from './use-floating-indicator';
import classes from './FloatingIndicator.module.css';

export type FloatingIndicatorStylesNames = 'root';
export type FloatingIndicatorCssVariables = {
  root: '--transition-duration';
};

export interface FloatingIndicatorProps
  extends BoxProps,
    StylesApiProps<FloatingIndicatorFactory>,
    ElementProps<'div'> {
  /** Target element over which indicator should be displayed */
  target: HTMLElement | null | undefined;

  /** Parent element with relative position based on which indicator position should be calculated */
  parent: HTMLElement | null | undefined;

  /** Transition duration in ms, `150` by default */
  transitionDuration?: number | string;

  /** Determines whether indicator should be displayed after transition ends, should be set if used inside a container that has `transform: scale(n)` styles */
  displayAfterTransitionEnd?: boolean;
}

export type FloatingIndicatorFactory = Factory<{
  props: FloatingIndicatorProps;
  ref: HTMLDivElement;
  stylesNames: FloatingIndicatorStylesNames;
  vars: FloatingIndicatorCssVariables;
}>;

const defaultProps: Partial<FloatingIndicatorProps> = {};

const varsResolver = createVarsResolver<FloatingIndicatorFactory>(
  (_theme, { transitionDuration }) => ({
    root: {
      '--transition-duration':
        typeof transitionDuration === 'number' ? `${transitionDuration}ms` : transitionDuration,
    },
  })
);

export const FloatingIndicator = factory<FloatingIndicatorFactory>((_props, ref) => {
  const props = useProps('FloatingIndicator', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    target,
    parent,
    transitionDuration,
    mod,
    displayAfterTransitionEnd,
    ...others
  } = props;

  const getStyles = useStyles<FloatingIndicatorFactory>({
    name: 'FloatingIndicator',
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

  const innerRef = useRef<HTMLDivElement>(null);
  const { initialized, hidden } = useFloatingIndicator({
    target,
    parent,
    ref: innerRef as any,
    displayAfterTransitionEnd,
  });
  const mergedRef = useMergedRef(ref, innerRef);

  if (!target || !parent) {
    return null;
  }

  return (
    <Box ref={mergedRef} mod={[{ initialized, hidden }, mod]} {...getStyles('root')} {...others} />
  );
});

FloatingIndicator.displayName = '@mantine/core/FloatingIndicator';
FloatingIndicator.classes = classes;

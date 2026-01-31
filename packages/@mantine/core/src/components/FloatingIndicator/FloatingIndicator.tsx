import { useRef } from 'react';
import { useMergedRef, useReducedMotion } from '@mantine/hooks';
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
import classes from './FloatingIndicator.module.css';
import { useFloatingIndicator } from './use-floating-indicator';

export type FloatingIndicatorStylesNames = 'root';
export type FloatingIndicatorCssVariables = {
  root: '--transition-duration';
};

export interface FloatingIndicatorProps
  extends BoxProps, StylesApiProps<FloatingIndicatorFactory>, ElementProps<'div'> {
  /** Target element over which the indicator is displayed.
   * The indicator will be positioned to match the target's size and position.
   * */
  target: HTMLElement | null | undefined;

  /** Parent container element that must have `position: relative`.
   * The indicator's position is calculated relative to this element.
   * */
  parent: HTMLElement | null | undefined;

  /** Transition duration in ms @default 150 */
  transitionDuration?: number | string;

  /** Controls whether the indicator should be hidden initially and displayed after the parent's transition ends.
   * Set to `true` when the parent container has CSS transitions (e.g., `transform: scale()`) to prevent
   * the indicator from appearing at the wrong position during the parent's animation.
   * @default false
   * */
  displayAfterTransitionEnd?: boolean;

  /** Called when the indicator starts transitioning to a new position */
  onTransitionStart?: () => void;

  /** Called when the indicator finishes transitioning to a new position */
  onTransitionEnd?: () => void;
}

export type FloatingIndicatorFactory = Factory<{
  props: FloatingIndicatorProps;
  ref: HTMLDivElement;
  stylesNames: FloatingIndicatorStylesNames;
  vars: FloatingIndicatorCssVariables;
  ctx: { shouldReduceMotion: boolean };
}>;

const varsResolver = createVarsResolver<FloatingIndicatorFactory>(
  (theme, { transitionDuration }, { shouldReduceMotion }) => {
    const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
    const duration = reduceMotion
      ? '0ms'
      : typeof transitionDuration === 'number'
        ? `${transitionDuration}ms`
        : transitionDuration || '150ms';

    return {
      root: {
        '--transition-duration': duration,
      },
    };
  }
);

export const FloatingIndicator = factory<FloatingIndicatorFactory>((_props) => {
  const props = useProps('FloatingIndicator', null, _props);
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
    onTransitionStart,
    onTransitionEnd,
    attributes,
    ref,
    ...others
  } = props;

  const shouldReduceMotion = useReducedMotion();

  const getStyles = useStyles<FloatingIndicatorFactory>({
    name: 'FloatingIndicator',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
    stylesCtx: { shouldReduceMotion },
  });

  const innerRef = useRef<HTMLDivElement>(null);
  const { initialized, hidden } = useFloatingIndicator({
    target,
    parent,
    ref: innerRef,
    displayAfterTransitionEnd,
    onTransitionStart,
    onTransitionEnd,
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

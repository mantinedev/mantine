import { useReducedMotion } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  Factory,
  factory,
  getStyleObject,
  useMantineTheme,
  useProps,
} from '../../core';
import { useCollapse } from './use-collapse';

export interface CollapseProps
  extends BoxProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof BoxProps> {
  /** Opened state */
  in: boolean;

  /** Called each time transition ends */
  onTransitionEnd?: () => void;

  /** Transition duration in ms, `200` by default */
  transitionDuration?: number;

  /** Transition timing function, default value is `ease` */
  transitionTimingFunction?: string;

  /** Determines whether opacity should be animated, `true` by default */
  animateOpacity?: boolean;

  /** Keep element in DOM when collapsed, useful for nested collapses */
  keepMounted?: boolean;
}

export type CollapseFactory = Factory<{
  props: CollapseProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {
  transitionDuration: 200,
  transitionTimingFunction: 'ease',
  animateOpacity: true,
} satisfies Partial<CollapseProps>;

export const Collapse = factory<CollapseFactory>((props, ref) => {
  const {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity,
    keepMounted,
    ...others
  } = useProps('Collapse', defaultProps, props);

  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;

  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd,
    keepMounted,
  });

  if (duration === 0) {
    return opened ? <Box {...others}>{children}</Box> : null;
  }

  return (
    <Box
      {...getCollapseProps({
        style: {
          opacity: opened || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : 'none',
          ...getStyleObject(style, theme),
        },
        ref,
        ...others,
      })}
    >
      {children}
    </Box>
  );
});

Collapse.displayName = '@mantine/core/Collapse';

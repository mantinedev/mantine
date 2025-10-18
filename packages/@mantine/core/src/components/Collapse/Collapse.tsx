import { useCollapse, useReducedMotion } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  Factory,
  factory,
  getStyleObject,
  useMantineTheme,
  useProps,
} from '../../core';

export interface CollapseProps extends BoxProps, Omit<React.ComponentProps<'div'>, keyof BoxProps> {
  /** Expanded state */
  in: boolean;

  /** Called each time the transition ends */
  onTransitionEnd?: () => void;

  /** Transition duration in ms @default `200` */
  transitionDuration?: number;

  /** Transition timing function @default `ease` */
  transitionTimingFunction?: string;

  /** Determines whether the opacity is animated @default `true` */
  animateOpacity?: boolean;

  /** Determines whether the element is kept in the DOM when collapsed @default `false` */
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

export const Collapse = factory<CollapseFactory>((props) => {
  const {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity,
    keepMounted,
    ref,
    ...others
  } = useProps('Collapse', defaultProps, props);

  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;

  const getCollapseProps = useCollapse({
    expanded: opened,
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
      {...others}
      {...getCollapseProps({
        style: {
          opacity: opened || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : 'none',
          ...getStyleObject(style, theme),
        },
        ref,
      })}
    >
      {children}
    </Box>
  );
});

Collapse.displayName = '@mantine/core/Collapse';

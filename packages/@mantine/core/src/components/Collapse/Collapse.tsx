import { Activity } from 'react';
import { useCollapse, useHorizontalCollapse, useReducedMotion } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  Factory,
  factory,
  getStyleObject,
  useMantineEnv,
  useMantineTheme,
  useProps,
} from '../../core';

export interface CollapseProps extends BoxProps, Omit<React.ComponentProps<'div'>, keyof BoxProps> {
  /** Collapse orientation @default 'vertical' */
  orientation?: 'vertical' | 'horizontal';

  /** Expanded state */
  expanded: boolean;

  /** Called when the transition ends */
  onTransitionEnd?: () => void;

  /** Called when transition starts */
  onTransitionStart?: () => void;

  /** Transition duration in ms @default 200 */
  transitionDuration?: number;

  /** Transition timing function @default ease */
  transitionTimingFunction?: string;

  /** Determines whether the opacity is animated @default true */
  animateOpacity?: boolean;

  /** If set, the element is kept in the DOM when collapsed. When `true`, React 19 `Activity` is used to preserve state while collapsed. When `false`, the element is unmounted after the exit animation. @default false */
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
  orientation: 'vertical',
} satisfies Partial<CollapseProps>;

export const Collapse = factory<CollapseFactory>((props) => {
  const {
    children,
    expanded,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    onTransitionStart,
    animateOpacity,
    keepMounted,
    ref,
    orientation,
    ...others
  } = useProps('Collapse', defaultProps, props);

  const env = useMantineEnv();
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;
  const hook = orientation === 'horizontal' ? useHorizontalCollapse : useCollapse;

  const collapse = hook({
    expanded,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd,
    onTransitionStart,
    keepMounted: false,
  });

  if (duration === 0) {
    if (keepMounted === true && env !== 'test') {
      return (
        <Activity mode={expanded ? 'visible' : 'hidden'}>
          <Box {...others}>{children}</Box>
        </Activity>
      );
    }
    return expanded ? <Box {...others}>{children}</Box> : null;
  }

  const isExited = collapse.state === 'exited';

  let content: React.ReactNode;
  if (keepMounted === false) {
    content = isExited ? null : children;
  } else if (keepMounted === true) {
    content = <Activity mode={isExited ? 'hidden' : 'visible'}>{children}</Activity>;
  } else {
    content = children;
  }

  return (
    <Box
      {...others}
      {...collapse.getCollapseProps({
        style: {
          opacity: expanded || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : 'none',
          ...getStyleObject(style, theme),
        },
        ref,
      })}
    >
      {content}
    </Box>
  );
});

Collapse.displayName = '@mantine/core/Collapse';

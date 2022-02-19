import React from 'react';
import { useReducedMotion } from '@mantine/hooks';
import { extractMargins, DefaultProps, useMantineDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import { useCollapse } from './use-collapse';

export interface CollapseProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be collapsed */
  children: React.ReactNode;

  /** Opened state */
  in: boolean;

  /** Called each time transition ends */
  onTransitionEnd?: () => void;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Transition timing function */
  transitionTimingFunction?: string;

  /** Should opacity be animated */
  animateOpacity?: boolean;
}

const defaultProps: Partial<CollapseProps> = {
  transitionDuration: 200,
  transitionTimingFunction: 'ease',
  animateOpacity: true,
};

export function Collapse(props: CollapseProps) {
  const {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity,
    ...others
  } = useMantineDefaultProps('Collapse', defaultProps, props);

  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const { margins, rest } = extractMargins(others);
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd,
  });

  if (duration === 0) {
    return opened ? <Box {...rest}>{children}</Box> : null;
  }

  return (
    <Box {...getCollapseProps({ style, ...rest, ...margins })}>
      <div
        style={{
          opacity: opened || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : 'none',
        }}
      >
        {children}
      </div>
    </Box>
  );
}

Collapse.displayName = '@mantine/core/Collapse';

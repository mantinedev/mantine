import { TransitionStatus } from 'react-transition-group';
import { MantineTheme } from '@mantine/theme';

const inState = {
  opacity: 1,
  transform: 'translateY(0) skew(0deg, 0deg)',
};

const outState = {
  opacity: 0,
  transform: 'translateY(-200px) skew(-10deg, -5deg)',
};

const transitionStyles = {
  entering: inState,
  entered: inState,
  exiting: outState,
  exited: outState,
};

export function getTransitionStyles({
  duration,
  theme,
  state,
}: {
  duration: number;
  theme: MantineTheme;
  state: TransitionStatus;
}) {
  const defaultStyles = {
    transformOrigin: 'top',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: theme.transitionTimingFunction,
    transitionProperty: 'transform, opacity',
  };

  return {
    ...defaultStyles,
    ...transitionStyles[state],
  };
}

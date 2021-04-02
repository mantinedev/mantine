import { TransitionStatus } from 'react-transition-group';
import { MantineTheme } from '@mantine/theme';

const inState = {
  overlay: { opacity: 1 },
  modal: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
};

const outState = {
  overlay: { opacity: 0 },
  modal: { opacity: 0, transform: 'translateY(-200px) skew(-10deg, -5deg)' },
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
  part,
}: {
  duration: number;
  theme: MantineTheme;
  state: TransitionStatus;
  part: 'modal' | 'overlay';
}) {
  const defaultStyles = {
    overlay: {
      opacity: 0,
      transition: `opacity ${duration / 2}ms linear`,
    },

    modal: {
      transformOrigin: 'top',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: theme.transitionTimingFunction,
      transitionProperty: 'transform, opacity',
    },
  };

  return {
    ...defaultStyles[part],
    ...transitionStyles[state][part],
  };
}

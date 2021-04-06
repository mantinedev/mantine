import { TransitionStatus } from 'react-transition-group';
import { MantineTransition, MantineTransitionName, transitions } from '../transitions';

const transitionStatuses = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
} as const;

export function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction,
}: {
  transition: MantineTransitionName | MantineTransition;
  state: TransitionStatus;
  duration: number;
  timingFunction: React.CSSProperties['transitionTimingFunction'];
}): React.CSSProperties {
  if (typeof transition === 'string') {
    return {
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: timingFunction,
      transitionProperty: transitions[transition].transitionProperty,
      ...transitions[transition].common,
      ...transitions[transition][transitionStatuses[state]],
    };
  }

  return {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction,
    transitionProperty: transition.transitionProperty,
    ...transition.common,
    ...transition[transitionStatuses[state]],
  };
}

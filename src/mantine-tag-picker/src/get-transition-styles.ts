import { TransitionStatus } from 'react-transition-group';

export default function getTransitionStyle({
  state,
  duration,
}: {
  state: TransitionStatus;
  duration: number;
}) {
  return {
    transformOrigin: 'top left',
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21)',
    opacity: state === 'entering' || state === 'entered' ? 1 : 0,
    transform: state === 'entering' || state === 'entered' ? 'scale(1)' : 'scale(0)',
  };
}

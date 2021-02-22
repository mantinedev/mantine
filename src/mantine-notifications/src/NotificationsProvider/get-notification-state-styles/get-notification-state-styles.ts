import { TransitionStatus } from 'react-transition-group';

interface NotificationStateStylesProps {
  state: TransitionStatus;
  maxHeight: number;
  transitionDuration: number;
}

export default function getNotificationStateStyles({
  state,
  maxHeight,
  transitionDuration,
}: NotificationStateStylesProps) {
  const defaultStyles: React.CSSProperties = {
    opacity: 0,
    maxHeight,
    transform: 'translateX(-100%)',
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear',
    transitionProperty: 'opacity, transform, max-height',
  };

  const inState = {
    opacity: 1,
    transform: 'translateX(0)',
  };

  const outState = {
    opacity: 0,
    maxHeight: 0,
    transform: 'translateX(100%)',
  };

  const transitionStyles = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState,
  };

  return { ...defaultStyles, ...transitionStyles[state] };
}

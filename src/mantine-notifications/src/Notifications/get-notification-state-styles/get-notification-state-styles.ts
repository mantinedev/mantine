import { TransitionStatus } from 'react-transition-group';
import { CSSObject } from '@mantine/core';
import { NotificationsPositioning } from '../../types';

interface NotificationStateStylesProps {
  state: TransitionStatus;
  maxHeight: number | string;
  positioning: NotificationsPositioning;
  transitionDuration: number;
}

const transforms = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  'top-center': 'translateY(-100%)',
  'bottom-center': 'translateY(100%)',
};

const noTransform = {
  left: 'translateX(0)',
  right: 'translateX(0)',
  'top-center': 'translateY(0)',
  'bottom-center': 'translateY(0)',
};

export default function getNotificationStateStyles({
  state,
  maxHeight,
  positioning,
  transitionDuration,
}: NotificationStateStylesProps): CSSObject {
  const [vertical, horizontal] = positioning;
  const property = horizontal === 'center' ? `${vertical}-center` : horizontal;

  const commonStyles: CSSObject = {
    opacity: 0,
    maxHeight,
    transform: transforms[property],
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear',
    transitionProperty: 'opacity, transform, max-height',
  };

  const inState: CSSObject = {
    opacity: 1,
    transform: noTransform[property],
  };

  const outState: CSSObject = {
    opacity: 0,
    maxHeight: 0,
    transform: transforms[property],
  };

  const transitionStyles = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState,
  };

  return { ...commonStyles, ...transitionStyles[state] };
}

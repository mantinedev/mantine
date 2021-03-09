import React from 'react';
import { TransitionStatus } from 'react-transition-group';

export default function getTransitionStyle({
  state,
  duration,
}: {
  state: TransitionStatus;
  duration: number;
}): React.CSSProperties {
  return {
    transformStyle: 'preserve-3d',
    transformOrigin: 'top left',
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21)',
    opacity: state === 'entering' || state === 'entered' ? 1 : 0,
    transform:
      state === 'entering' || state === 'entered'
        ? 'skew(0) translate(0, 0)'
        : 'skew(-10deg, -5deg) translate(-15px, -15px)',
  };
}

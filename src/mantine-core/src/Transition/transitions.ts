import React from 'react';

export interface MantineTransitionStyles {
  common?: React.CSSProperties;
  in: React.CSSProperties;
  out: React.CSSProperties;
  transitionProperty: React.CSSProperties['transitionProperty'];
}

export type MantineTransitionName = 'fade' | 'skew-up' | 'slide-down';

export type MantineTransition = MantineTransitionName | MantineTransitionStyles;

export const transitions: Record<MantineTransitionName, MantineTransitionStyles> = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: 'opacity',
  },

  'skew-up': {
    in: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
    out: { opacity: 0, transform: 'translateY(-20px) skew(-10deg, -5deg)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  },

  'slide-down': {
    in: { opacity: 1, transform: 'translateY(0)' },
    out: { opacity: 0, transform: 'translateY(-200px)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  },
};

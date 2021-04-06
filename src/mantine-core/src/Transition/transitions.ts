import React from 'react';

export interface MantineTransition {
  common?: React.CSSProperties;
  in: React.CSSProperties;
  out: React.CSSProperties;
  transitionProperty: React.CSSProperties['transitionProperty'];
}

export type MantineTransitionName = 'fade' | 'skew-up';

export const transitions: Record<MantineTransitionName, MantineTransition> = {
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
};

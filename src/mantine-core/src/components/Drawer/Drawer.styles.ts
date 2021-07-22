import React from 'react';
import { createMemoStyles, MantineTheme, getSizeValue } from '../../theme';

export const sizes = {
  xs: 180,
  sm: 240,
  md: 320,
  lg: 360,
  xl: 500,
  full: '100%',
};

export type Position = 'top' | 'bottom' | 'left' | 'right';

interface DrawerStyles {
  theme: MantineTheme;
  position: Position;
  size: number | string;
}

function getPositionStyles({
  position,
  size,
}: {
  position: Position;
  size: number | string;
}): Partial<Record<keyof React.CSSProperties, any>> {
  switch (position) {
    case 'top':
      return { top: 0, left: 0, right: 0, height: getSizeValue({ size, sizes }) };

    case 'bottom':
      return { bottom: 0, left: 0, right: 0, height: getSizeValue({ size, sizes }) };

    case 'right':
      return { bottom: 0, top: 0, right: 0, width: getSizeValue({ size, sizes }) };

    case 'left':
      return { bottom: 0, top: 0, left: 0, width: getSizeValue({ size, sizes }) };

    default:
      return null;
  }
}

export default createMemoStyles({
  noOverlay: {},

  root: {
    '&:not($noOverlay)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },

  drawer: ({ size, position }: DrawerStyles) => ({
    ...getPositionStyles({ position, size }),
    maxWidth: '100%',
    maxHeight: '100vh',
    position: 'fixed',
    outline: 0,
  }),

  title: ({ theme }: DrawerStyles) => ({
    marginRight: theme.spacing.md,
    textOverflow: 'ellipsis',
    display: 'block',
    wordBreak: 'break-word',
  }),

  header: ({ theme }: DrawerStyles) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
    marginRight: -9,
  }),
});

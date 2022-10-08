import React from 'react';
import { createStyles, MantineTheme } from '@mantine/styles';

const sizes = {
  xs: 180,
  sm: 240,
  md: 320,
  lg: 360,
  xl: 500,
  full: '100%',
};

export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerStylesParams {
  position: DrawerPosition;
  size: number | string;
  zIndex: React.CSSProperties['zIndex'];
  withOverlay: boolean;
}

interface GetPositionStyles {
  position: DrawerPosition;
  size: number | string;
  theme: MantineTheme;
}

function getPositionStyles({
  position,
  size,
  theme,
}: GetPositionStyles): Partial<Record<keyof React.CSSProperties, any>> {
  switch (position) {
    case 'top':
      return { top: 0, left: 0, right: 0, height: theme.fn.size({ size, sizes }) };

    case 'bottom':
      return { bottom: 0, left: 0, right: 0, height: theme.fn.size({ size, sizes }) };

    case 'right':
      return { bottom: 0, top: 0, right: 0, width: theme.fn.size({ size, sizes }) };

    case 'left':
      return { bottom: 0, top: 0, left: 0, width: theme.fn.size({ size, sizes }) };

    default:
      return null;
  }
}

export default createStyles(
  (theme, { position, size, zIndex, withOverlay }: DrawerStylesParams) => ({
    closeButton: {},
    overlay: {},

    root: {
      position: 'fixed',
      zIndex,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: withOverlay === false ? 'none' : undefined,
    },

    drawer: {
      ...getPositionStyles({ position, size, theme }),
      maxWidth: '100%',
      maxHeight: '100vh',
      position: 'fixed',
      outline: 0,
      zIndex: 1,
      pointerEvents: withOverlay === false ? 'auto' : undefined,
    },

    title: {
      marginRight: theme.spacing.md,
      textOverflow: 'ellipsis',
      display: 'block',
      wordBreak: 'break-word',
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.md,
    },
  })
);

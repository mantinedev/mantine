import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';
import React from 'react';

export const sizes = {
  xs: 100,
  sm: 120,
  md: 500,
  lg: 360,
  xl: 500,
};

type Position = 'top' | 'bottom' | 'left' | 'right';

interface DrawerStylesProps {
  theme: MantineTheme;
  position: Position;
  size: MantineNumberSize;
}

function getPositionStyles({
  position,
  size,
}: {
  position: Position;
  size: MantineNumberSize;
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

export default createUseStyles({
  wrapper: {
    // position: 'fixed',
  },

  overlay: {},

  drawer: ({ size, position }: DrawerStylesProps) => ({
    ...getPositionStyles({ position, size }),
    position: 'fixed',
  }),
});

import React, { forwardRef } from 'react';
import { useMantineTheme } from '@mantine/styles';
import { getArrowPositionStyles } from './get-arrow-position-styles';
import { FloatingPosition } from '../types';

interface FloatingArrowProps extends React.ComponentPropsWithoutRef<'div'> {
  withBorder: boolean;
  position: FloatingPosition;
  arrowSize: number;
  arrowOffset: number;
  arrowX: number;
  arrowY: number;
  visible: boolean;
}

export const FloatingArrow = forwardRef<HTMLDivElement, FloatingArrowProps>(
  ({ withBorder, position, arrowSize, arrowOffset, visible, arrowX, arrowY, ...others }, ref) => {
    const theme = useMantineTheme();

    if (!visible) {
      return null;
    }

    return (
      <div
        {...others}
        ref={ref}
        style={getArrowPositionStyles({
          withBorder,
          position,
          arrowSize,
          arrowOffset,
          dir: theme.dir,
          arrowX,
          arrowY,
        })}
      />
    );
  }
);

FloatingArrow.displayName = '@mantine/core/FloatingArrow';

import React, { forwardRef } from 'react';
import { getArrowPositionStyles } from './get-arrow-position-styles';
import { FloatingPosition } from '../types';

interface FloatingArrowProps extends React.ComponentPropsWithoutRef<'div'> {
  withBorder: boolean;
  position: FloatingPosition;
  arrowSize: number;
  arrowRadius: number;
  arrowX: number;
  arrowY: number;
  visible: boolean;
}

export const FloatingArrow = forwardRef<HTMLDivElement, FloatingArrowProps>(
  ({ withBorder, position, arrowSize, arrowRadius, visible, arrowX, arrowY, ...others }, ref) => {
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
          arrowRadius,
          arrowX,
          arrowY,
        })}
      />
    );
  }
);

FloatingArrow.displayName = '@mantine/core/FloatingArrow';

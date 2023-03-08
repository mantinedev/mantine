import React, { forwardRef } from 'react';
import { useMantineTheme } from '@mantine/styles';
import { getArrowPositionStyles } from './get-arrow-position-styles';
import { ArrowPosition, FloatingPosition } from '../types';

interface FloatingArrowProps extends React.ComponentPropsWithoutRef<'div'> {
  position: FloatingPosition;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  arrowX: number;
  arrowY: number;
  visible: boolean;
}

export const FloatingArrow = forwardRef<HTMLDivElement, FloatingArrowProps>(
  (
    {
      position,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      visible,
      arrowX,
      arrowY,
      ...others
    },
    ref
  ) => {
    const theme = useMantineTheme();
    if (!visible) {
      return null;
    }

    return (
      <div
        {...others}
        ref={ref}
        style={getArrowPositionStyles({
          position,
          arrowSize,
          arrowOffset,
          arrowRadius,
          arrowPosition,
          dir: theme.dir,
          arrowX,
          arrowY,
        })}
      />
    );
  }
);

FloatingArrow.displayName = '@mantine/core/FloatingArrow';

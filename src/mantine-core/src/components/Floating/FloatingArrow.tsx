import React from 'react';
import { useMantineTheme } from '@mantine/styles';
import { getArrowPositionStyles } from './get-arrow-position-styles';
import { FloatingPosition } from './types';

interface FloatingArrowProps extends React.ComponentPropsWithoutRef<'div'> {
  withBorder: boolean;
  position: FloatingPosition;
  arrowSize: number;
  arrowOffset: number;
  visible: boolean;
}

export function FloatingArrow({
  withBorder,
  position,
  arrowSize,
  arrowOffset,
  visible,
  ...others
}: FloatingArrowProps) {
  const theme = useMantineTheme();

  if (!visible) {
    return null;
  }

  return (
    <div
      {...others}
      style={getArrowPositionStyles({
        withBorder,
        position,
        arrowSize,
        arrowOffset,
        dir: theme.dir,
      })}
    />
  );
}

FloatingArrow.displayName = '@mantine/core/FloatingArrow';

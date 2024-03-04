import React, { useRef } from 'react';
import { Box } from '../../core';
import { useFloatingIndicator } from './use-floating-indicator';
import classes from './FloatingIndicator.module.css';

interface FloatingIndicatorProps {
  target: HTMLElement | null | undefined;
  parent: HTMLElement | null | undefined;
}

export function FloatingIndicator({ target, parent }: FloatingIndicatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { initialized } = useFloatingIndicator(target, parent, ref);

  if (!target || !parent) {
    return null;
  }

  return (
    <Box mod={{ initialized }} className={classes.root} ref={ref} style={{ color: 'red' }}>
      Indicator
    </Box>
  );
}

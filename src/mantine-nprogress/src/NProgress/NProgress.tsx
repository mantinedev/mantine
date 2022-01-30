import { MantineColor } from '@mantine/styles';
import { Box } from '@mantine/core';
import React from 'react';
import useStyles from './NProgress.style';

interface NProgressProps {
  progress: number;
  color: MantineColor;
  size: number;
  transitionDuration: number;
  transition: string;
}

export function NProgress({
  progress,
  color,
  size,
  transitionDuration,
  transition,
}: NProgressProps) {
  const { classes } = useStyles(
    { progress, color, size, transitionDuration, transition },
    { name: 'Progress' }
  );

  return <Box className={classes.container} />;
}

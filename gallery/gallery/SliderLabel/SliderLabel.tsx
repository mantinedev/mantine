import React from 'react';
import { createStyles, RangeSlider } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  label: {
    top: 0,
    height: 28,
    lineHeight: '28px',
    width: 34,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    backgroundColor: 'transparent',
  },

  thumb: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    height: 28,
    width: 34,
    border: 'none',
  },

  dragging: {
    transform: 'translate(-50%, -50%)',
  },
}));

export function SliderLabel() {
  const { classes } = useStyles();
  return <RangeSlider labelAlwaysOn defaultValue={[20, 60]} classNames={classes} />;
}

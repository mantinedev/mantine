import React from 'react';
import { createStyles, RangeSlider, hexToRgba } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  label: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    top: -9,
    paddingLeft: 8,
    paddingRight: 8,
    fontWeight: 700,
  },

  dragging: {
    transform: 'translate(-50%, -50%)',
  },

  bar: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? hexToRgba(theme.colors[theme.primaryColor][7], 0.65)
        : theme.colors[theme.primaryColor][3],
  },
}));

export function SliderLabel() {
  const { classes } = useStyles();
  return <RangeSlider labelAlwaysOn defaultValue={[20, 60]} classNames={classes} />;
}

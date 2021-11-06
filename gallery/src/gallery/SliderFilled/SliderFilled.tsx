import React from 'react';
import { createStyles, Slider } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  thumb: {
    width: 20,
    height: 20,
    borderColor: theme.white,
    backgroundColor: theme.colors[theme.primaryColor][6],
    boxShadow: theme.shadows.sm,
  },

  bar: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
}));

export function SliderFilled() {
  const { classes } = useStyles();
  return <Slider classNames={classes} size={20} defaultValue={50} />;
}

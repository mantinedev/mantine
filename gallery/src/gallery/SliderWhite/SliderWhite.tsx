import React from 'react';
import { createStyles, Slider } from '@mantine/core';
import { GripHorizontal } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  thumb: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[3]
    }`,
    width: 24,
    height: 24,
    color: theme.colors.gray[5],
    backgroundColor: theme.white,
  },
}));

export function SliderWhite() {
  const { classes } = useStyles();
  return (
    <Slider
      classNames={classes}
      thumbChildren={<GripHorizontal size={18} />}
      defaultValue={40}
      label={null}
    />
  );
}

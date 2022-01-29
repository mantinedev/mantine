import React from 'react';
import { createStyles, RangeSlider } from '@mantine/core';
import { Point, GripVertical } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  mark: {
    display: 'none',
  },

  markWrapper: {
    marginTop: 12,
  },

  thumb: {
    width: 16,
    height: 28,
    backgroundColor: theme.white,
    color: theme.colors.gray[5],
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[3]
    }`,
  },
}));

const point = <Point size={10} style={{ marginTop: 6 }} />;

export function SliderMarks() {
  const { classes } = useStyles();
  return (
    <RangeSlider
      mt="xl"
      mb="xl"
      classNames={classes}
      defaultValue={[30, 60]}
      thumbChildren={<GripVertical />}
      marks={[
        { value: 0, label: '0' },
        { value: 12.5, label: point },
        { value: 25, label: '25' },
        { value: 37.5, label: point },
        { value: 50, label: '50' },
        { value: 62.5, label: point },
        { value: 75, label: '75' },
        { value: 87.5, label: point },
        { value: 100, label: '100' },
      ]}
    />
  );
}

import React from 'react';
import { ColorSwatch, Text, Box } from '@mantine/core';
import useStyles from './ColorsGroup.styles';

interface ColorsGroupProps {
  group: string;
}

export function ColorsGroup({ group }: ColorsGroupProps) {
  const { classes, theme } = useStyles();

  const colors = theme.colors[group].map((color, index) => (
    <div key={color} className={classes.color}>
      <ColorSwatch color={color} radius="sm" size={50} />
      <Box mt="xs">
        <Text size="xs">
          {group}[{index}]
        </Text>
        <Text color="dimmed" size="xs" transform="uppercase" mt={2}>
          {color}
        </Text>
      </Box>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.group}>{colors}</div>
    </div>
  );
}

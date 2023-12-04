import React from 'react';
import { useMantineTheme, Text, ColorSwatch, Box } from '@mantine/core';
import classes from './ColorsGroup.module.css';

interface ColorsGroupProps {
  group: string;
}

export function ColorsGroup({ group }: ColorsGroupProps) {
  const theme = useMantineTheme();

  const colors = theme.colors[group].map((color, index) => (
    <div key={color} className={classes.color}>
      <ColorSwatch color={color} radius="md" className={classes.swatch} />
      <Box mt={7}>
        <Text size="xs" className={classes.colorName}>
          {group} {index}
        </Text>
        <Text c="dimmed" size="xs" tt="uppercase" mt={2} fz={10}>
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

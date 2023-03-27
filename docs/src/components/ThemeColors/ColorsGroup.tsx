import React from 'react';
import { ColorSwatch, Text, Box, rem } from '@mantine/core';
import useStyles from './ColorsGroup.styles';

interface ColorsGroupProps {
  group: string;
}

export function ColorsGroup({ group }: ColorsGroupProps) {
  const { classes, theme } = useStyles();

  const colors = theme.colors[group].map((color, index) => (
    <div key={color} className={classes.color}>
      <ColorSwatch color={color} radius="md" size={50} />
      <Box mt={7}>
        <Text size="xs" className={classes.colorName}>
          {group} {index}
        </Text>
        <Text color="dimmed" size="xs" transform="uppercase" mt={2} sx={{ fontSize: rem(10) }}>
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

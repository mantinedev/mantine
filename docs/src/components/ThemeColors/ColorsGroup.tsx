import React from 'react';
import { useMantineTheme, ColorSwatch, Text, Title } from '@mantine/core';
import useStyles from './ColorsGroup.styles';

interface ColorsGroupProps {
  group: string;
}

export function ColorsGroup({ group }: ColorsGroupProps) {
  const theme = useMantineTheme();
  const classes = useStyles();

  const colors = theme.colors[group].map((color, index) => (
    <div key={color} className={classes.color}>
      <ColorSwatch color={color} radius="sm" size={50} />

      <div style={{ marginTop: theme.spacing.xs }}>
        <Text transform="capitalize" size="xs">
          {group} {index}
        </Text>
        <Text color="gray" size="xs" transform="uppercase" style={{ marginTop: 2 }}>
          {color}
        </Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Title order={4} className={classes.title}>
        {group}
      </Title>

      <div className={classes.group}>{colors}</div>
    </div>
  );
}

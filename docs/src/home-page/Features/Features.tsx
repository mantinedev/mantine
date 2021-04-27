import React from 'react';
import { Text, ThemeIcon, Paper, useMantineTheme } from '@mantine/core';
import data from './data';
import useStyles from './Features.styles';

export function Features() {
  const theme = useMantineTheme();
  const classes = useStyles();

  const items = data.map((item) => (
    <Paper className={classes.item} padding="md" key={item.title}>
      <div className={classes.header}>
        <ThemeIcon
          size="xl"
          color={item.color}
          variant={theme.colorScheme === 'dark' ? 'filled' : 'light'}
        >
          <item.icon style={{ width: 24, height: 24 }} />
        </ThemeIcon>
        <Text className={classes.title} size="xl" weight={500}>
          {item.title}
        </Text>
      </div>
      <Text className={classes.description}>{item.description}</Text>
    </Paper>
  ));

  return <div className={classes.wrapper}>{items}</div>;
}

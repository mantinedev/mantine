import React from 'react';
import { createStyles, Group, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    borderRadius: 0,

    '&:not(:first-of-type)': {
      borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 8],
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.radius.sm,
      borderBottomLeftRadius: theme.radius.sm,
    },

    '&:last-of-type': {
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
    },
  },
}));

export function ButtonsGroup() {
  const { classes } = useStyles();
  return (
    <Group grow spacing={0}>
      <Button className={classes.button}>First</Button>
      <Button className={classes.button}>Second</Button>
      <Button className={classes.button}>Third</Button>
    </Group>
  );
}

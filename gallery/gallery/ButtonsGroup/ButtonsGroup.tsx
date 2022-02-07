import React from 'react';
import { createStyles, Group, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    borderRadius: 0,

    '&:not(:first-of-type)': {
      borderLeftWidth: 0,
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
      <Button variant="default" className={classes.button}>
        First
      </Button>
      <Button variant="default" className={classes.button}>
        Second
      </Button>
      <Button variant="default" className={classes.button}>
        Third
      </Button>
    </Group>
  );
}

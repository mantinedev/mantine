import React from 'react';
import { createStyles, Switch, Group, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    '& *': {
      cursor: 'pointer',
    },
  },

  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 1,
    top: 3,
  },

  iconLight: {
    left: 4,
    color: theme.white,
  },

  iconDark: {
    right: 4,
    color: theme.colors.gray[6],
  },
}));

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();

  return (
    <Group position="center" my={30}>
      <div className={classes.root}>
        <Sun className={cx(classes.icon, classes.iconLight)} size={18} />
        <MoonStars className={cx(classes.icon, classes.iconDark)} size={18} />
        <Switch checked={colorScheme === 'dark'} onChange={() => toggleColorScheme()} size="md" />
      </div>
    </Group>
  );
}

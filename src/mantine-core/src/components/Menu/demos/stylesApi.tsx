import React from 'react';
import { createUseStyles } from 'react-jss';
import { theming } from '../../../theme';
import { Menu } from '../Menu';
import { Group } from '../../Group/Group';
import { menuItems } from './_menu-items';

const code = `
import { createUseStyles } from 'react-jss';
import { Menu, theming } from '@mantine/core';

const useStyles = createUseStyles(
  (theme) => ({
    itemHovered: {
      backgroundColor: theme.colors[theme.primaryColor][7],
      color: theme.white,
    },
  }),
  { theming }
);

function Demo() {
  const classes = useStyles();
  return (
    <Menu classNames={classes}>
      {/* Menu items... */}
    </Menu>
  );
}
`;

const useStyles = createUseStyles(
  (theme) => ({
    itemHovered: {
      backgroundColor: theme.colors[theme.primaryColor][7],
      color: theme.white,
    },
  }),
  { theming }
);

function Demo() {
  const classes = useStyles();
  const items = [...menuItems];
  items.splice(4, 1);
  return (
    <Group position="center">
      <Menu classNames={classes}>{items}</Menu>
    </Group>
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

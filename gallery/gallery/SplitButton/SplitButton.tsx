import React from 'react';
import { createStyles, Button, Menu, Group, ActionIcon } from '@mantine/core';
import { Trash, Bookmark, Calendar, ChevronDown } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

export function SplitButton() {
  const { classes, theme } = useStyles();
  const menuIconColor = theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6];

  return (
    <Group noWrap spacing={0}>
      <Button className={classes.button}>Send</Button>
      <Menu
        control={
          <ActionIcon
            variant="filled"
            color={theme.primaryColor}
            size={36}
            className={classes.menuControl}
          >
            <ChevronDown size={16} />
          </ActionIcon>
        }
        transition="pop"
        placement="end"
      >
        <Menu.Item icon={<Calendar size={16} color={menuIconColor} />}>
          Schedule for later
        </Menu.Item>
        <Menu.Item icon={<Bookmark size={16} color={menuIconColor} />}>Save draft</Menu.Item>
        <Menu.Item icon={<Trash size={16} color={menuIconColor} />}>Delete</Menu.Item>
      </Menu>
    </Group>
  );
}

import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@modulz/radix-icons';
import { UnstyledButton, Group, Avatar, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

export function User() {
  const { classes, theme } = useStyles();

  return (
    <div
      style={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton className={classes.user}>
        <Group>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Amy Horsefighter
            </Text>
            <Text color="dimmed" size="xs">
              ahorsefighter@gmail.com
            </Text>
          </div>

          {theme.dir === 'ltr' ? (
            <ChevronRightIcon width={18} height={18} />
          ) : (
            <ChevronLeftIcon width={18} height={18} />
          )}
        </Group>
      </UnstyledButton>
    </div>
  );
}

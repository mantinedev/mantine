import React, { forwardRef } from 'react';
import { ChevronRightIcon } from '@modulz/radix-icons';
import { Group, Avatar, Text, UnstyledButton, UnstyledButtonProps, Menu } from '@mantine/core';
import { menuItems } from './_menu-items';

const code = `
import { forwardRef } from 'react';
import { ChevronRightIcon } from '@modulz/radix-icons';
import { Group, Avatar, Text, Menu, UnstyledButton, UnstyledButtonProps } from '@mantine/core';

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <ChevronRightIcon />}
      </Group>
    </UnstyledButton>
  )
);

function Demo() {
  return (
    <Group position="center">
      <Menu
        withArrow
        placement="center"
        control={
          <UserButton
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            name="Harriette Spoonlicker"
            email="hspoonlicker@outlook.com"
          />
        }
      >
        {menuItems}
      </Menu>
    </Group>
  );
}
`;

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <ChevronRightIcon />}
      </Group>
    </UnstyledButton>
  )
);

function Demo() {
  return (
    <Group position="center">
      <Menu
        withArrow
        placement="center"
        control={
          <UserButton
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            name="Harriette Spoonlicker"
            email="hspoonlicker@outlook.com"
          />
        }
      >
        {menuItems}
      </Menu>
    </Group>
  );
}

export const customControl: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

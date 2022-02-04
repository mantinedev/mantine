import React from 'react';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { Group, ActionIcon, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Logo, LogoWhite } from './_logo';

export function Brand() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div
      style={{
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      }}
    >
      <Group position="apart">
        {colorScheme === 'dark' ? <LogoWhite /> : <Logo />}
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </ActionIcon>
      </Group>
    </div>
  );
}

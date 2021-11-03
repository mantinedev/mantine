import React from 'react';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { Group, ActionIcon } from '../../../index';
import logo from './logo.svg';
import logoWhite from './logo-white.svg';

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
        <img alt="" src={colorScheme === 'dark' ? logoWhite : logo} width={100} />
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </ActionIcon>
      </Group>
    </div>
  );
}

import React from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons';
import { HeaderControl } from './HeaderControl';

export function ColorSchemeControl() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <HeaderControl
      onClick={() => toggleColorScheme()}
      tooltip={`${colorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={22} stroke={1.5} />
      ) : (
        <IconMoon size={22} stroke={1.5} />
      )}
    </HeaderControl>
  );
}

import React from 'react';
import { Group, useMantineColorScheme } from '@mantine/core';
import { TextDirectionRtl, TextDirectionLtr, Sun, Moon } from 'tabler-icons-react';
import { MarkGithubIcon } from '@primer/octicons-react';
import { DiscordIcon } from './DiscordIcon';
import { HeaderControl } from './HeaderControl';
import { useDirectionContext } from '../../DirectionContext';

export function HeaderControls() {
  const { dir, toggleDirection } = useDirectionContext();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group pr="md" spacing="xs">
      <HeaderControl
        link="https://github.com/mantinedev/mantine/"
        tooltip="Discord"
        variant="discord"
      >
        <DiscordIcon size={20} />
      </HeaderControl>

      <HeaderControl link="https://github.com/mantinedev/mantine/" tooltip="Source code">
        <MarkGithubIcon size={20} />
      </HeaderControl>

      <HeaderControl
        onClick={toggleDirection}
        tooltip={`${dir === 'ltr' ? 'RTL' : 'LTR'} direction`}
      >
        {dir === 'rtl' ? <TextDirectionLtr size={22} /> : <TextDirectionRtl size={22} />}
      </HeaderControl>
      <HeaderControl
        onClick={() => toggleColorScheme()}
        tooltip={`${colorScheme === 'dark' ? 'Light' : 'Dark'} mode`}
      >
        {colorScheme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
      </HeaderControl>
    </Group>
  );
}

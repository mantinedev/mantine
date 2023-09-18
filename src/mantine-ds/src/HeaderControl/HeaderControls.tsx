import React from 'react';
import { BoxProps, Group, Tooltip } from '@mantine/core';
import { ColorSchemeControl } from './ColorSchemeControl';
import { DirectionControl } from './DirectionControl';
import { GithubControl } from './GithubControl';
import { DiscordControl } from './DiscordControl';
import { SearchControl } from '../SearchControl';

interface HeaderControlsProps extends BoxProps {
  onSearch(): void;
  githubLink: string;
  withDirectionToggle?: boolean;
}

export function HeaderControls({
  onSearch,
  githubLink,
  withDirectionToggle = true,
  ...others
}: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group gap="xs" {...others}>
        <SearchControl onClick={onSearch} />
        <DiscordControl />
        <GithubControl link={githubLink} />
        {withDirectionToggle && <DirectionControl />}
        <ColorSchemeControl />
      </Group>
    </Tooltip.Group>
  );
}

import React from 'react';
import { BoxProps, Group, Tooltip } from '@mantine/core';
import { ColorSchemeControl } from './ColorSchemeControl';
import { DirectionControl } from './DirectionControl';
import { GithubControl } from './GithubControl';
import { DiscordControl } from './DiscordControl';
import { SearchControl } from './SearchControl';

interface HeaderControlsProps extends BoxProps {
  onSearch?: () => void;
  githubLink?: string;
  withDirectionToggle?: boolean;
  withSearch?: boolean;
  withGithub?: boolean;
  withDiscord?: boolean;
  discordLink: string;
  withColorScheme?: boolean;
}

export function HeaderControls({
  onSearch,
  githubLink,
  withDirectionToggle = true,
  withSearch = true,
  withGithub = true,
  withDiscord = true,
  withColorScheme = true,
  discordLink,
  ...others
}: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group gap="xs" {...others}>
        {withSearch && <SearchControl onClick={onSearch} />}
        {withDiscord && <DiscordControl link={discordLink} />}
        {withGithub && <GithubControl link={githubLink!} />}
        {withDirectionToggle && <DirectionControl />}
        {withColorScheme && <ColorSchemeControl />}
      </Group>
    </Tooltip.Group>
  );
}

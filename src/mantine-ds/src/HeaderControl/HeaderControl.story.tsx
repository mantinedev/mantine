import { Group } from '@mantine/core';
import { noop } from '@mantine/utils';
import React from 'react';
import { ColorSchemeControl } from './ColorSchemeControl';
import { GithubControl } from './GithubControl';
import { DiscordControl } from './DiscordControl';
import { DirectionControl } from './DirectionControl';
import { HeaderControls } from './HeaderControls';

export default { title: 'DS/HeaderControl' };

export function Usage() {
  return (
    <Group>
      <DiscordControl />
      <ColorSchemeControl />
      <GithubControl link="https://mantine.dev" />
      <DirectionControl direction="rtl" toggleDirection={noop} />
    </Group>
  );
}

export function Grouped() {
  return (
    <div style={{ padding: 40 }}>
      <HeaderControls
        onSearch={noop}
        githubLink="https://mantine.dev"
        direction="rtl"
        toggleDirection={noop}
      />
    </div>
  );
}

import React from 'react';
import { RocketIcon } from '@modulz/radix-icons';
import { Group, ThemeIcon } from '@mantine/core';

const code = `
<ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'orange', to: 'red' }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>{icon}</ThemeIcon>
`;

function Demo() {
  return (
    <Group position="center">
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <RocketIcon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <RocketIcon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <RocketIcon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <RocketIcon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>
        <RocketIcon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

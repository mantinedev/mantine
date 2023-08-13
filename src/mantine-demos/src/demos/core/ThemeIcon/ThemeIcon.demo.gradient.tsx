import React from 'react';
import { IconPhoto } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Group, ThemeIcon } from '@mantine/core';

const code = `
import { IconPhoto } from '@tabler/icons-react';
import { ThemeIcon } from '@mantine/core';

function Demo() {
  return (
    <>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon
        size="lg"
        variant="gradient"
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      >
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

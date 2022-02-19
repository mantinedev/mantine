import React from 'react';
import { Photo } from 'tabler-icons-react';
import { Group, ThemeIcon } from '@mantine/core';

const code = `
import { Photo } from 'tabler-icons-react';
import { ThemeIcon } from '@mantine/core';

function Demo() {
  return (
    <>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>
        <Photo size={20} />
      </ThemeIcon>
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <Photo size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>
        <Photo size={20} />
      </ThemeIcon>
    </Group>
  );
}

export const gradient: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
